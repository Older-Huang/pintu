<template>
    <div class="block" :style="{
        width: options?.width + 'px',
        height: options?.height + 'px',
        background: options?.background,
        left: options?.left + 'px',
        top: options?.top + 'px',
        backgroundSize: options?.backgroundSize,
        display: options?.display,
        border: options?.border,
    }" @click="emits('click')"></div>
</template>

<script setup lang='ts'>
import type { BlockProps } from './type';

const { options } = defineProps<BlockProps>();
const emits = defineEmits(['click']);
</script>

<style scoped>
.block {
    position: absolute;
    box-sizing: border-box;
    cursor: pointer;
    transition: all linear .3s;
}
</style>