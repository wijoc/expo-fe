<template>
  <div :class="'relative ' + this.inputAttr.divClass" v-show="!this.inputAttr.hidden">
    <label :for="this.inputAttr.inputID" :class="'form-label ' + this.inputAttr.labelClass">{{ this.inputAttr.label }}</label>
    <input
      :type="this.inAttr.inputType"
      :id="this.inputAttr.inputID"
      :ref="this.inputAttr.inputID"
      :class="this.inputAttr.inputClass"
      :disabled="this.inputAttr.disabled"
      :readonly="this.inputAttr.readonly"
      :placeholder="this.inputAttr.placeholder || ''"
      v-model="inputValue" />

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="cursor-pointer text-gray-400 fill-current w-5 h-5 absolute right-2 top-[50%] hover:text-gray-600"
      v-if="this.inputAttr.flag === 'password' && this.inputAttr.inputType === 'text'" @click="togglePassword()">
      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="cursor-pointer text-gray-400 fill-current w-5 h-5 absolute right-2 top-[50%] hover:text-gray-600"
      v-else-if="this.inputAttr.flag === 'password' && this.inputAttr.inputType === 'password'" @click="togglePassword()">
      <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/>
    </svg>

    <template v-if="this.inputAttr.isError">
      <span class="pt-1 px-0.5 flex flex-nowrap gap-1 items-center text-xs text-red-500 italic"
        v-for="error of inputAttr.errorMessage" :key="error.$uid" :id="error.$uid">
        <i class="fa-solid fa-caret-right"></i> Error panjang disini
        <br>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    modelValue: [Number, String, Boolean],
    inputAttr: {
      type: Object,
      default: () => {
        return {
          divClass: 'mb-3',
          inputType: 'text',
          inputClass: 'form-control',
          inputID: 'reg-identifier',
          label: 'Email / No. Handphone',
          isError: false,
          errorMessage: [],
          disabled: false,
          readonly: false,
          hidden: false,
          value: 'inputIdentifier',
          placeholder: 'Email atau Nomor Handphone'
        }
      }
    }
  },
  methods: {
    togglePassword () {
      if (this.inputAttr.flag === 'password') {
        if (this.inputAttr.inputType === 'password') {
          this.inAttr.inputType = 'text'
        } else {
          this.inAttr.inputType = 'password'
        }
      }
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    },
    inAttr: function () {
      return this.inputAttr
    }
  }
}
</script>
