<template>
    <div>
        <slot name="header" :user="user" :info="info">
           
        </slot>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            user: {
                firstName: '我是作用域插槽属性'
            },
            info: {
                name: '1'
            }
        }
    }
}
</script>

<!-- <script type="text/javascript">
export default {
    name: 'panel',
    functional: true,
    props: {
        title: String
    },
    render(createElement, context) {
        const slots = context.slots();

        const header = createElement('header', {
            attrs: { class: 'panel-header' }
        }, context.props.title);

        const body = createElement('main', {
            attrs: { class: 'panel-body' }
        }, slots.header);

        return createElement('section', {
            attrs: { class: 'panel' }
        }, [header, body]);
    }
}
</script> -->