<!-- <template functional>
    <div>函数、无状态组件</div>
</template> -->

<script>
    export default {
        functional: true,
        props: {
        	router: {
        		type: Object
        	}
        },
        render(createElement, context) {
        	console.log(context);
        	return createElement(`h1`, '函数/无状态组件')
        }
    }
</script>