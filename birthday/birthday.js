var Time = {
    getFormatTime: function(timestamp) {
        var date = new Date();
        var now = date.getTime();
        var timer = (now - timestamp) / 1000;
        var tip = '';
        tip = '您已出生' + Math.ceil(timer/86400) + '天';
        return tip;
    }
}

Vue.directive('birthday', {
    bind: function (el, binding) {
        el.innerHTML = Time.getFormatTime(binding.value);
        el.__timeout__ = setInterval(function() {
            el.innerHTML = Time.getFormatTime(binding.value);
        }, 60000);
    },
    unbind: function (el) {
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
})