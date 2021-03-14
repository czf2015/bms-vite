const cacheFib = (n) => n * 1000

self.onmessage = (event) => {
    const { data } = event
    const result = cacheFib(data)
    self.postMessage(result)
}