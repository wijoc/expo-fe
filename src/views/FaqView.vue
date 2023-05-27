<template>
  <main class="min-h-screen bg-gray-100/50">
    <div class="px-2 pt-12 pb-5 bg-primary sm:pt-16 md:pt-20 lg:px-20">
      <h1 class="mb-3 text-3xl font-medium text-center text-white">How can we help?</h1>
      <div class="relative mb-3">
        <input type="text" class="w-full pl-3 rounded-lg form-control form-control-md pr-9 border-1 border-sky-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Ketik Pertanyaan....">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="absolute max-w-[2rem] max-h-4 text-gray-400 fill-current top-1/2 translate-y-[-50%] right-8 cursor-pointer">
          <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
        </svg>
      </div>
    </div>
    <div class="container flex w-full px-3 pt-3 pb-10 lg:px-16">
      <div class="flex flex-col w-full gap-2 md:w-5/12 lg:w-4/12">
        <h3 class="hidden pb-2 text-xl font-bold uppercase text-bold md:block">Question</h3>
        <div class="relative flex items-center justify-between font-[450] px-2 py-1 bg-gray-200 rounded cursor-pointer" v-for="(q, i) in this.questions" :key="i" @click="toggleAnswer(null, i)">
          {{ q.question }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="absolute w-4 h-4 fill-current right-2">
            <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
          </svg>
        </div>
      </div>
      <div class="hidden pl-2 md:flex md:flex-col md:w-7/12 lg:w-8/12">
        <h3 class="hidden pb-2 text-xl font-bold uppercase text-bold md:block">Answer</h3>
        <div class="flex flex-col w-full pl-3 border-gray-300 border-l-1">
          <div class="flex">
            <h4 class="w-6 font-medium">Q :</h4>
            <h4 class="w-full text-lg font-medium text-justify" ref="desktop-faq-question">{{ this.questions[0].question }}</h4>
          </div>
          <div class="flex">
            <h4 class="w-6">A :</h4>
            <h4 class="w-full text-lg tracking-wide text-justify" ref="desktop-faq-answer">{{ this.questions[0].answer }}</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- Answer Modal -->
    <div id="faq-mobile" ref="faq-mobile" class="duration-200 ease-in-out transform translate-y-full mobile-layer bg-white/30">
      <div class="relative h-full px-2 pt-1.5 pb-28 bg-white border-2 border-gray-400 rounded-t-md">
        <span class="sticky top-0 z-10 flex items-center justify-between mb-2 bg-white flex-nowrap">
          <h5 class="text-lg font-medium">Answer</h5>
          <svg id="faq-mobile-close" ref="faq-mobile-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-6 h-6 text-gray-500 cursor-pointer fill-current" @click="toggleAnswer(false)">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
          </svg>
        </span>
        <div class="py-2 border-gray-200 border-t-1">
          <div class="flex">
            <h4 class="w-6 font-medium">Q :</h4>
            <h4 class="w-full text-lg font-medium text-justify" ref="m-faq-question"></h4>
          </div>
          <div class="flex">
            <h4 class="w-6">A :</h4>
            <h4 class="w-full text-lg tracking-wide text-justify" ref="m-faq-answer"></h4>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'FaqView',
  data () {
    return {
      questions: [
        {
          id: 1,
          question: 'Apa itu UMKM Virtual Expo',
          question_ctgr: 'Tentang Expo',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        },
        {
          id: 2,
          question: 'Biaya mendaftar',
          question_ctgr: 'Pameran',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        },
        {
          id: 3,
          question: 'Tidak bisa login',
          question_ctgr: 'Bantuan Akun',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        },
        {
          id: 4,
          question: 'Cara membuat akun',
          question_ctgr: 'Bantuan Akun',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        }
      ],
      showAnswer: false
    }
  },
  methods: {
    toggleAnswer (tggl = null, index = null) {
      if (index !== null) {
        if (window.innerWidth < 768) {
          this.$refs['m-faq-question'].innerHTML = this.questions[index].question
          this.$refs['m-faq-answer'].innerHTML = this.questions[index].answer

          if (tggl || !this.showAnswer) {
            this.$refs['faq-mobile'].classList.add('translate-y-0')
            this.$refs['faq-mobile'].classList.remove('translate-y-full')
          } else {
            this.$refs['faq-mobile'].classList.add('translate-y-full')
            this.$refs['faq-mobile'].classList.remove('translate-y-0')
          }
        } else {
          this.$refs['desktop-faq-question'].innerHTML = this.questions[index].question
          this.$refs['desktop-faq-answer'].innerHTML = this.questions[index].answer
        }
      }

      this.showAnswer = tggl !== null ? tggl : !this.showAnswer
    }
  }
}
</script>
