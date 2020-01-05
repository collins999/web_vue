<template>
    <div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {}
    },
    created() {
        let array = [];
        for (let i = 0; i < 1000; i++) {
            let number = Math.floor(Math.random() * 1000);
            array.push(number);
        }

        console.log(array);

        console.time('冒泡排序：');
        this.bubbleSort(array);
        console.timeEnd('冒泡排序：');

        console.time('单项冒泡排序：');
        this.bubbleSortOne(array);
        console.timeEnd('单项冒泡排序：');

        console.time('双向冒泡排序：');
        this.bubbleSortTow(array);
        console.timeEnd('双向冒泡排序：');

        console.time('选择排序：');
        this.selectSort(array);
        console.timeEnd('选择排序：');

        console.time('插入排序：');
        this.insertSort(array);
        console.timeEnd('插入排序：');

        console.time('拆半插入排序：');
        this.binsertSort(array);
        console.timeEnd('拆半插入排序：');

        console.time('希尔排序：');
        this.shellSort(array);
        console.timeEnd('希尔排序：');

        // let res = this.shellSort(array);
        // console.log(res);
    },
    methods: {
        /**
         * 冒泡排序
         */
        bubbleSort(arr) {
            let length = arr.length;
            if (!length) {
                return [];
            }
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
                // console.log(`第${i+1}次循环`, arr);
            }
            return arr;
        },
        /**
         * 冒泡排序优化
         */
        bubbleSortOne(arr) {
            let length = arr.length;
            if (!length) {
                return [];
            }
            for (let i = 0; i < length; i++) {
                let mark = true; // 如果在一轮比较中没有出现需要交互的数据，说明数组已经有序，
                for (let j = 0; j < length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        mark = false;
                    }
                }
                // console.log(mark);
                // console.log(`第${i+1}次循环`, arr);
                if (mark) return;
            }
            return arr;
        },
        /**
         * 冒泡排序优化
         */
        bubbleSortTow(arr) {
            let low = 0;
            let high = arr.length - 1;
            while (low < high) {
                let mark = true;
                // 找到最大值放到右边
                for (let i = low; i < high; i++) {
                    if (arr[i] > arr[i + 1]) {
                        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                        mark = false;
                    }
                }
                high--;
                // 找到最小值放到左边
                for (let j = high; j > low; j--) {
                    if (arr[j] < arr[j - 1]) {
                        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                        mark = false;
                    }
                }
                low++;
                // console.log(mark);
                // console.log(`第${low}次循环`, arr);
                if (mark) return arr;
            }
        },
        /**
         * 选择排序
         */
        selectSort(arr) {
            let length = arr.length,
                minIndex;
            for (let i = 0; i < length - 1; i++) {
                minIndex = i;
                for (let j = i + 1; j < length; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                // console.log(`第${i+1}次循环`, arr);
            }
            return arr;
        },
        /**
         * 插入排序
         */
        insertSort(arr) {
            let length = arr.length,
                preIndex, current;
            for (let i = 1; i < length; i++) {
                preIndex = i - 1;
                current = arr[i];
                // 和已经排序好的序列进行比较，插入到合适的位置
                while (preIndex >= 0 && arr[preIndex] > current) {
                    arr[preIndex + 1] = arr[preIndex];
                    preIndex--;
                }
                arr[preIndex + 1] = current;
                // console.log(`第${i}次循环`, arr);
            }
        },
        /**
         * 拆半插入排序
         */
        binsertSort(arr) {
            let low, high, j, temp;
            for (let i = 1; i < arr.length; i++) {
                // 在直接插入排序的基础上，在插入的时候运用了折半查找法查找要插入的位置，再进行插入。
                if (arr[i] < arr[i - 1]) {
                    temp = arr[i];
                    low = 0;
                    high = i - 1;
                    while (low <= high) {
                        let mid = Math.floor((low + high) / 2);
                        if (temp > arr[mid]) {
                            low = mid + 1;
                        } else {
                            high = mid - 1;
                        }
                    }
                    for (j = i; j > low; --j) {
                        arr[j] = arr[j - 1];
                    }
                    arr[j] = temp;
                }
                // console.log(`第${i}次循环`, arr);
            }
            return arr;
        },
        /**
         * 希尔排序
         */
        shellSort(arr) {
            let len = arr.length;
            // 初始步数
            let gap = parseInt(len / 2);
            // 逐渐缩小步数
            while (gap) {
                // 从第gap个元素开始遍历
                for (let i = gap; i < len; i++) {
                    // 逐步其和前面其他的组成员进行比较和交换
                    for (let j = i - gap; j >= 0; j -= gap) {
                        if (arr[j] > arr[j + gap]) {
                            [arr[j], arr[j + gap]] = [arr[j + gap], arr[j]];
                        } else {
                            break;
                        }
                    }
                }
                gap = parseInt(gap / 2);
            }
        }
    }
}
</script>
<style type="text/css">
</style>