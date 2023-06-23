<template>
  <div class="pt-4 bg-white/95">
    <router-link class="flex flex-row items-center justify-center flex-nowrap" to="/">
      <img src="@/assets/img/Logo.png" alt="" class="w-7 h-7">
      <span id="brand" class="ml-1 text-2xl font-semibold uppercase text-primary">UMKM EXPO</span>
    </router-link>
    <div class="container flex items-center justify-center h-screen md:items-start md:justify-between md:h-full">
      <div class="flex gap-2 flex-nowrap justify-evenly xl:pt-0">
        <div class="hidden sm:flex sm:flex-col sm:w-4/12 sm:text-center md:w-5/12">
          <img src="@/assets/img/registration-img.png" alt="set-three-isolated-buttons-compositions-with-flat-human-characters-online-store-pictograms-with-text-vector-illustration by freepik" class="max-w-">
          <h3 class="text-lg font-medium">Pamerkan karyamu di UMKM Expo</h3>
          <p class="text-sm text-gray-400">Gabung dan jangkau pasar lebih luas bersama kami</p>
        </div>
        <form class="flex flex-col w-full max-h-full gap-2 px-4 pt-2 pb-5 border shadow-lg card h-fit sm:w-6/12 sm:mt-6 md:w-5/12 lg:4/12 xl:w-3/12 xl:mt-20" @submit.prevent="submitRegistration()">
          <template v-if="this.step === 1">
            <h1 class="text-lg font-bold text-center">Daftar Sekarang!</h1>
            <span class="text-sm text-center text-gray-400">
              Sudah terdaftar?
              <router-link to="/login" class="cursor-pointer text-primary">Masuk</router-link>
            </span>
            <button class="relative w-full text-center uppercase rounded-lg btn btn-normal btn-outline-gray">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="absolute w-6 h-6 left-5">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Google
            </button>
            <span class="relative text-sm text-gray-400 text-center px-4 my-2 before:absolute before:w-3/12 before:h-[.05rem] before:bg-gray-300 before:top-[50%] before:left-0 after:absolute after:w-3/12 after:h-[.05rem] after:bg-gray-300 after:top-[50%] after:right-0">
              atau daftar dengan
            </span>
            <CustomInput
              :key="0"
              :inputAttr="regForm[0]"
              :modelValue.sync="regInput.identifier" />
          </template>
          <template v-else-if="this.step === 2">
            <CustomInput
              v-for="(rF, rIndex) in regForm"
              :key="rIndex"
              :inputAttr="rF"
              :modelValue.sync="regInput[rF.value]" />
          </template>
          <button class="w-full text-center uppercase rounded-lg btn btn-normal btn-primary">DAFTAR</button>
          <hr class="self-center w-1/2 my-2 bg-black">
          <span class="self-center w-full text-xs text-center text-gray-400">
            <p>Dengan mendaftar, saya menyetujui</p>
            <a class="cursor-pointer text-primary">Syarat dan Ketentuan</a> serta <a class="cursor-pointer text-primary">Kebijakan Privasi</a>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, or, sameAs, helpers, minLength } from '@vuelidate/validators'

import CustomInput from '@/components/comp/CustomInput.vue'

/** Regex explaination:
 * [0|\+[1-9]{1,5} : match single char 0 or +, match perviouse char / set for 1 - 5 times
 * [0-9]{10} : match any digit from 0-9 for exactly 10 times
 * this mean max length of value is 15 character and min length is 10 character start with 0 and 11 character start with +
 * this regex still support value start with "00"
 *
 * solution is using this: (0[1-9]{1}|(\+[1-9]{1}))[0-9]{3,13}
 * (0[1-9]{1} : match single char 0 and followed by digit between 1-9 for 1 time
 * | : determine "or"
 * (\+[1-9]) : match char + and followed any digit from 1-9 for exactly 1 times
 * [0-9]{3, 13} : match any digit 0-9 for 3 time to 13 time
 * this mean max length of value is 15 character and min length is 4 character whether it start with 0 or with +
 *
 * Both regex note: value start with +01 will not work
 */

const regexPhone = helpers.regex('regexPhone', '^(0[1-9]{1}|(\+[1-9]{1}))[0-9]{3,13}$') // eslint-disable-line

/** Regex explaination:
 * ?=.*\d : match at least 1 digit from 0-9
 * ?=(.*\W){1} : match atleast 1 symbol or special character
 * ?=.*[a-zA-Z] : match any latin alphabet
 * ?!.*\s : not contain any form of whitespace
 * .{1,} : value should match previous char or set for 1 times to unlimited times.
 * this regex will make min length is 3, and min value will validated in different vulidate rules
 */
