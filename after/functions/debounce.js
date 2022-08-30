function Debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait); //얘가 시간지나면 timeout을 0(false)로 만들어줌
        if (callNow) func.apply(context, args);
    };
}

module.exports(Debounce);
