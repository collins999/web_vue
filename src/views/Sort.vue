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
        for (let i = 0; i < 5000; i++) {
            let number = Math.floor(Math.random() * 5000);
            array.push(number);
        }
        console.log(array);

        // let res = this.radixSort(array);
        // console.log(res);
        this.sortTime(array);
    },
    methods: {
        /**
         * 输出时间
         */
        sortTime(array) {
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

            console.time('归并排序：');
            this.mergeSort(array);
            console.timeEnd('归并排序：');

            console.time('快速排序1：');
            this.quickSort(array, 0, array.length - 1);
            console.timeEnd('快速排序1：');

            console.time('快速排序2：');
            this.quickSortOne(array, 0, array.length - 1);
            console.timeEnd('快速排序2：');

            console.time('堆排序：');
            this.heapSort(array);
            console.timeEnd('堆排序：');

            console.time('计数排序：');
            this.countingSort(array);
            console.timeEnd('计数排序：');

            console.time('桶排序：');
            this.bucketSort(array);
            console.timeEnd('桶排序：');

            // console.time('基数排序：');
            // this.radixSort(array);
            // console.timeEnd('基数排序：');
        },
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
        },
        /**
         * 归并排序
         */
        mergeSort(arr) {
            let len = arr.length;
            if (len < 2) {
                return arr;
            }
            let middle = Math.floor(len / 2),
                left = arr.slice(0, middle),
                right = arr.slice(middle);
            // console.log(`处理过程：`, arr);
            return this.merge(this.mergeSort(left), this.mergeSort(right));
        },
        /**
         * 归并排序辅助方法
         */
        merge(left, right) {
            let result = [];
            while (left.length && right.length) {
                if (left[0] <= right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
            while (left.length) {
                result.push(left.shift());
            }
            while (right.length) {
                result.push(right.shift());
            }
            return result;
        },
        /**
         * 快速排序
         */
        quickSort(arr, begin, end) {
            if (begin > end) return arr;
            let temp = arr[begin],
                i = begin,
                j = end;
            while (i != j) {
                while (arr[j] >= temp && j > i) {
                    j--;
                }
                while (arr[i] <= temp && j > i) {
                    i++;
                }
                if (j > i) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[begin], arr[i]] = [arr[i], temp];
            // console.log(`${arr[i]}作为基准点：`, arr);
            this.quickSort(arr, begin, i - 1);
            this.quickSort(arr, i + 1, end);
            return arr;
        },
        /**
         * 快速排序
         */
        quickSortOne(arr, left, right) {
            var len = arr.length,
                partitionIndex,
                left = typeof left != 'number' ? 0 : left,
                right = typeof right != 'number' ? len - 1 : right;

            if (left < right) {
                partitionIndex = this.partition(arr, left, right);
                // console.log(`${arr[partitionIndex]}作为基准点：`, arr);
                this.quickSortOne(arr, left, partitionIndex - 1);
                this.quickSortOne(arr, partitionIndex + 1, right);
            }
            return arr;
        },
        /**
         * 快速排序辅助方法-寻找基准值
         */
        partition(arr, left, right) {
            let pivot = left,
                index = pivot + 1;
            for (let i = index; i <= right; i++) {
                if (arr[i] < arr[pivot]) {
                    [arr[i], arr[index]] = [arr[index], arr[i]];
                    index++;
                }
            }
            [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
            return index - 1;
        },
        /**
         * 堆排序
         */
        heapSort(nums) {
            this.buildHeap(nums);
            // 循环n-1次，每次循环后交换堆顶元素和堆底元素并重新调整堆结构
            for (let i = nums.length - 1; i > 0; i--) {
                [nums[i], nums[0]] = [nums[0], nums[i]];
                this.adjustHeap(nums, 0, i);
                // console.log(`${nums[i]}作为堆顶元素：`, nums);
            }
            return nums;
        },
        /**
         * 堆排序辅助方法
         */
        adjustHeap(nums, index, size) {
            // 交换后可能会破坏堆结构，需要循环使得每一个父节点都大于左右结点
            while (true) {
                let max = index;
                let left = index * 2 + 1; // 左节点
                let right = index * 2 + 2; // 右节点
                if (left < size && nums[max] < nums[left]) max = left;
                if (right < size && nums[max] < nums[right]) max = right;
                // 如果左右结点大于当前的结点则交换，并再循环一遍判断交换后的左右结点位置是否破坏了堆结构（比左右结点小了）
                if (index !== max) {
                    [nums[index], nums[max]] = [nums[max], nums[index]];
                    index = max;
                } else {
                    break;
                }
            }
        },
        /**
         * 堆排序辅助方法
         */
        buildHeap(nums) {
            // 注意这里的头节点是从0开始的，所以最后一个非叶子结点是 parseInt(nums.length/2)-1
            let start = parseInt(nums.length / 2) - 1;
            let size = nums.length;
            // 从最后一个非叶子结点开始调整，直至堆顶。
            for (let i = start; i >= 0; i--) {
                this.adjustHeap(nums, i, size);
            }
        },
        /**
         * 计数排序
         */
        countingSort(nums) {
            let arr = [];
            let max = Math.max(...nums);
            let min = Math.min(...nums);
            // 装桶
            for (let i = 0, len = nums.length; i < len; i++) {
                let temp = nums[i];
                arr[temp] = arr[temp] + 1 || 1;
                // console.log(`装桶键为${temp}-值为${arr[temp]}`, arr);
            }
            let index = 0;
            // 还原原数组
            for (let i = min; i <= max; i++) {
                while (arr[i] > 0) {
                    nums[index++] = i;
                    arr[i]--;
                }
            }
            return nums;
        },
        /**
         * 桶排序
         */
        bucketSort(nums) {
            // 桶的个数，只要是正数即可
            let num = 5;
            let max = Math.max(...nums);
            let min = Math.min(...nums);
            // 计算每个桶存放的数值范围，至少为1，
            let range = Math.ceil((max - min) / num) || 1;
            // 创建二维数组，第一维表示第几个桶，第二维表示该桶里存放的数
            let arr = Array.from(Array(num)).map(() => Array().fill(0));
            nums.forEach(val => {
                // 计算元素应该分布在哪个桶
                let index = parseInt((val - min) / range);
                // 防止index越界，例如当[5,1,1,2,0,0]时index会出现5
                index = index >= num ? num - 1 : index;
                let temp = arr[index];
                // 插入排序，将元素有序插入到桶中
                let j = temp.length - 1;
                while (j >= 0 && val < temp[j]) {
                    temp[j + 1] = temp[j];
                    j--;
                }
                temp[j + 1] = val;
                // console.log(temp);
            });
            // 修改回原数组
            let res = [].concat.apply([], arr);
            nums.forEach((val, i) => {
                nums[i] = res[i];
            });
            return nums;
        },
        /**
         * 基数排序
         */
        radixSort(nums) {
            // 计算位数
            function getDigits(n) {
                let sum = 0;
                while (n) {
                    sum++;
                    n = parseInt(n / 10);
                }
                return sum;
            }
            // 第一维表示位数即0-9，第二维表示里面存放的值
            let arr = Array.from(Array(10)).map(() => Array());
            let max = Math.max(...nums);
            let maxDigits = getDigits(max);
            for (let i = 0, len = nums.length; i < len; i++) {
                // 用0把每一个数都填充成相同的位数
                nums[i] = (nums[i] + '').padStart(maxDigits, 0);
                // 先根据个位数把每一个数放到相应的桶里
                let temp = nums[i][nums[i].length - 1];
                arr[temp].push(nums[i]);
            }
            // console.table(arr);
            // 循环判断每个位数
            for (let i = maxDigits - 2; i >= 0; i--) {
                // 循环每一个桶
                for (let j = 0; j <= 9; j++) {
                    let temp = arr[j]
                    let len = temp.length;
                    // 根据当前的位数i把桶里的数放到相应的桶里
                    while (len--) {
                        let str = temp[0];
                        temp.shift();
                        arr[str[i]].push(str);
                    }
                }
            }
            // console.table(arr);
            // 修改回原数组
            let res = [].concat.apply([], arr);
            nums.forEach((val, index) => {
                nums[index] = +res[index];
            });
            return nums;
        }
    }
}
</script>
<style type="text/css">
</style>