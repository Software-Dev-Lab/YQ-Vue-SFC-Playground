<script setup>
import { data } from './useShareStatus' 
</script>

<template>
  <div style="border: 1px solid red; width: 100px; height: 100px;">
    B组件
    {{ data }}
  </div>
</template>
