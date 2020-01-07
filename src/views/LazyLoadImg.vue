<template>
    <div class="home">
        <div class="mutil-column">
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/111.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/222.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/333.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/444.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/555.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/666.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/777.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/111.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/222.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/333.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/444.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/555.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/666.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/777.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/111.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/222.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/333.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/444.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/555.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/666.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/777.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/111.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/222.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/333.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/444.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/555.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/666.jpg">
            </div>
            <div class="item">
                <img alt="Vue logo" scr='' data-src="../assets/777.jpg">
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            imgs: [],
            containr: '',
            viewHeight: '',
            count: 0,
        }
    },
    mounted() {
        // 获取所有图片的数组
        this.imgs = document.querySelectorAll('.mutil-column img');
        // 获取父元素
        this.containr = document.querySelector('.mutil-column')
        // 获取可视区域高度
        this.viewHeight = window.innerHeight;
        this.lazyLoad();
        // 添加滚动事件触发加载
        this.containr.addEventListener('scroll', this.lazyLoad, false)
    },
    methods: {
        lazyLoad() {
            console.log(this.containr);
            // 运用闭包 count 进行计数 避免已显示的图片重复参与循环
            for (let i = this.count; i < this.imgs.length; i++) {
                // getBoundingClientRect()获取返回元素的大小及其相对于视口的位置
                // 获取第i张图片是否在可视区域
                let distance = this.viewHeight - this.imgs[i].getBoundingClientRect().top
                if (distance >= 0) {
                    // 图片在可视区域时设置图片的src 为 当前元素 data-src
                    this.imgs[i].src = this.imgs[i].getAttribute('data-src')
                    // 图片已被显示，下次从count + 1 张开始检查是否在可视区域
                    this.count += 1
                }
            }
        }
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
    height: 300px;
    width: 100%;
}
</style>