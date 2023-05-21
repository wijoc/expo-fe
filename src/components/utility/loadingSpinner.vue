<template>
  <div :class=" sizeClass + ' inline-block overflow-hidden bg-transparent'">
    <div class="relative flex items-center justify-center w-full h-full bg-transparent">
      <div :class="loadingSize + ' absolute border-[20px] border-secondary border-solid border-t-transparent rounded-[50%] animate-[spin_1s_linear_infinite] box-content'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    divSize: {
      type: String,
      default: () => {
        return 'w-[12.5rem] h-[12.5rem]'
      }
    },
    loadingSize: {
      type: String,
      default: () => {
        return 'w-[7.5rem] h-[7.5rem]'
      }
    }
  }
}
</script>
