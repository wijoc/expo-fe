<template>
  <main class="relative overflow-x-hidden">
    <!-- Home Section -->
    <section id="home" ref="home" class="relative flex items-center min-h-screen bg-primary">
      <div class="container">
        <div class="flex flex-wrap justify-center sm:flex-no-wrap sm:gap-1 md:gap-2 md:justify-evenly">
          <div class="flex justify-center w-full leading-none sm:w-5/12 md:w-5/12 md:justify-start lg:justify-center">
            <div class="self-center">
              <h2 class="text-3xl font-bold tracking-wider text-space-black sm:text-2xl xl:ml-1">Selamat Datang</h2>
              <h1 class="text-banner text-[6.4em] sm:text-7xl md:text-[6.4em]">UMKM</h1>
              <div class="text-center bg-quartyary w-fit">
                <h3 class="subtext-banner mx-auto text-[3.5em] sm:text-[2.4em] md:text-[3.5em]">Virtual</h3>
              </div>
              <h1 class="text-banner text-[6.4em] tracking-xtrawide sm:text-7xl md:text-[6.4em]">EXPO</h1>
              <hr class="border-tertiary border-2 w-[21em] mb-4 sm:w-[90%] md:w-[21em]">
              <p class="px-1 font-medium text-justify text-space-black home-text mb-7 w-80 sm:w-[90%] md:w-[21rem]">
                Hadir sebagai sarana bagi pelaku UMKM dan UKM di masa pandemi.
              </p>
              <router-link to="/registration" class="flex flex-row gap-2 uppercase rounded-lg btn btn-lg btn-secondary group hover:bg-tertiary sm:w-[90%] md:w-[21rem]">
                <span class="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[1.4rem] h-[1.4rem] text-white fill-current group-hover:rotate-[360deg] group-hover:opacity-0 transition-all duration-300">
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="absolute opacity-0 top-0 w-[1.4rem] h-[1.4rem] text-white fill-current group-hover:-rotate-[360deg] group-hover:opacity-100 transition-all duration-300">
                    <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V285.7l-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"/>
                  </svg>
                </span>
                Daftar Gratis
              </router-link>
              <router-link to="/exhibition" class="w-full gap-2 mt-2 uppercase rounded-lg btn btn-md btn-outline-secondary group sm:w-[90%] md:w-[21rem]">
                Belanja Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="fill-current w-7 h-7 animate-slide-right">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="relative self-center hidden w-full min-h-full px-4 sm:flex sm:w-6/12 sm:h-72 md:h-80 lg:h-128 lg:pt-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="absolute rotate-[155deg] sm:scale-x-100 md:scale-x-[1.15] lg:-translate-x-[5%] xl:-translate-y-[10%]">
              <path fill="#D0E2FF" d="M34.7,-65C44.3,-54.7,50.8,-43.9,53.1,-33C55.4,-22,53.4,-11,54.7,0.7C56,12.5,60.4,25,59.2,37.6C57.9,50.3,50.8,63.1,40,66.1C29.2,69.2,14.6,62.5,3.1,57.1C-8.4,51.7,-16.8,47.7,-27.6,44.6C-38.4,41.5,-51.6,39.5,-57.9,32.2C-64.3,24.9,-63.9,12.5,-67.5,-2.1C-71.1,-16.6,-78.6,-33.1,-73.1,-42.1C-67.7,-51,-49.4,-52.4,-35,-59.9C-20.7,-67.5,-10.3,-81.3,1.1,-83.2C12.6,-85.2,25.2,-75.3,34.7,-65Z" transform="translate(100 100)" />
            </svg>
            <img src="@/assets/img/expo.png" alt="Expo Exhibit booth in vector" class="z-10 h-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
    <!-- Home Section End -->

    <!-- Section About -->
    <section id="about" ref="about" class="flex items-center min-h-screen">
      <div class="container">
        <div class="flex flex-row flex-wrap justify-start px-4 text-center sm:flex-col sm:justify-center sm:mb-5">
          <span class="section-title">
            <span class="sm:hidden">Apa itu</span>
            <!-- <span class="relative sm:hidden after:absolute after:left-0 after:bottom-0 after:mt-10 after:w-full after:h-2 after:bg-red-300">Apa itu</span> -->
            <span class="hidden sm:block">Tentang</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] bg-gradient-to-r from-secondary via-darker-primary to-primary sm:w-1/5 lg:w-[9em]"></span>
        </div>
        <div class="flex flex-row flex-wrap pl-14">
          <!-- <div class="self-center justify-start hidden w-full min-h-full px-4 sm:flex sm:w-1/2 sm:h-full md:justify-center lg:justify-start lg:pl-20"> -->
          <div class="hidden px-4 sm:grid sm:grid-cols-2 sm:gap-3 sm:w-1/2 sm:min-h-full">
            <div class="flex flex-col items-center justify-center col-span-1 p-2 border-2 rounded-md border-darker-primary text-space-black">
              <div class="flex flex-row flex-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fill-current w-9 h-9">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->\
                  <path d="M189 77.6c7.5-16 .7-35.1-15.3-42.6s-35.1-.7-42.6 15.3L3 322.4c-4.7 9.9-3.9 21.5 1.9 30.8S21 368 32 368H256v80c0 17.7 14.3 32 32 32s32-14.3 32-32V368h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V160c0-17.7-14.3-32-32-32s-32 14.3-32 32V304H82.4L189 77.6z"/>
                </svg>
              </div>
              <a class="text-xl font-medium uppercase">Hari</a>
              <p class="text-base font-light tracking-wider">11 Feb - 14 Feb</p>
            </div>
            <div class="flex flex-col items-center justify-center col-span-1 p-2 border-2 rounded-md border-darker-primary text-space-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="fill-current w-9 h-9">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
              </svg>
              <a class="text-xl font-medium uppercase">Lokasi</a>
              <p class="text-base font-light tracking-wider">Gd. Ged Ung Besa R</p>
            </div>
            <div class="flex flex-col items-center justify-center col-span-1 p-2 border-2 rounded-md border-darker-primary text-space-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-current w-9 h-9">
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/>
              </svg>
              <a class="text-xl font-medium uppercase">Umum</a>
              <p class="text-sm font-light tracking-wide">Terbuka untuk umum</p>
            </div>
            <div class="flex flex-col items-center justify-center col-span-1 p-2 border-2 rounded-md border-darker-primary text-space-black">
              <div class="relative mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 text-gray-700 fill-current">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M0 64C0 46.3 14.3 32 32 32h80c79.5 0 144 64.5 144 144c0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8L106.3 320H64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 64zM64 256h48c44.2 0 80-35.8 80-80s-35.8-80-80-80H64V256zm256-96h80c61.9 0 112 50.1 112 112s-50.1 112-112 112H352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352 192c0-17.7 14.3-32 32-32zm80 160c26.5 0 48-21.5 48-48s-21.5-48-48-48H352v96h48z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="absolute w-12 h-12 fill-current -left-3 -top-3">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="absolute w-10 h-10 fill-current -left-2 -top-2">
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z"/>
                </svg>
              </div>
              <a class="text-xl font-medium uppercase">Gratis !</a>
            </div>
          </div>
          <div class="self-center w-full px-4 sm:w-1/2 lg:pr-16">
            <h1 class="mb-2 text-2xl">
              <span class="font-semibold text-tertiary">UMKM Virtual Expo</span> ?
            </h1>
            <p class="text-justify indent-10">
              <span class="font-medium">UMKM Virutal Expo</span> hadir sebagai sarana bagi pelaku baik UMKM ataupun UKM yang terdampak pada masa pandemi. Bertujuan untuk mendukung berkembangnya UMKM dan UKM dalam negeri, sekaligus untuk mendukung terciptanya masyarakat koperasi, UMKM, dan UKM yang tangguh, mandiri, dan kompeten.
            </p>
            <p class="font-semibold text-justify indent-10">
              Pameran Offline akan dilaksanakan selama 4 hari. Mulai 11 Februari 2021 sampai dengan 31 Februari 2021.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section About End -->

    <!-- Section Regitration -->
    <section id="registration" ref="registration" class="min-h-screen">
      <div class="container">
        <div class="flex flex-row flex-wrap justify-start px-4 text-start sm:flex-col sm:justify-center sm:text-center sm:mb-5">
          <span class="section-title">
            <span class="sm:hidden">Pendaftaran</span>
            <span class="hidden sm:block">Registrasi</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] bg-gradient-to-r from-secondary via-darker-primary to-primary sm:w-1/5 lg:w-[9em]"></span>
          <h3 class="text-3xl uppercase text-secondary sm:hidden">Alur Pendaftaran</h3>
        </div>
        <div class="flex justify-center px-4">
          <ol class="border-l border-gray-400 ml-3 mt-11 scrollbar scrollbar-thin scrollbar-rounded scrollbar-primary sm:flex sm:flex-row sm:flex-nowrap sm:overflow-x-scroll sm:border-l-0 sm:relative sm:w-fit sm:mt-0 sm:px-4 sm:pt-3 sm:pb-10 sm:after:h-0.5 sm:after:w-[62em] sm:after:bg-gray-300 sm:after:absolute sm:after:bottom-4 sm:after:mb-3 sm:after:ml-4 md:after:w-[78em] lg:w-11/12">
            <li class="mb-10 mr-5 sm:mb-5">
              <div class="timeline-badge">
                1
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE STEP 1
                </div>
                <hr class="mt-3 mb-1 bg-red-500">
                <h1 class="text-base text-center uppercase text-space-black">Kunjungi Website UMKM EXPO</h1>
              </div>
            </li>
            <li class="mb-10 mr-5 sm:mb-5">
              <div class="timeline-badge">
                2
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE STEP 2
                </div>
                <hr class="mt-3 mb-1 bg-red-500">
                <h1 class="text-base text-center uppercase text-space-black">Isi form pendaftaran</h1>
              </div>
            </li>
            <li class="mb-10 mr-5 sm:mb-5">
              <div class="timeline-badge">
                3
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE STEP 3
                </div>
                <hr class="mt-3 mb-1 bg-red-500">
                <h1 class="text-base text-center uppercase text-space-black">Konfirmasi email</h1>
              </div>
            </li>
            <li class="mb-10 mr-5 sm:mb-5">
              <div class="timeline-badge">
                4
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE STEP 4
                </div>
                <hr class="mt-3 mb-1 bg-red-500">
                <h1 class="text-base text-center uppercase text-space-black">tunggu persetujuan</h1>
              </div>
            </li>
            <li class="mb-10 mr-5 sm:mb-5">
              <div class="timeline-badge">
                5
              </div>
              <div class="timeline-panel">
                <div class="h-[7.5em] w-full text-center bg-gray-400 md:h-[12em]">
                  IMAGE STEP 5
                </div>
                <hr class="mt-3 mb-1 bg-red-500">
                <h1 class="text-base text-center uppercase text-space-black">Usaha kamu disetujui!</h1>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <!-- Section Regitration End -->

    <!-- Section sponsor -->
    <section id="sponsor" ref="sponsor" class="min-h-full pb-20 lg:px-0">
      <div class="container mb-3 sm:mb-10">
        <div class="flex flex-row flex-wrap justify-start px-4 text-start sm:flex-col sm:justify-center sm:text-center sm:mb-3">
          <span class="section-title">
            <span class="sm:hidden">Acara ini</span>
            <span class="hidden sm:block">Sponsor</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] bg-gradient-to-r from-secondary via-darker-primary to-primary sm:w-1/5 lg:w-[9em]"></span>
          <h3 class="text-3xl uppercase text-primary sm:hidden">Didukung oleh</h3>
        </div>
      </div>
      <div class="min-h-full bg-gray-200 h-72">
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
    <section id="contact" ref="contact" class="flex flex-col items-center min-h-screen pt-5 pb-16">
      <div class="container flex flex-wrap mb-5 sm:flex-nowrap">
        <div class="w-full mb-3 sm:w-1/2">
          <div class="flex flex-row flex-wrap justify-start px-4 text-start sm:flex-col sm:mb-3">
            <span class="section-title">
              <span class="sm:hidden">Media Sosial</span>
              <span class="hidden sm:block">Media Sosial</span>
            </span>
            <span class="w-28 h-1 self-start mt-[0.75em] bg-primary sm:w-4/6 lg:w-[9em]"></span>
            <h3 class="text-3xl uppercase text-primary sm:hidden">Mari Terhubung</h3>
          </div>
          <div class="flex flex-col px-4 mt-5 sm:grid sm:grid-cols-2 sm:grids-rows-2 sm:gap-4">
            <a href="https://www.instagram.com/" target="_blank" class="flex flex-wrap items-center p-2 mb-3 border-2 rounded-md border-primary sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              <span class="pl-3 ml-3 text-xl font-medium border-l-2 border-gray-300 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Akun Instagram
              </span>
            </a>
            <a href="https://www.youtube.com/" target="_blank" class="flex flex-wrap items-center p-2 mb-3 border-2 rounded-md border-primary sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
              <span class="pl-3 ml-3 text-xl font-medium border-l-2 border-gray-300 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Kanal youtube
              </span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" class="flex flex-wrap items-center p-2 mb-3 border-2 rounded-md border-primary sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
              </svg>
              <span class="pl-3 ml-3 text-xl font-medium border-l-2 border-gray-300 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Halaman Facebook
              </span>
            </a>
            <a href="https://www.twitter.com/" target="_blank" class="flex flex-wrap items-center p-2 mb-3 border-2 rounded-md border-primary sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
              </svg>
              <span class="pl-3 ml-3 text-xl font-medium border-l-2 border-gray-300 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                Akun Twitter
              </span>
            </a>
          </div>
        </div>
        <div class="w-full mb-3 sm:w-1/2">
          <div class="flex flex-row flex-wrap justify-start px-4 text-start sm:flex-col sm:mb-3">
            <span class="section-title">
              <span class="sm:hidden">Kontak</span>
              <span class="hidden sm:block">Kontak</span>
            </span>
            <span class="w-28 h-1 self-start mt-[0.75em] bg-sky-400 sm:w-4/6 lg:w-[9em]"></span>
            <h3 class="text-3xl uppercase text-primary sm:hidden">Hubungi kami</h3>
          </div>
          <div class="flex flex-col grid-cols-2 px-4 mt-5 sm:grid sm:grid-rows-2 sm:gap-4">
            <a href="https://www.instagram.com/" target="_blank" class="flex flex-wrap items-center p-2 mb-3 border-2 rounded-md border-secondary sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              <span class="pl-3 ml-3 text-xl font-medium border-l-2 border-gray-300 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                email@expo.com
              </span>
            </a>
            <a href="https://www.youtube.com/" target="_blank" class="flex flex-wrap items-center p-2 mb-3 border-2 rounded-md border-secondary sm:flex-col sm:col-span-1 sm:row-span-1 sm:justify-center sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
              <span class="pl-3 ml-3 text-xl font-medium border-l-2 border-gray-300 sm:border-0 sm:text-base sm:ml-0 sm:pl-0">
                +62 8xx xxxx xxxx
              </span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" class="flex flex-wrap items-center p-2 mb-3 border-2 rounded-md border-secondary sm:col-span-2 sm:row-span-1 sm:p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 sm:w-10 sm:h-10 sm:mb-3">
                <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/>
              </svg>
              <span class="pl-3 ml-3 font-medium border-l-2 border-gray-300 text-md">
                <p>Jl. Lokasi, Kota XXXXXX</p>
                <p>Prov. XXX, Indonesia</p>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="container mb-5">
        <div class="flex flex-row flex-wrap justify-start px-4 mb-5 text-start sm:flex-col sm:justify-center sm:text-center md:mb-6">
          <span class="section-title">
            <span class="sm:hidden">Kontak</span>
            <span class="hidden sm:block">Tinggalkan Pesan</span>
          </span>
          <span class="w-28 h-1 self-center mt-[0.4em] border-gradient-to-r sm:w-1/5 lg:w-[9em]"></span>
          <h3 class="text-3xl uppercase text-primary sm:hidden">Tinggalkan Pesan</h3>
        </div>
        <div class="flex flex-row flex-wrap gap-2 px-4 sm:flex-nowrap sm:px-0 sm:gap-4 lg:px-4">
          <div class="flex flex-col w-full gap-2 sm:w-6/12 sm:gap-4 md:gap-5">
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
          <div class="flex flex-col w-full gap-4 sm:w-6/12 sm:gap-4 md:gap-5">
            <div class="form-floating">
              <label for="leave-msg-message" class="form-label">Pesan</label>
              <textarea name="" id="leave-msg-message" cols="10" rows="4" class="form-control-ta" placeholder=" "></textarea>
            </div>
            <a href="" class="btn btn-sm btn-secondary rounded w-full flex flex-row flex-nowrap justify-center items-center gap-2 sm:py-[0.6rem] md:btn-md md:w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-white">
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
      }
    }
  },
  methods: {
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
