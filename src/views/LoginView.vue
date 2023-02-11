<template>
  <div class="bg-white/95 pt-4">
    <router-link class="flex flex-row flex-nowrap justify-center items-center" to="/">
      <img src="@/assets/img/Logo.png" alt="" class="w-7 h-7">
      <span id="brand" class="uppercase font-semibold ml-1 text-primary text-2xl">UMKM EXPO</span>
    </router-link>
    <div class="container">
      <div class="min-h-screen flex flex-nowrap justify-evenly gap-2 sm:pt-10 xl:pt-0">
        <div class="hidden sm:flex sm:flex-col sm:w-4/12 sm:text-center md:w-5/12">
          <img src="@/assets/img/registration-img.png" alt="set-three-isolated-buttons-compositions-with-flat-human-characters-online-store-pictograms-with-text-vector-illustration by freepik" class="max-w-">
          <h3 class="text-lg font-medium">Pamerkan karyamu di UMKM Expo</h3>
          <p class="text-sm text-gray-400">Gabung dan jangkau pasar lebih luas bersama kami</p>
        </div>
        <div class="card shadow-lg w-full h-fit max-h-full flex flex-col gap-2 px-4 pt-2 pb-5 border sm:w-6/12 sm:mt-6 md:w-5/12 lg:4/12 xl:w-3/12 xl:mt-20">
          <h1 class="text-lg font-bold text-center uppercase">Masuk</h1>
          <hr class="bg-black/90">
          <CustomInput
            v-for="(lf, lIndex) in loginForm"
            :key="lIndex"
            :inputAttr="lf"
            :modelValue.sync="loginInput[lf.value]" />
          <button class="btn btn-normal rounded-lg text-center uppercase w-full btn-outline-primary mt-2">Masuk</button>
          <span class="relative text-sm text-gray-400 text-center px-4 my-2 before:absolute before:w-3/12 before:h-[.05rem] before:bg-gray-300 before:top-[50%] before:left-0 after:absolute after:w-3/12 after:h-[.05rem] after:bg-gray-300 after:top-[50%] after:right-0">
            atau masuk dengan
          </span>
          <button class="relative btn btn-normal btn-outline-gray rounded-lg text-center uppercase w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="absolute left-5 w-6 h-6">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Google
          </button>
          <span class="mt-3 text-sm text-gray-400 text-center">
            Belum punya akun?
            <router-link to="/registration" class="text-primary cursor-pointer">Daftar Sekarang!</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/comp/CustomInput.vue'

export default {
  name: 'RegistrationView',
  components: {
    CustomInput
  },
  data () {
    return {
      loginInput: {
        inputIdentifier: null,
        inputPassword: null
      },
      loginForm: [
        {
          divClass: 'mb-1.5',
          inputType: 'text',
          inputClass: 'w-full rounded form-control form-control-base',
          inputID: 'login-identifier',
          label: 'Email / No. Handphone',
          labelClass: 'font-light text-sm',
          isError: false,
          errorMessage: 'Error Identifier',
          disabled: false,
          readonly: false,
          hidden: false,
          value: 'inputIdentifier',
          placeholder: 'Email atau Nomor Handphone',
          flag: 'text'
        },
        {
          divClass: 'mb-1.5',
          inputType: 'password',
          inputClass: 'w-full rounded form-control form-control-base',
          inputID: 'login-password',
          label: 'Password',
          labelClass: 'font-light text-sm',
          isError: false,
          errorMessage: 'Error Password',
          disabled: false,
          readonly: false,
          hidden: false,
          value: 'inputPassword',
          placeholder: 'Password',
          flag: 'password'
        }
      ]
    }
  }
}
</script>
