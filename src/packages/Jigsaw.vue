<template>
    <div class="jigsaw-container" ref="jigsawContaierRef">
        <Block v-for="(item, index) in blockListRef" :options="item" :key="index" @click="blockRegEvent(item)" />
    </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, ref, watchEffect } from 'vue';
import Block from './Block.vue';
import type { JigsawProps, BlockInfoArrType, BlockType } from './type';

const { img, row, col, option } = defineProps<JigsawProps>();
const blockBg = img || option?.img || new URL('../assets/default.png', import.meta.url);
const blockRow = row || option?.row || 3;
const blockCol = col || option?.col || 3;
const jigsawContaierRef = ref<Element>();
const blockInfoArrRef = ref<BlockInfoArrType>([]);
const piceWidthRef = ref<number>(0);
const piceHeightRef = ref<number>(0);
const piceNumberRef = ref<number>(0);
const blockListRef = ref<BlockType[]>([]);

// 方块信息初始化
const initBlockInfo = () => {
    for(let i = 0; i < blockRow; i++) {
        for(let j = 0; j < blockCol; j++) {
            const left = i * piceWidthRef.value;
            const top = j * piceHeightRef.value;
            blockInfoArrRef.value.push({
                left,
                top,
                currLeft: left,
                currTop: top,
            });
        }
    }
};
// 创建方块
const createBlockDom = () => {
    if (!jigsawContaierRef.value) {
        return ;
    }
    const containerClientWidth = jigsawContaierRef.value.clientWidth;
    const containerClientHeight = jigsawContaierRef.value.clientHeight;
    blockListRef.value = blockInfoArrRef.value.map((item, index) => {
        return {
            width: piceWidthRef.value,
            height: piceHeightRef.value,
            background: `url(${blockBg}) -${item.currLeft}px -${item.currTop}px`,
            left: item.left,
            top: item.top,
            backgroundSize: `${containerClientWidth}px ${containerClientHeight}px`,
            display: index === piceNumberRef.value - 1 ? 'none' : 'block',
            border: '1px solid #fff',
        }
    })
};
// 方块位置随机化
const shuffle = () => {
    const arr = blockInfoArrRef.value;
    for(let i = 0; i < arr.length - 1; i ++) {
        let item = arr[Math.floor(Math.random() * (piceNumberRef.value - 1))];
        let temp = arr[i].left;
        arr[i].left = item.left;
        item.left = temp;
        temp = arr[i].top;
        arr[i].top = item.top;
        item.top = temp;
    }
    createBlockDom();
};
// 小数比较
const isInteJudge = (num1: number, num2: number) => num1 === num2;
// 判定结果 判定是否游戏结束
const isAdjacent = computed(() => {
    return blockListRef.value.every((item, index) => {
        const { left, top } = item;
        const { currLeft, currTop } = blockInfoArrRef.value[index];
        return left === currLeft && top === currTop;
    })
})
// 处理方块点击事件
const blockRegEvent = (blockOption: BlockType) => {
    const targPosition = blockListRef.value.find(block => block.display === 'none');
    if (!targPosition) {
        return;
    }
    
    let { left, top } = blockOption;
    if(isInteJudge(Math.abs(left - targPosition.left), piceWidthRef.value) && top === targPosition.top
        ||
        isInteJudge(Math.abs(top - targPosition?.top) , piceHeightRef.value) && left === targPosition.left
    ) {
        let tempLeft = left;
        let tempTop = top;
        blockOption.left = targPosition.left;
        blockOption.top = targPosition.top;
        targPosition.left = tempLeft;
        targPosition.top = tempTop;
    }
};

watchEffect(() => {
    if(isAdjacent.value) {
        blockListRef.value = blockListRef.value.map(item => {
            return {
                ...item,
                border: 'none',
                display: 'block',
            }
        });
    };
});

onMounted(() => {
    if (!jigsawContaierRef.value) {
        return ;
    }
    const jigsawContaier = jigsawContaierRef.value;
    piceWidthRef.value = jigsawContaier.clientWidth / blockCol;
    piceHeightRef.value = jigsawContaier.clientHeight / blockRow;
    piceNumberRef.value = blockRow *  blockCol;
    initBlockInfo();
    shuffle();
});

</script>

<style scoped>
.jigsaw-container {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>