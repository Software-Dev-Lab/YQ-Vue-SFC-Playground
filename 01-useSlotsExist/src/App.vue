<script setup>
import Comp from './Comp.vue'
</script>

<template>
  <Comp>
    <template #header>
      头部
    </template>
    默认插槽
    <template #footer>
      底部
    </template>
  </Comp>
</template>
