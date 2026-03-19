// 海梦的AI工具宝库 - Service Worker
// 缓存策略：Stale-while-revalidate

const CACHE_NAME = 'ai-tools-hub-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/detail.html',
    '/privacy.html',
    '/terms.html',
    '/contact.html',
    '/submit.html',
    '/faq.html',
    '/ranking.html',
    '/404.html'
];

// 安装事件
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.log('Cache install failed:', err);
            })
    );
    self.skipWaiting();
});

// 激活事件
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 请求事件 - 缓存优先
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果找到缓存，直接返回
                if (response) {
                    return response;
                }
                
                // 否则发起网络请求
                return fetch(event.request).then(response => {
                    // 检查是否有效响应
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // 克隆响应
                    const responseToCache = response.clone();
                    
                    // 缓存新请求
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                });
            })
            .catch(() => {
                // 如果都失败，返回离线页面
                return caches.match('/404.html');
            })
    );
});
