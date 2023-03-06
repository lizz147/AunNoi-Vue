<script setup>
import StickyBottom from "../components/User/StickyBottom.vue";
import StickyHeader from "../components/User/StickyHeader.vue";
</script>

<template>
  <div class="min-h-screen h-auto w-full flex flex-col relative bg-gray-900">
    <StickyHeader />
    <div
      class="w-full bg-gray-900 flex flex-col justify-start items-center pt-8 pb-20"
    >
      <div class="w-11/12 lg:w-1/2 bg-slate-100 rounded-md p-3 mb-6">
        <div
          class="flex flex-row justify-start items-center cursor-pointer mb-3"
        >
          <router-link
            class="text-base hover:text-red-700 transition-all duration-200 no-underline text-gray-800 flex flex-row items-center"
            to="/user"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 mt-0.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            ย้อนกลับ
          </router-link>
        </div>
        <div class="bg-slate-200 shadow py-2 px-2 pt-3 rounded-md mb-3">
          <div class="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 mr-1 stroke-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>

            <span class="font-semibold"> วิธีใช้งาน </span>
          </div>
        </div>
        <div class="bg-slate-100 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div
              class="w-full flex flex-row justify-between items-center border border-gray-400 py-2 px-4 transition-all duration-300 hover:bg-blue-400 hover:text-white cursor-pointer hover:border-blue-500"
            >
              <span>วิธีสมัครสมาชิก</span>
              <div class="flex flex-row gap-2">
                <button
                  class="bg-gray-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  รูปภาพ
                </button>
                <button
                  @click="toggleisRegister"
                  class="bg-blue-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  วีดีโอ
                </button>
              </div>
            </div>
            <iframe
              v-show="isRegister"
              class="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/C-3c-AO11Eg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div
              class="w-full flex flex-row justify-between items-center border border-gray-400 py-2 px-4 transition-all duration-300 hover:bg-blue-400 hover:text-white cursor-pointer hover:border-blue-500"
            >
              <span>วิธีการฝากเงิน</span>
              <div class="flex flex-row gap-2">
                <button
                  class="bg-gray-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  รูปภาพ
                </button>
                <button
                  @click="toggleisDeposit"
                  class="bg-blue-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  วีดีโอ
                </button>
              </div>
            </div>
            <iframe
              v-show="isDeposit"
              class="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/C-3c-AO11Eg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div
              class="w-full flex flex-row justify-between items-center border border-gray-400 py-2 px-4 transition-all duration-300 hover:bg-blue-400 hover:text-white cursor-pointer hover:border-blue-500"
            >
              <span>วิธีการถอนเงิน</span>
              <div class="flex flex-row gap-2">
                <button
                  class="bg-gray-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  รูปภาพ
                </button>
                <button
                  @click="toggleisWithdraw"
                  class="bg-blue-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  วีดีโอ
                </button>
              </div>
            </div>
            <iframe
              v-show="isWithdraw"
              class="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/C-3c-AO11Eg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div
              class="w-full flex flex-row justify-between items-center border border-gray-400 py-2 px-4 transition-all duration-300 hover:bg-blue-400 hover:text-white cursor-pointer hover:border-blue-500"
            >
              <span>วิธีการแทงหวยออนไลท์</span>
              <div class="flex flex-row gap-2">
                <button
                  class="bg-gray-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  รูปภาพ
                </button>
                <button
                  @click="toggleisHuayonline"
                  class="bg-blue-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  วีดีโอ
                </button>
              </div>
            </div>
            <iframe
              v-show="isHuayonline"
              class="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/C-3c-AO11Eg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div
              class="w-full flex flex-row justify-between items-center border border-gray-400 py-2 px-4 transition-all duration-300 hover:bg-blue-400 hover:text-white cursor-pointer hover:border-blue-500"
            >
              <span>วิธีการเปลื่ยนรหัสผ่าน</span>
              <div class="flex flex-row gap-2">
                <button
                  class="bg-gray-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  รูปภาพ
                </button>
                <button
                  @click="toggleisHowForgetpassword"
                  class="bg-blue-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  วีดีโอ
                </button>
              </div>
            </div>
            <iframe
              v-show="isHowForgetpassword"
              class="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/C-3c-AO11Eg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div
              class="w-full flex flex-row justify-between items-center border border-gray-400 py-2 px-4 transition-all duration-300 hover:bg-blue-400 hover:text-white cursor-pointer hover:border-blue-500"
            >
              <span>หากลืมรหัสผ่าน</span>
              <div class="flex flex-row gap-2">
                <button
                  class="bg-gray-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  รูปภาพ
                </button>
                <button
                  @click="toggleisForgetpassword"
                  class="bg-blue-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  วีดีโอ
                </button>
              </div>
            </div>
            <iframe
              v-show="isForgetpassword"
              class="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/C-3c-AO11Eg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div
              class="w-full flex flex-row justify-between items-center border border-gray-400 py-2 px-4 transition-all duration-300 hover:bg-blue-400 hover:text-white cursor-pointer hover:border-blue-500"
            >
              <span>วิธีการแจ้งปัญหา</span>
              <div class="flex flex-row gap-2">
                <button
                  class="bg-gray-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  รูปภาพ
                </button>
                <button
                  @click="toggleisReport"
                  class="bg-blue-500 rounded-md px-2 lg:px-5 py-2 text-white"
                >
                  วีดีโอ
                </button>
              </div>
            </div>
            <iframe
              v-show="isReport"
              class="w-full h-56 md:h-72 lg:h-96"
              src="https://www.youtube.com/embed/C-3c-AO11Eg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <StickyBottom />
