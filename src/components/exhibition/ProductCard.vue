<template>
  <div :class="this.divClass">
    <img src="@/assets/img/product/product_1.jpg" alt="" class="max-w-full max-h-28">
    <div class="flex flex-col gap-[0.125rem] py-2 px-1">
      <p class="title-product">
        {{ this.data.name }}
      </p>
      <h5 class="font-bold text-normal text-left">
        <!-- {{ this.data.salePrice }} -->
      </h5>
      <span class="flex flex-nowrap items-center gap-1">
        <span class="bg-green-300 rounded font-medium text-xs text-primary p-0.5">
          {{ this.data.disc_percent }}
        </span>
        <p class="font-normal text-xs text-left line-through text-gray-400">
          {{ this.data.price }}
        </p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    data: {
      type: Object
    },
    divClass: {
      type: String
    }
  }
}
</script>
