<template>
  <main>
    <!-- Home Section -->
    <!-- <section id="home" ref="home" class="min-h-screen bg-gradient-to-b from-sky-600 to-transparent flex items-center"> -->
    <section id="home" ref="home" class="min-h-screen bg-gradient-to-b from-sky-600 to-white/70 flex items-center">
      <div class="container">
        <div class="flex flex-wrap justify-center sm:flex-no-wrap sm:gap-1 md:gap-2 md:justify-evenly">
          <div class="w-full flex justify-center leading-none sm:w-5/12 md:5/12 md:justify-self-center md:justify-start lg:justify-center">
            <div class="self-center">
              <h2 class="text-3xl text-white font-bold tracking-wider sm:text-2xl">Selamat Datang</h2>
              <h1 class="text-banner text-[6.4em] sm:text-7xl md:text-[6.4em]">UMKM</h1>
              <div class="bg-white w-fit text-center">
                <h3 class="subtext-banner mx-auto text-[3.5em] sm:text-[2.4em] md:text-[3.5em]">Virtual</h3>
              </div>
              <h1 class="text-banner text-[6.4em] tracking-xtrawide sm:text-7xl md:text-[6.4em]">EXPO</h1>
              <hr class="border-primary border-2 w-[21em] mb-4 sm:w-9/12 md:w-[21em]">
              <p class="home-text mb-7 text-justify text-white font-medium px-1 w-80 sm:w-9/12 md:w-80">
                Hadir sebagai sarana bagi pelaku UMKM dan UKM di masa pandemi.
              </p>
              <a href="#" class="btn btn-lg btn-primary rounded-lg">
                Daftar Sekarang
              </a>
            </div>
          </div>
          <div class="w-full min-h-full self-center px-4 hidden sm:w-6/12 sm:flex sm:h-72 md:h-80 lg:h-128 lg:pt-10">
            <img src="@/assets/img/home-img.png" alt="Expo Exhibit booth in vector" class="mx-auto h-full" />
          </div>
        </div>
      </div>
    </section>
    <!-- End Home Section -->

    <!-- Infobox Section -->
    <section id="infobox" class="min-h-full bg-gradient-to-b from-transparent via-white to-white -mt-5 py-5 sm:-mt-[5.5em] sm:pt-5 md:-mt-[3em] lg:-mt-[5.5em]">
      <div class="container">
        <div class="w-full border-gradient-to-br rounded-xl mx-auto p-1 sm:h-32 sm:block md:w-5/6 md-24 lg:w-4/6 xl:w-1/2">
          <div class="h-full bg-white rounded-lg p-3 text-center flex flex-wrap sm:flex-nowrap sm:items-center sm:p-1">
            <div class="w-full p-3 sm:w-1/3 md:py-0">
              <h1 class="infobox-text">31</h1>
              <a class="text-2xl font-semibold">Hari</a>
            </div>
            <div class="w-full p-3 sm:w-1/3 border-y-2 border-slate-900/10 sm:border-x-2 sm:border-y-0 md:py-0">
              <h1 class="infobox-text">50+</h1>
              <a class="text-2xl font-semibold">Peserta</a>
            </div>
            <div class="w-full p-3 sm:w-1/3 md:py-0">
              <h1 class="infobox-text">100+</h1>
              <a class="text-2xl font-semibold">Produk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Infobox Section -->

    <!-- Section About -->
    <section id="about" ref="about" class="min-h-screen bg-white flex items-center">
      <div class="container">
        <div class="flex flex-row flex-wrap justify-start text-center px-4 sm:flex-col sm:justify-center sm:mb-5">
          <span class="section-title">
            <span class="sm:hidden">Apa itu</span>
            <span class="hidden sm:block">Tentang</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] border-gradient-to-r sm:w-1/5 lg:w-[9em]"></span>
        </div>
        <div class="flex flex-row flex-wrap">
          <div class="hidden w-full min-h-full self-center justify-start px-4 sm:flex sm:w-1/2 sm:h-full md:justify-center lg:justify-start lg:pl-20">
            <!-- <img src="@/assets/img/pexels-quang-nguyen-vinh-2155552.png" alt="Expo Exhibit booth photo by - " class="mx-auto h-full z-10" />
            <span class="w-48 h-36 border-gradient-to-br absolute -mt-3 -ml-3 self-center lg:ml-6"></span> -->
            <div class="w-64 h-48 border-gradient-to-br pt-5 pl-5 -mt-5 -ml-5 lg:mt-0 lg:ml-0 lg:w-[21em] lg:h-64">
              <img src="@/assets/img/pexels-quang-nguyen-vinh-2155552.png" alt="Expo Exhibit booth photo by - " class="h-48 w-auto absolute lg:h-64" />
            </div>
          </div>
          <div class="w-full self-center px-4 sm:w-1/2 lg:pr-16">
            <h1 class="text-2xl mb-2">
              <span class="font-semibold text-primary">UMKM Virtual Expo</span> ?
            </h1>
            <p class="text-justify indent-10">
              <span class="font-medium">UMKM Virutal Expo</span> hadir sebagai sarana bagi pelaku baik UMKM ataupun UKM yang terdampak pada masa pandemi. Bertujuan untuk mendukung berkembangnya UMKM dan UKM dalam negeri, sekaligus untuk mendukung terciptanya masyarakat koperasi, UMKM, dan UKM yang tangguh, mandiri, dan kompeten.
            </p>
            <p class="text-justify font-semibold indent-10">
              Dilaksanakan selama 30 hari. Mulai 1 Januari 2021 sampai dengan 31 Januari 2021.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Regitration -->
    <section id="registration" class="min-h-screen bg-white">
      <div class="container">
        <div class="flex flex-row flex-wrap justify-start text-start px-4 sm:flex-col sm:justify-center sm:text-center sm:mb-5">
          <span class="section-title">
            <span class="sm:hidden">Pendaftaran</span>
            <span class="hidden sm:block">Registrasi</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] border-gradient-to-r sm:w-1/5 lg:w-[9em]"></span>
          <h3 class="uppercase text-primary text-3xl sm:hidden">Alur Pendaftaran</h3>
        </div>
        <div class="flex justify-center px-4">
          <ol class="border-l border-gray-400 ml-3 mt-11 scrollbar scrollbar-thin scrollbar-rounded scrollbar-primary sm:flex sm:flex-row sm:flex-nowrap sm:overflow-x-scroll sm:border-l-0 sm:relative sm:w-fit sm:mt-0 sm:px-4 sm:pt-3 sm:pb-10 sm:after:h-0.5 sm:after:w-[62em] sm:after:bg-gray-300 sm:after:absolute sm:after:bottom-4 sm:after:mb-3 sm:after:ml-4 md:after:w-[78em] lg:w-11/12">
            <li class="mb-10 sm:mb-5 mr-5">
              <div class="timeline-badge">
                1
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE 1
                </div>
                <hr class="bg-red-500 mt-3 mb-1">
                <h1 class="uppercase text-primary text-base text-center">Kunjungi Website UMKM EXPO</h1>
              </div>
            </li>
            <li class="mb-10 sm:mb-5 mr-5">
              <div class="timeline-badge">
                2
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE 2
                </div>
                <hr class="bg-red-500 mt-3 mb-1">
                <h1 class="uppercase text-primary text-base text-center">Isi form pendaftaran</h1>
              </div>
            </li>
            <li class="mb-10 sm:mb-5 mr-5">
              <div class="timeline-badge">
                3
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE 3
                </div>
                <hr class="bg-red-500 mt-3 mb-1">
                <h1 class="uppercase text-primary text-base text-center">Konfirmasi email</h1>
              </div>
            </li>
            <li class="mb-10 sm:mb-5 mr-5">
              <div class="timeline-badge">
                4
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE 4
                </div>
                <hr class="bg-red-500 mt-3 mb-1">
                <h1 class="uppercase text-primary text-base text-center">tunggu persetujuan</h1>
              </div>
            </li>
            <li class="mb-10 sm:mb-5 mr-5">
              <div class="timeline-badge">
                5
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE 5
                </div>
                <hr class="bg-red-500 mt-3 mb-1">
                <h1 class="uppercase text-primary text-base text-center">Usaha kamu disetujui!</h1>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <!-- Section Regitration End -->

    <!-- Section sponsor -->
    <section id="sponsor" class="min-h-full bg-white pb-20 lg:px-0">
      <div class="container mb-3 sm:mb-10">
        <div class="flex flex-row flex-wrap justify-start text-start px-4 sm:flex-col sm:justify-center sm:text-center sm:mb-3">
          <span class="section-title">
            <span class="sm:hidden">Acara ini</span>
            <span class="hidden sm:block">Sponsor</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] border-gradient-to-r sm:w-1/5 lg:w-[9em]"></span>
          <h3 class="uppercase text-primary text-3xl sm:hidden">Didukung oleh</h3>
        </div>
      </div>
      <div class="min-h-full h-72 bg-gray-200">
        <swiper ref="sponsorSwipper" :options="swiperOptions" class="w-full h-full md:px-5">
          <swiper-slide class="swiper-slide">
            <img src="@/assets/img/sponsor/Sponsor_1.png" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="@/assets/img/sponsor/Sponsor_2.png" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="@/assets/img/sponsor/Sponsor_3.png" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="@/assets/img/sponsor/Sponsor_4.png" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="@/assets/img/sponsor/Sponsor_5.png" alt="">
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="@/assets/img/sponsor/Sponsor_3.png" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- Slider main container -->
      </div>
    </section>
    <!-- Section sponsor End -->

    <!-- Section Contact -->
    <section id="contact" ref="contact" class="min-h-screen bg-white flex flex-col items-center pt-5 pb-16">
      <div class="container flex flex-wrap mb-5 sm:flex-nowrap">
        <div class="w-full mb-3 sm:w-1/2">
          <div class="flex flex-row flex-wrap justify-start text-start px-4 sm:flex-col sm:mb-3">
            <span class="section-title">
              <span class="sm:hidden">Media Sosial</span>
              <span class="hidden sm:block">Media Sosial</span>
            </span>
            <span class="w-28 h-1 self-start mt-[0.75em] bg-primary sm:w-4/6 lg:w-[9em]"></span>
            <h3 class="uppercase text-primary text-3xl sm:hidden">Mari Terhubung</h3>
          </div>
          <div class="flex flex-col px-4 mt-5 sm:grid sm:grid-cols-2 sm:grids-rows-2 sm:gap-4">
            <a href="https://www.instagram.com/" target="_blank" class="mb-3 border-2 border-primary rounded-md p-2 flex flex-wrap items-center sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              <span class="border-l-2 border-gray-300 text-xl font-medium ml-3 pl-3 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Akun Instagram
              </span>
            </a>
            <a href="https://www.youtube.com/" target="_blank" class="mb-3 border-2 border-primary rounded-md p-2 flex flex-wrap items-center sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
              <span class="border-l-2 border-gray-300 text-xl font-medium ml-3 pl-3 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Kanal youtube
              </span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" class="mb-3 border-2 border-primary rounded-md p-2 flex flex-wrap items-center sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
              </svg>
              <span class="border-l-2 border-gray-300 text-xl font-medium ml-3 pl-3 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Halaman Youtube
              </span>
            </a>
            <a href="https://www.twitter.com/" target="_blank" class="mb-3 border-2 border-primary rounded-md p-2 flex flex-wrap items-center sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
              </svg>
              <span class="border-l-2 border-gray-300 text-xl font-medium ml-3 pl-3 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Akun Twitter
              </span>
            </a>
          </div>
        </div>
        <div class="w-full mb-3 sm:w-1/2">
          <div class="flex flex-row flex-wrap justify-start text-start px-4 sm:flex-col sm:mb-3">
            <span class="section-title">
              <span class="sm:hidden">Kontak</span>
              <span class="hidden sm:block">Kontak</span>
            </span>
            <span class="w-28 h-1 self-start mt-[0.75em] bg-sky-400 sm:w-4/6 lg:w-[9em]"></span>
            <h3 class="uppercase text-primary text-3xl sm:hidden">Hubungi kami</h3>
          </div>
          <div class="flex flex-col px-4 mt-5 sm:grid grid-cols-2 sm:grid-rows-2 sm:gap-4">
            <a href="https://www.instagram.com/" target="_blank" class="mb-3 border-2 border-secondary rounded-md p-2 flex flex-wrap items-center sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              <span class="border-l-2 border-gray-300 text-xl font-medium ml-3 pl-3 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                email@expo.com
              </span>
            </a>
            <a href="https://www.youtube.com/" target="_blank" class="mb-3 border-2 border-secondary rounded-md p-2 flex flex-wrap items-center sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
              <span class="border-l-2 border-gray-300 text-xl font-medium ml-3 pl-3 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                +62 8xx xxxx xxxx
              </span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" class="mb-3 border-2 border-secondary rounded-md p-2 flex flex-wrap items-center sm:col-span-2 sm:row-span-1 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
              </svg>
              <span class="border-l-2 border-gray-300 text-md font-medium ml-3 pl-3">
                <p>Jl. Lokasi, Kota XXXXXX</p>
                <p>Prov. XXX, Indonesia</p>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="container mb-5">
        <div class="flex flex-row flex-wrap justify-start text-start px-4 mb-5 sm:flex-col sm:justify-center sm:text-center md:mb-6">
          <span class="section-title">
            <span class="sm:hidden">Kontak</span>
            <span class="hidden sm:block">Tinggalkan Pesan</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] border-gradient-to-r sm:w-1/5 lg:w-[9em]"></span>
          <h3 class="uppercase text-primary text-3xl sm:hidden">Tinggalkan Pesan</h3>
        </div>
        <div class="flex flex-row flex-wrap px-4 gap-2 sm:flex-nowrap sm:px-0 sm:gap-4 lg:px-4">
          <div class="w-full flex flex-col gap-2 sm:w-6/12 sm:gap-4 md:gap-5">
            <div class="form-floating">
              <label for="leave-msg-name" class="form-label">Nama</label>
              <input type="text" name="inputName" id="leave-msg-name" class="form-control" placeholder=" " />
            </div>
            <div class="form-floating">
              <label for="leave-msg-subject" class="form-label">Subject</label>
              <input type="text" name="inputSubject" id="leave-msg-subject" class="form-control" placeholder=" " />
            </div>
            <div class="form-floating">
              <label for="leave-msg-email" class="form-label">Email</label>
              <input type="text" name="inputEmail" id="leave-msg-email" class="form-control" placeholder=" " />
            </div>
          </div>
          <div class="w-full flex flex-col gap-4 sm:w-6/12 sm:gap-4 md:gap-5">
            <div class="form-floating">
              <label for="leave-msg-message" class="form-label">Pesan</label>
              <textarea name="" id="leave-msg-message" cols="10" rows="4" class="form-control-ta" placeholder=" "></textarea>
            </div>
            <a href="" class="btn btn-sm btn-secondary rounded w-full flex flex-row flex-nowrap justify-center items-center gap-2 sm:py-[0.6rem] md:btn-md md:w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-white w-5 h-5">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
              </svg>
              Tinggalkan Pesan</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Contact End -->
  </main>
</template>

<script>
import { Swiper, SwiperSlide, component } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'LandingView',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: component
  },
  data () {
    return {
      swiperOptions: {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          375: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15
          }
        }
      },
      leaveMessage: {
        name: null,
        subject: null,
        email: null,
        message: null
      },
      sectionId: ['home', 'about', 'contact']
    }
  },
  methods: {
    windowScrolled () {
      const elId = this.$route.hash.replace('#', '')
      const elActive = this.$refs[elId]

      this.sectionId.forEach((sectEl) => {
        const refEl = this.$refs[sectEl]

        if (refEl !== elActive) {
          if (window.scrollY >= refEl.offsetTop && window.scrollY <= (refEl.offsetTop + refEl.offsetHeight)) {
            this.$router.replace('/#' + sectEl)
          }
        }
      })
    }
  },
  computed: {
    swiper () {
      return this.$refs.sponsorSwipper.$swiper
    }
  },
  created () {
    window.addEventListener('scroll', this.windowScrolled)
  },
  mounted () {
    this.swiper.slideTo(0, 500, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.windowScrolled)
  }
}
</script>
