<script setup>
import  {data,change} from './useShareStatus'
import A from './A.vue'
import B from './B.vue'


change()
</script>

<template>
APP组件
{{ data }}
<A></A>
<B></B>

<button @click="change()"></button>
</template>
