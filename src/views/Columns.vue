<template>
    <div class="home">
        <div class="mutil-column">
            <div class="item">
                <img alt="Vue logo" src="../assets/111.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/222.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/333.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/444.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/555.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/666.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/777.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/111.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/222.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/333.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/444.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/555.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/666.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" src="../assets/777.jpg">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'columns',
    components: {
    },
    data() {
        return {
            title: 'say say say ....',
        }
    },
    created() {
    }
}
</script>
<style type="text/css" scoped>
.mutil-column {
    column-count: 4;
    column-width: 100px;
    column-gap: 10px;
}
.mutil-column .item {
    border:1px solid #999;
    margin-bottom: 10px;
}
.mutil-column .item img {
    width: 100%;
}
</style>