<template>
  <main class="bg-gradient-to-b from-sky-400 to-white/70 pt-12">
    <h1 class="text-white text-center text-3xl font-medium mb-3">How can we help?</h1>
    <div class="relative px-4 mb-3">
      <input type="text" class="form-control form-control-md pl-3 pr-9 w-full rounded-lg border-1 border-sky-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" placeholder="Ketik Pertanyaan....">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=" absolute max-w-[2rem] max-h-4 text-gray-400 fill-current top-1/2 translate-y-[-50%] right-8 cursor-pointer">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
      </svg>
    </div>
    <section class="w-full min-h-screen rounded-t-lg bg-white">
      <div class="container pt-3 px-4" v-if="!this.$route.params.id">
        <div class="flex flex-row flex-nowrap justify-start gap-2 overflow-x-scroll pb-3 mb-3 sm:flex-wrap sm:overflow-x-hidden">
          <button class="btn border-2 border-sky-500 text-sky-500 px-4 py-2 rounded-lg whitespace-nowrap hover:border-sky-300 hover:bg-sky-300 hover:text-white">Tentang Expo</button>
          <button class="btn border-2 border-sky-500 text-sky-500 px-4 py-2 rounded-lg whitespace-nowrap hover:border-sky-300 hover:bg-sky-300 hover:text-white">Pameran</button>
          <button class="btn border-2 border-sky-500 text-sky-500 px-4 py-2 rounded-lg whitespace-nowrap hover:border-sky-300 hover:bg-sky-300 hover:text-white">Bantuan Akun</button>
        </div>
        <h3 class="text-lg text-black font-light capitalize mb-2">Pertanyaan terkait</h3>
        <div class="flex flex-col gap-2 sm:grid sm:grid-flow-row sm:grid-cols-12">
          <div
            class="question rounded-md pt-2 cursor-pointer border-b-1 border-gray-300 sm:col-span-6 sm:p-3 sm:border-1 sm:hover:shadow sm:hover:border-primary md:col-span-4 lg:col-span-3 "
            v-for="(question, i) in this.questions" :key="i"
            @click="showAnswer(question.id)">
            <h5 class="text-sm text-gray-500 font-normal tracking-wider uppercase">{{ question.question_ctgr }}</h5>
            <p class="text-md text-justify font-normal tracking-wide">{{ question.question }}</p>
          </div>
        </div>
      </div>
      <div class="container py-3 px-4" v-else>
        <ul ref="breadcrumb" class="flex flex-row flex-wrap w-full px-2 py-1.5 mb-3 rounded bg-gray-200">
          <li class="text-black text-sm font-light underline cursor-pointer whitespace-nowrap hover:text-gray-600">
            <span class="after:content-['>>'] after:font-medium after:mx-2">
              FAQs
            </span>
            </li>
          <li class="text-black text-sm font-light underline cursor-pointer whitespace-nowrap hover:text-gray-600">
            <span class="after:content-['>>'] after:font-medium after:mx-2">
              Bantuan Akun
            </span>
            </li>
          <li class="text-black text-sm font-light underline cursor-pointer whitespace-nowrap hover:text-gray-600">
            <span class="active">
              slug-question-title-5-words
            </span>
          </li>
        </ul>
        <div class="flex flex-nowrap gap-2">
          <div class="hidden sm:flex sm:flex-col sm:gap-2 sm:w-4/12 sm:border-r-1 sm:border-gray-200 lg:w-3/12 xl:w-2/12">
            <h5 class="text-md font-normal">Pertanyaan di Bantuan Akun</h5>
            <a class="ml-1 text-base tracking-wider hover:underline" v-for="i in 10" :key="i">Question {{ i }}</a>
          </div>
          <div class="w-full sm:w-8/12 lg:w-9/12 xl:w-10/12">
            <h1 class="text-lg text-justify font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, distinctio?
            </h1>
            <hr class="my-2">
            <h5 class="font-medium">Jawaban: </h5>
            <div class="px-2 py-1.5 text-justify tracking-wide bg-sky-100">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam sint atque
                adipisci fuga perspiciatis minus commodi ipsa aspernatur at aliquid possimus nisi
                voluptates optio recusandae porro repellat, voluptatem nobis libero totam impedit nulla
                eveniet. Mollitia sunt temporibus non dignissimos deserunt, similique vel voluptatem,
                dicta cumque ad nobis aperiam libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'FaqView',
  data () {
    return {
      faqContent: this.content,
      questions: [
        {
          id: 1,
          question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
          question_ctgr: 'Tentang Expo',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        },
        {
          id: 2,
          question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
          question_ctgr: 'Pameran',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        },
        {
          id: 3,
          question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
          question_ctgr: 'Bantuan Akun',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        },
        {
          id: 4,
          question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
          question_ctgr: 'Bantuan Akun',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iste quam impedit ea soluta quod atque aperiam voluptatibus, mollitia corrupti saepe ab exercitationem illo aliquid labore! Illum neque tempora non ut iusto quae. Ratione iusto nemo perspiciatis accusantium exercitationem modi cum assumenda, amet officia eum atque fugit blanditiis aperiam ex!'
        }
      ]
    }
  },
  methods: {
    showAnswer (id) {
      this.$router.push({ path: '/faq/' + id })
    }
  }
}
</script>
