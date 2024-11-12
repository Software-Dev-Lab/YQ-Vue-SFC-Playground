<script setup>
import { useSlotsExist } from './useSlotsExist.ts'
import { useSlots, onMounted } from 'vue';
const result = useSlotsExist(['header', 'footer', 'default'])
console.log(result)
const slots = useSlots()
console.log(slots)
</script>

<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<style>
.main {
  color: pink;
}
</style>