<template>
    <div>
        <button @click="gotoAbout">点我跳转</button>
    </div>
</template>
<script>
import Number from '../components/Number';
export default {
    props: {
        name: {
            required: true
        }
    },
    components: {
        Number
    },
    data() {
        return {
            value: '123456',
            // route: this.$route
        }
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log('beforeRouteEnter 组件2内进入守卫');
        next();
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log('beforeRouteUpdate 组件2内更新守卫');
        next();
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('beforeRouteLeave 组件2内离开守卫');
        next();
    },
    beforeCreate() {
        console.log('组件2：beforeCreate');
    },
    created() {
        console.log('组件2：created');
    },
    beforeMount() {
        console.log('组件2：beforeMounte');
    },
    mounted() {
        console.log('组件2：mounted');
    },
    beforeRouteUpdate() {
        console.log('组件2：beforeRouteUpdate');
    },
    beforeDestroy() {
        console.log('组件2：beforeDestroy');  
    },
    destroyed () {
        console.log('组件2：destroyed ');  
    },
    methods: {
        gotoAbout() {
            this.$router.push({ name: 'home'}, () => {
                console.log('组件2：onComplete回调');
            }, () => {
                console.log('组件2,自我跳转：onAbort回调');
            });
        }
    }
}
</script>