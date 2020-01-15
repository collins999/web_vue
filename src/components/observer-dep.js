// 订阅者Dep
class Dep {
    constructor() {
        // 存放watcher的数组
        this.subs = [];
    }
    // 在subs中添加一个watcher对象
    addSub(sub) {
        this.subs.push(sub);
    }
    // 通知所有watcher对象更新视图
    notify() {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}
class Watcher {
    constructor() {
        // 在new一个watcher对象时，将该对象赋值给Dep.target，在get中会用到
        Dep.target = this;
    }
    update() {
        console.log('视图更新了~');
    }
}
Dep.target = null;


function observer(value) {
    if (!value || (typeof value !== 'object')) {
        return;
    }
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key]);
    });
}
function defineReactive(obj, key, value) {
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        emumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            dep.addSub(Dep.target);
            return value;
        },
        set: function reactiveSetter(newVal) {
            if (value === newVal) return;
            // 在set的时候触发dep的notify来通知所有的wathcer对象更新视图
            dep.notify();
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
        new Watcher();
        console.log('render~', this._data.test);
    }
}

let o = new Vue({
    data: {
        test: '我是测试'
    }
});
o._data.test = '你好';
