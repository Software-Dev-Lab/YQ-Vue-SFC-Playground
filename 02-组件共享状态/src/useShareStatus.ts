import { ref } from 'vue'

  const data = ref(0)

  const change = () => {
      data.value++
  }

export { data, change }