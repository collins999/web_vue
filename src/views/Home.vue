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