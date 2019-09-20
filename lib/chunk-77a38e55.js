'use strict';

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10);
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
  }
}

/**
 * @description                       将函数转成防抖动函数
 * @param  {Function}                 需要转成防抖动函数的函数
 * @param  {number}                   延迟时间（毫秒数）
 * @param  {boolean}                  是否执行第一次
 * @return {undefined}                无返回值
 */
function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
  var runFirstFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var timer = null;

  return function () {
    // 清除定时器
    clearTimeout(timer);

    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    if (runFirstFn) {
      fn.apply(this, rest);
      runFirstFn = false;
      return;
    }

    // 设置定时器
    timer = setTimeout(fn.bind.apply(fn, [this].concat(rest)), delay);
  };
}

function observerDomResize(dom, callback) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  var observer = new MutationObserver(callback);

  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
  });

  return observer;
}

function getPointDistance(pointOne, pointTwo) {
  var minusX = Math.abs(pointOne[0] - pointTwo[0]);

  var minusY = Math.abs(pointOne[1] - pointTwo[1]);

  return Math.sqrt(minusX * minusX + minusY * minusY);
}

function co(gen) {
  if (!gen || typeof gen.next !== 'function') return;

  next(gen.next());

  function next(ret) {
    if (ret.done) return ret.value;

    var value = ret.value;

    if (value && !isPromise(value)) return next(gen.next());

    if (value && isPromise(value)) return value.then(function () {
      return next(gen.next());
    });
  }

  function isPromise(obj) {
    return typeof obj.then === 'function';
  }
}

exports.debounce = debounce;
exports.observerDomResize = observerDomResize;
exports.randomExtend = randomExtend;
exports.co = co;
exports.getPointDistance = getPointDistance;
//# sourceMappingURL=chunk-77a38e55.js.map
