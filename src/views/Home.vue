<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" :title="title">
            <template #header="{ user, info }">
                <h1>Here might be a page title</h1>
                <div>{{ user.firstName }}</div>
                <div>{{ info.name }}</div>
            </template>
            <template v-slot:footer>
                <p>Here's some contact info</p>
            </template>
        </HelloWorld>
        <button @click="gotoAbout">点我跳转</button>
    </div>
</template>
<script>
    // @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    data() {
        return {
            title: 'say say say ....',
        }
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log('beforeRouteEnter 组件1内进入守卫');
        next();
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log('beforeRouteUpdate 组件1内更新守卫');
        next();
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('beforeRouteLeave 组件1内离开守卫');
        next();
    },
    beforeCreate() {
        console.log('组件1：beforeCreate');
    },
    created() {
        console.log('组件1：created');
    },
    beforeMount() {
        console.log('组件1：beforeMounte');
    },
    mounted() {
        console.log('组件1：mounted');
    },
    beforeRouteUpdate() {
        console.log('组件1：beforeRouteUpdate');
    },
    beforeDestroy() {
        console.log('组件1：beforeDestroy');  
    },
    destroyed () {
        console.log('组件1：destroyed ');  
    },
    methods: {
        gotoAbout() {
            this.$router.push({ name: 'number', params: { name: 111 }}, () => {
                console.log('组件1：onComplete回调');
            }, () => {
                console.log('组件1,自我跳转：onAbort回调');
            });
        }
    }
}
</script>
<style type="text/css" scoped>
.panel {
    margin-bottom: .5rem
}

.panel, .panel-header {
    border: 1px solid #d3d3d3;
    border-radius: 4px;
}

.panel-header, .panel-body, .panel {
    padding: .5rem;
}

.panel-header {
    background-color: #efefef;
    color: #eeeee
}
</style>