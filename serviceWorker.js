const weatherApp = "weather-app-v1"
const assets = [
  "/",
  '/favicon.png',
  "/index.html",
  "/static/*",
]

self.addEventListener("install", installEvent => {

  console.log('install here')

  installEvent.waitUntil(
    caches.open(weatherApp).then(cache => {
      console.log('assets:', assets)
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})