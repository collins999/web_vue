<template>
    <div class="chartNum">
        <div class="box-item">
            <div class="number-item" :class=" className ? className : 'default-number-item' " v-for="(item, index) in showArray" :key="index">
                <span v-if="!isNaN(item)">
                    <i ref="numberItem">0123456789</i>
                </span>
                <span class="comma" v-else>{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * 实现数字翻牌动态效果，css 属性 writing-mode: vertical-lr，使数字竖直排版，
 * 2d移动 transform: translate(-50%, -40%); y值控制移动至哪个数字，
 * transition 控制transform属性有动画效果 
 */
export default {
    props: {
        value: {
            type: Number | String,
            required: true,
            default: '000000'
        },
        // 位数
        digit: {
            type: Number,
            default: 6
        },
        className: {
            type: String,
            default: 'default-number-item'
        }
    },
    data() {
        return {
            showArray: []
        }
    },
    created() {
        // 初始化数组
        this.showArray = new Array(this.digit).fill('0');
    },
    mounted() {
        let timer = setTimeout(() => {
            this.numberOption(this.value);
            timer = null;
        }, 500);
    },
    methods: {
        /**
         * [numberOption 数组处理]
         * @version  [1.0]
         * @param    {[Number | String]}  num [需要暂时的数据]
         */
        numberOption(num) {
            num = num.toString();
            if (num.length < this.digit) {
                // 如果未满指定位数，前面用0做填充
                num = '0' + num;
                this.numberOption(num);
            } else if (num.length === this.digit) {
                // 拆分数组
                this.showArray = num.split('');
            } else {
                // 如果需要展示的位数小于输入的数字长度，截取需要展示的位数
                this.showArray = num.split('').splice(0, this.digit);
            }
            this.setNumberTransform();
        },
        /**
         * [setNumberTransform 设置文字滚动]
         * @version  [1.0]
         */
        setNumberTransform() {
             // 拿到数字的ref，计算元素数量
            const numberItems = this.$refs.numberItem;
            // 过滤非数字字符
            this.showArray = this.showArray.filter(item => !isNaN(item));
            // 结合CSS 对数字字符进行滚动,显示订单数量
            for (let index = 0; index < numberItems.length; index++) {
                const elem = numberItems[index];
                elem.style.transform = `translate(-50%, -${this.showArray[index] * 10}%)`;
            }
        }
    }
}
</script>
<style scoped lang='scss'>
.chartNum {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.box-item {
    position: relative;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    // writing-mode: vertical-lr;
    text-orientation: upright;
    /*文字禁止编辑*/
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
}
/*滚动数字设置*/
.number-item {
    list-style: none;
}
.default-number-item {
    color: #2D7CFF;
    text-align: center;
    font-size: 54px;
    line-height: 41px;
    width: 41px;
    height: 75px;
    margin-right: 5px;
    border-radius: 4px;
    border: 1px solid rgba(221, 221, 221, 1);
}
.number-item {
    &>span {
        position: relative;
        display: inline-block;
        margin-right: 10px;
        width: 100%;
        height: 100%;
        writing-mode: vertical-rl;
        text-orientation: upright;
        overflow: hidden;
        &>i {
            font-style: normal;
            position: absolute;
            top: 20%;
            left: 50%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            transform: translate(-50%, 0);
            transition: transform 1s ease-in-out;
            letter-spacing: 10px;
        }
    }
}
.number-item:last-child {
    margin-right: 0;
}
</style>