function observer(value) {
    if (!value || (typeof value !== 'object')) {
        return;
    }
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key]);
    });
}
function defineReactive(obj, key, value) {
    Object.defineProperty(obj, key, {
        emumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            return value;
        },
        set: function reactiveSetter(newVal) {
            if (value === newVal) return;
            value = newVal;
            cb(newVal);
        }
    })
}
function cb(value) {
    console.log('视图更新了', value);
}

class Vue{
    constructor(options) {
        this._data = options.data;
        observer(this._data);
    }
}

let o = new Vue({
    data: {
        test: '我是测试'
    }
});
o._data.test = '你好';