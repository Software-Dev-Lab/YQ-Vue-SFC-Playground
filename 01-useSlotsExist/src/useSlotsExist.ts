import { computed, useSlots, reactive } from "vue"

export function useSlotsExist(slotsName: string | string[] = 'default') {
  const slots = useSlots() // 获取当前组件的所有插槽
  // 检查特定名称的插槽是否存在且不为空
  const checkSlotsExist = (slotsName: string): boolean => {
    const slotsContent = slots[slotsName]?.()
    const checkExist = (slotContent: any) => {
      if (typeof slotContent.children === 'string') {
        // 排除 v-if="false" 的插槽内容
        if (slotContent.children === 'v-if') {
          return false
        }
        return slotContent.children.trim() !== ''
      } else {
        if (slotContent.children === null) {
          if (slotContent.type === 'img' || typeof slotContent.type !== 'string') {
            return true
          }
        } else {
          return Boolean(slotContent.children)
        }
      }
    }
    if (slotsContent && slotsContent?.length) {
      const result = slotsContent.some((slotContent) => {
        return checkExist(slotContent)
      })
      return result
    }
    return false
  }
  if (Array.isArray(slotsName)) {
    const slotsExist = reactive<any>({})
    slotsName.forEach((item) => {
      const exist = computed(() => checkSlotsExist(item))
      slotsExist[item] = exist // 将一个 ref 赋值给一个 reactive 属性时，该 ref 会自动解包
    })
    return slotsExist
  } else {
    return computed(() => checkSlotsExist(slotsName))
  }
}