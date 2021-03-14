// 收集性能信息
const getPerformance = () => {
    if (!window.performance) return
    const timing = window.performance.timing
    const performance = {
        // 重定向耗时
        redirect: timing.redirectEnd - timing.redirectStart,
        // 白屏时间
        whiteScreen: whiteScreen,
        // DOM 渲染耗时
        dom: timing.domComplete - timing.domLoading,
        // 页面加载耗时
        load: timing.loadEventEnd - timing.navigationStart,
        // 页面卸载耗时
        unload: timing.unloadEventEnd - timing.unloadEventStart,
        // 请求耗时
        request: timing.responseEnd - timing.requestStart,
        // 获取性能信息时当前时间
        time: new Date().getTime(),
    }

    return performance
}

// 获取资源信息
const getResources = () => {
    if (!window.performance) return
    const data = window.performance.getEntriesByType('resource')
    const resource = {
        xmlhttprequest: [],
        css: [],
        other: [],
        script: [],
        img: [],
        link: [],
        fetch: [],
        // 获取资源信息时当前时间
        time: new Date().getTime(),
    }

    data.forEach(item => {
        const arry = resource[item.initiatorType]
        arry && arry.push({
            // 资源的名称
            name: item.name,
            // 资源加载耗时
            duration: item.duration.toFixed(2),
            // 资源大小
            size: item.transferSize,
            // 资源所用协议
            protocol: item.nextHopProtocol,
        })
    })

    return resource
}

// 作者：谭光志
// 链接：https://juejin.cn/post/6899430989404045320
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 捕获资源加载失败错误 js css img...
addEventListener('error', e => {
    const target = e.target
    if (target != window) {
        monitor.errors.push({
            type: target.localName,
            url: target.src || target.href,
            msg: (target.src || target.href) + ' is load error',
            // 错误发生的时间
            time: new Date().getTime(),
        })
    }
}, true)

// 监听 js 错误
window.onerror = function(msg, url, row, col, error) {
    monitor.errors.push({
        type: 'javascript',
        row: row,
        col: col,
        msg: error && error.stack? error.stack : msg,
        url: url,
        // 错误发生的时间
        time: new Date().getTime(),
    })
}

// 监听 promise 错误 缺点是获取不到行数数据
addEventListener('unhandledrejection', e => {
    monitor.errors.push({
        type: 'promise',
        msg: (e.reason && e.reason.msg) || e.reason || '',
        // 错误发生的时间
        time: new Date().getTime(),
    })
})


window.onload = () => {
    // 在浏览器空闲时间获取性能及资源信息
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback
    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
            monitor.performance = getPerformance()
            monitor.resources = getResources()
        })
    } else {
        setTimeout(() => {
            monitor.performance = getPerformance()
            monitor.resources = getResources()
        }, 0)
    }
}

// 作者：谭光志
// 链接：https://juejin.cn/post/6899430989404045320
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。