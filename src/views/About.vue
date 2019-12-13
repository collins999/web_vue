<!-- <template functional>
    <div>函数、无状态组件</div>
</template> -->

<script>
    export default {
        functional: true,
        props: {},
        render(createElement, context) {
            return createElement('div', '函数/无状态组件')
        }
    }
</script>