</template>

<script>
export default {
  data() {
    return {
      isRegister: false,
      isDeposit: false,
      isWithdraw: false,
      isHuayonline: false,
      isHowForgetpassword: false,
      isForgetpassword: false,
      isReport: false,
    };
  },
  methods: {
    toggleisRegister() {
      this.isRegister = true;
      this.isDeposit = false;
      this.isWithdraw = false;
      this.isHuayonline = false;
      this.isHowForgetpassword = false;
      this.isForgetpassword = false;
      this.isReport = false;
    },
    toggleisDeposit() {
      this.isRegister = false;
      this.isDeposit = true;
      this.isWithdraw = false;
      this.isHuayonline = false;
      this.isHowForgetpassword = false;
      this.isForgetpassword = false;
      this.isReport = false;
    },
    toggleisWithdraw() {
      this.isRegister = false;
      this.isDeposit = false;
      this.isWithdraw = true;
      this.isHuayonline = false;
      this.isHowForgetpassword = false;
      this.isForgetpassword = false;
      this.isReport = false;
    },
    toggleisHuayonline() {
      this.isRegister = false;
      this.isDeposit = false;
      this.isWithdraw = false;
      this.isHuayonline = true;
      this.isHowForgetpassword = false;
      this.isForgetpassword = false;
      this.isReport = false;
    },
    toggleisHowForgetpassword() {
      this.isRegister = false;
      this.isDeposit = false;
      this.isWithdraw = false;
      this.isHuayonline = false;
      this.isHowForgetpassword = true;
      this.isForgetpassword = false;
      this.isReport = false;
    },
    toggleisForgetpassword() {
      this.isRegister = false;
      this.isDeposit = false;
      this.isWithdraw = false;
      this.isHuayonline = false;
      this.isHowForgetpassword = false;
      this.isForgetpassword = true;
      this.isReport = false;
    },
    toggleisReport() {
      this.isRegister = false;
      this.isDeposit = false;
      this.isWithdraw = false;
      this.isHuayonline = false;
      this.isHowForgetpassword = false;
      this.isForgetpassword = false;
      this.isReport = true;
    },
  },
};
</script>
