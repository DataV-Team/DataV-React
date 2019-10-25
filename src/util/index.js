export function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

/**
 * @description                       将函数转成防抖动函数
 * @param  {Function}                 需要转成防抖动函数的函数
 * @param  {number}                   延迟时间（毫秒数）
 * @param  {boolean}                  是否执行第一次
 * @return {undefined}                无返回值
 */
export function debounce(fn, delay = 600, runFirstFn = true) {
  let timer = null

  return function(...rest) {
    // 清除定时器
    clearTimeout(timer)
    if (runFirstFn) {
      fn.apply(this, rest)
      runFirstFn = false
      return
    }

    // 设置定时器
    timer = setTimeout(fn.bind(this, ...rest), delay)
  }
}

export function observerDomResize(dom, callback) {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
  })

  return observer
}

export function getPointDistance(pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function co(gen) {
  let destroyed = false

  if (typeof gen === 'function') gen = gen()

  if (!gen || typeof gen.next !== 'function') return () => ({})

  Promise.resolve().then(() => {
    destroyed || next(gen.next())
  })

  return () => {
    destroyed = true

    Promise.resolve().then(() => {
      gen.return()

      gen = null
    })
  }

  function next(ret) {
    if (ret.done) return ret.value

    return Promise.resolve(ret.value).then(() => {
      destroyed || next(gen.next())
    })
  }
}