// const regexPassword = helpers.regex('regexPassword', '^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,}$') // this for validate all rule in one go
const regexNumeric = helpers.regex('regexNumeric', '^(?=.*\d).{1,}$') // eslint-disable-line
const regexSymbol = helpers.regex('regexSymbol', '^(?=(.*\W).{1,}$') // eslint-disable-line
const regexNoWhitespace = helpers.regex('regexNoWhitespace', '^(?!.*\s).{1,}$') // eslint-disable-line

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'RegistrationView',
  components: {
    CustomInput
  },
  data () {
    return {
      regInput: {
        identifier: null,
        name: null,
        password: null,
        rePassword: null
      },
      otpInput: null,
      regForm: [
        {
          divClass: 'mb-1.5',
          inputType: 'text',
          inputClass: 'w-full rounded form-control form-control-base',
          inputID: 'reg-identifier',
          label: 'Email / No. Handphone',
          labelClass: 'font-light text-sm',
          isError: false,
          errorMessage: 'Error Identifier',
          disabled: false,
          readonly: false,
          hidden: false,
          value: 'identifier',
          placeholder: 'Email atau Nomor Handphone',
          flag: 'text'
        },
        {
          divClass: 'mb-1.5',
          inputType: 'text',
          inputClass: 'w-full rounded form-control form-control-base',
          inputID: 'reg-name',
          label: 'Nama Pengguna',
          labelClass: 'font-light text-sm',
          isError: false,
          errorMessage: 'Error Name',
          disabled: false,
          readonly: false,
          hidden: false,
          value: 'name',
          placeholder: 'Nama Pengguna',
          flag: 'text'
        },
        {
          divClass: 'mb-1.5',
          inputType: 'text',
          inputClass: 'w-full rounded form-control form-control-base',
          inputID: 'reg-password',
          label: 'Password',
          labelClass: 'font-light text-sm',
          isError: false,
          errorMessage: 'Error Password',
          disabled: false,
          readonly: false,
          hidden: false,
          value: 'password',
          placeholder: 'Password',
          flag: 'password'
        },
        {
          divClass: 'mb-1.5',
          inputType: 'text',
          inputClass: 'w-full rounded form-control form-control-base',
          inputID: 'reg-re-password',
          label: 'Konfirmasi Password',
          labelClass: 'font-light text-sm',
          isError: false,
          errorMessage: 'Error Re-Password',
          disabled: false,
          readonly: false,
          hidden: false,
          value: 'rePassword',
          placeholder: 'Konfirmasi Password',
          flag: 'password'
        }
      ],
      step: 1
    }
  },
  validations: {
    regInput: {
      identifier: {
        required: helpers.withMessage('Please input your email / phone number', required),
        valid: helpers.withMessage('Email / Phone number is invalid', or(email, regexPhone)),
        // email: helpers.withMessage('E-mail is invalid', email),
        $lazy: true
      },
      name: {
        required: helpers.withMessage('Please input your name', required),
        $lazy: true
      },
      password: {
        required: helpers.withMessage('Please input your password', required),
        minLength: helpers.withMessage('Password length is at least 8 characters', minLength(8)),
        // valid: helpers.withMessage('Password must contains at least 1 number and 1 symbol'),
        validNumber: helpers.withMessage('Password must contains at least 1 number', regexNumeric),
        validSymbol: helpers.withMessage('Password must contains at least 1 symbol', regexSymbol),
        validspace: helpers.withMessage('Password should not have space', regexNoWhitespace),
        $lazy: true
      },
      rePassword: {
        required: helpers.withMessage('Please input the same password', required),
        // sameAs: helpers.withMessage('Password not match', sameAs(this.regInput.password)),
        sameAs: helpers.withMessage('Password not match', sameAs('asdasd')),
        $lazy: true
      }
    }
  },
  methods: {
    submitRegistration () {
      console.log('submit')
      if (this.step === 1) {
        // this.step++
        this.validateIdentifier()
        console.log('error ' + this.v$.regInput.identifier.$invalid)
      }
    },
    validateIdentifier () {
      this.v$.regInput.identifier.$touch()
      if (this.v$.regInput.$invalid) {
        this.regForm[0].isError = this.v$.regInput.identifier.$invalid
        this.regForm[0].errorMessage = this.v$.regInput.identifier.$errors

        return false
      } else {
        return true
      }
    }
  }
}
</script>
