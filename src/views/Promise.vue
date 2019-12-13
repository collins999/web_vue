<template>
    <div>
        <h1>多个 `.catch`</h1>
        <div>
            <pre>
            let promise = new Promise((resolve, reject) => {
                reject(Error('我是错误的'));
            });
            promise.catch((error) => {
                this.result1 = `结果1：${error}`;
            }).catch((error) => {
                this.result1 = `结果1测试：${error}`;
            });
            promise.catch((error) => {
                this.result2 = `结果2：${error}`;
            });
            </pre>
            <button @click="click1">执行多个 `.catch`代码</button>
        </div>
        <h1>链接 `.then` 和 `.catch`</h1>
        <div>
            <pre>
            </pre>
            <button @click="click2">链接 `.then` 和 `.catch`</button>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            result1: '',
            result2: ''
        }
    },
    created() {

    },
    methods: {
        click1() {
            let promise = new Promise((resolve, reject) => {
                reject(Error('我是错误的'));
            });
            promise.catch((error) => {
                console.log(`结果1：${error}`);
            }).catch((error) => {
                console.log(`结果1测试：${error}`);
            });
            promise.catch((error) => {
                console.log(`结果2：${error}`);
            });
        },
        click2() {
            let promise = new Promise((resolve, reject) => {
                reject(Error('我是错误的'));
            });
            promise.catch((error) => {
                console.log(`结果1：${error}`);
            }).catch((error) => {
                console.log(`结果1测试：${error}`);
            });
            promise.catch((error) => {
                console.log(`结果2：${error}`);
            });
        }
    }
}
</script>
<style type="text/css">
</style>