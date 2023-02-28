<script setup>
import casino from "../assets/icon/กีฬาคาสิโน.png";
import deposit from "../assets/icon/ฝากถอน.png";
import slotgame from "../assets/icon/สล็อตเกม.png";
import huay from "../assets/icon/หวย.png";
import earnmoney from "../assets/icon/หารายได้.png";
</script>

<template>
  <div
    class="bg-red-400 h-screen w-full flex flex-col items-center justify-between"
  >
    <div
      class="w-full h-full bg-emerald-500 flex flex-col justify-center items-center"
    >
      <div
        class="w-full md:w-1/2 flex flex-row items-end justify-center "
        id="glass"
      >
        <div
          class="w-52 h-52 lg:w-80 lg:h-80 flex flex-col justify-center items-center rounded-full shadow-lg"
          id="glassmorphism"
        >
          <div class="flex flex-col justify-center items-center">
            <span class="flex flex-row mb-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-base lg:text-xl">ยอดเงินคงเหลือ</span></span
            >
            <span
              ><h5 class="text-white text-3xl tracking-widest">0.00</h5></span
            >
          </div>
        </div>
        <div
          class="w-28 h-28 lg:w-48 lg:h-48 flex flex-col justify-center items-center rounded-full shadow-lg"
          id="glassmorphism"
        >
          <div class="flex flex-col justify-center items-center">
            <span
              class="flex flex-col lg:flex-row mb-1 justify-center items-center"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 lg:mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>

              <span class="text-xs lg:text-base">รายได้ชวนเพื่อน AF</span></span
            >
            <span
              ><h5 class="text-white text-xl tracking-widest">0.00</h5></span
            >
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2 mt-3 " id="button-deposit-withdraw">
        <div class="flex flex-row items-center gap-2 px-2">
          <button class="bg-green-500 w-full py-2 flex flex-row justify-center gap-1 md:gap-2 lg:gap-3 items-center border border-white hover:bg-green-600">
            <span class="mr-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-10 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="text-white font-semibold text-xl">ฝากเงิน</span>
          </button>
          <button class="bg-red-500 w-full py-2  flex flex-row justify-center gap-1 lg:gap-2 items-center border border-white hover:bg-red-600">
            <span class="mr-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-10 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="text-white font-semibold text-xl ">ถอนเงิน</span>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full bg-emerald-600 flex flex-row justify-evenly items-center">
      <div
        class="flex flex-col items-center hover:bg-emerald-500 cursor-pointer pt-1"
        v-for="item in items"
      >
        <img :src="item.img" alt="กีฟาคาสิโน" class="w-1/2 lg:w-3/12" />
        <p class="text-white">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "กีฬาคาสิโน",
          img: casino,
        },
        {
          name: "สล็อตเกม",
          img: slotgame,
        },
        {
          name: "ฝากถอน",
          img: deposit,
        },
        {
          name: "หวย",
          img: huay,
        },
        {
          name: "หารายได้",
          img: earnmoney,
        },
      ],
    };
  },
};
</script>
