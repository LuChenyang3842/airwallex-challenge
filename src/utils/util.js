/**
 * Only call the func every time after a wait milliseconds if it's too frequently called.
 */
const throttle = (func, wait, callLastTime) => {
  var last = 0;
  var lastTimer = null;
  var lastTimeDuration = wait + (wait > 25 ? wait : 25); // plus half wait time.
  return function () {
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    const time = new Date().getTime();
    if (time - last > wait) {
      if (callLastTime) {
        lastTimer && clearTimeout(lastTimer);
        lastTimer = setTimeout(function () {
          lastTimer = null;
          func.apply(this, args);
        }, lastTimeDuration);
      }
      func.apply(this, args);
      last = time;
    }
  };
};
