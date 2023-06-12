const weatherApp = "weather-app-v1"
const assets = [
  "./index.html",
  "./favicon.png",
  "./manifest.json",
  "./robots.txt",
  "./static/"
]

self.addEventListener("install", installEvent => {

  console.log('install here')

  installEvent.waitUntil(
    caches.open(weatherApp).then(cache => {
      console.log('assets:', assets)
      cache.addAll(assets).catch((er) => console.error('sw error', er))
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