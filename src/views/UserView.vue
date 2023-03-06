<script setup>
import StickyHeader from "../components/User/StickyHeader.vue";
import StickyBottom from "../components/User/StickyBottom.vue";
</script>

<template>
  <div class="min-h-screen h-auto w-full flex flex-col relative bg-emerald-700">
    <StickyHeader />
    <div
      class="w-full h-full bg-gray-900 flex flex-col justify-start pt-7 items-center py-24"
    >
      <div
        class="w-full md:w-1/2 flex flex-row items-end justify-center"
        id="glass"
      >
        <routerLink class="no-underline text-black" to="/user/moneyreport">
          <div
            class="w-52 h-52 lg:w-80 lg:h-80 flex flex-col justify-center items-center rounded-full shadow-lg relative transiton-all cursor-pointer duration-300 group"
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
                  class="w-6 mr-1 group-hover:stroke-blue-700 transition-all duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span
                  class="text-base lg:text-xl group-hover:text-blue-700 transition-all duration-200"
                  >ยอดเงินคงเหลือ</span
                ></span
              >
              <span
                ><h5
                  class="text-white text-3xl tracking-widest group-hover:text-blue-600 transition-all duration-200"
                >
                  0.00
                </h5></span
              >
            </div>

            <div class="absolute right-0 bottom-0 lg:right-1 lg:bottom-10">
              <div
                class="w-14 h-14 rounded-full border-2 border-gray-100 bg-slate-100 shadow-sm flex flex-col items-center justify-center transition-all duration-200 hover:bg-red-500 hover:border-none"
              >
                <router-link to="/user/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 hover:stroke-2 cursor-pointer transition-all duration-200 stroke-black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </routerLink>

        <router-link class="no-underline text-black" to="/user/reportaf">
          <div
            class="w-28 h-28 lg:w-48 lg:h-48 flex flex-col justify-center items-center rounded-full shadow-lg cursor-pointer"
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
                  class="w-5 lg:mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>

                <span class="text-xs lg:text-base"
                  >รายได้ชวนเพื่อน AF</span
                ></span
              >
              <span
                ><h5 class="text-white text-xl tracking-widest">0.00</h5></span
              >
            </div>
          </div>
        </router-link>
      </div>

      <div class="w-full lg:w-1/2 mt-3" id="button-deposit-withdraw">
        <div class="flex flex-row items-center gap-2 px-2">
          <router-link to="user/deposit" class="no-underline text-white w-full">
            <button
              class="bg-green-500 w-full py-2 flex flex-row justify-center gap-1 md:gap-2 lg:gap-3 items-center transition-all duration-300 hover:bg-green-600"
            >
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
          </router-link>
          <router-link
            to="user/withdraw"
            class="no-underline text-white w-full"
          >
            <button
              class="bg-red-500 w-full py-2 flex flex-row justify-center gap-1 lg:gap-2 items-center transition-all duration-300 hover:bg-red-600"
            >
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
              <span class="text-white font-semibold text-xl">ถอนเงิน</span>
            </button>
          </router-link>
        </div>
      </div>

      <router-link class="w-full" to="/user/reportaf">
        <div class="w-full flex flex-row justify-center" id="gift">
          <div class="w-full lg:w-1/2">
            <img
              class="w-full object-cover"
              src="../assets/gif-link.gif"
              alt="giflink"
            />
          </div>
        </div>
      </router-link>
      <div
        id="menu"
        class="h-auto w-full lg:w-1/2 flex flex-row mb-4 bg-slate-900"
      >
        <div class="w-3/12 pt-4">
          <div class="flex flex-col items-center">
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img
                class="w-7/12 lg:w-4/12"
                src="../assets/icon/หวย.png"
                alt="casino"
              />
              <span class="text-white text-sm">หวย</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img
                class="w-7/12 lg:w-4/12"
                src="../assets/icon/สล็อตเกม.png"
                alt="casino"
              />
              <span class="text-white text-sm">สล็อตเกม</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img
                class="w-7/12 lg:w-4/12"
                src="../assets/icon/กีฬาคาสิโน.png"
                alt="casino"
              />
              <span class="text-white text-sm">กีฟาคาสิโน</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img
                class="w-7/12 lg:w-4/12"
                src="../assets/icon/สล็อตเกม.png"
                alt="casino"
              />
              <span class="text-white text-sm">คาสิโน</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img
                class="w-7/12 lg:w-4/12"
                src="../assets/icon/สล็อตเกม.png"
                alt="casino"
              />
              <span class="text-white text-sm">คาสิโน</span>
            </div>
          </div>
        </div>
        <div class="w-9/12 bg-gray-800 h-full mt-4 rounded-md py-2 px-3">
          <div class="flex flex-col items-center">
            <span class="text-white text-center text-sm lg:text-md mb-3">
              Casino & Slot Online เกมส์และโต้ะเกมส์สดมากที่สุดในไทย
            </span>
            <div class="flex flex-row gap-2">
              <div class="flex flex-col items-center cursor-pointer">
                <img
                  class="w-auto h-32 lg:h-40 object-cover rounded-lg"
                  src="../assets/carousel/s1.png"
                  alt="random"
                />
                <span class="mt-1 text-white text-center text-sm">สุ่มเกม</span>
              </div>
              <div class="flex flex-col items-center cursor-pointer">
                <img
                  class="w-auto h-32 lg:h-40 object-cover rounded-lg"
                  src="../assets/carousel/s1.png"
                  alt="random"
                />
                <span class="mt-1 text-white text-center text-sm"
                  >SA Gaming</span
                >
              </div>
            </div>
            <div class="flex flex-col w-full mt-3 mb-3">
              <img
                class="rounded-lg object-cover w-auto h-56"
                src="../assets/carousel/s2.png"
                alt=""
              />
              <span class="mt-1 text-white text-center text-sm"
                >ASIA Gaming</span
              >
            </div>
            <div class="flex flex-row gap-2 mb-2">
              <div class="flex flex-col items-center cursor-pointer">
                <img
                  class="w-auto h-32 lg:h-40 object-cover rounded-lg"
                  src="../assets/carousel/s1.png"
                  alt="random"
                />
                <span class="mt-1 text-white text-center text-sm">WB</span>
              </div>
              <div class="flex flex-col items-center cursor-pointer">
                <img
                  class="w-auto h-32 lg:h-40 object-cover rounded-lg"
                  src="../assets/carousel/s1.png"
                  alt="random"
                />
                <span class="mt-1 text-white text-center text-sm"
                  >AMB Poker</span
                >
              </div>
            </div>
            <div class="flex flex-row gap-2 mb-2">
              <div class="flex flex-col items-center cursor-pointer">
                <img
                  class="w-auto h-32 lg:h-40 object-cover rounded-lg"
                  src="../assets/carousel/s1.png"
                  alt="random"
                />
                <span class="mt-1 text-white text-center text-sm">สุ่มเกม</span>
              </div>
              <div class="flex flex-col items-center cursor-pointer">
                <img
                  class="w-auto h-32 lg:h-40 object-cover rounded-lg"
                  src="../assets/carousel/s1.png"
                  alt="random"
                />
                <span class="mt-1 text-white text-center text-sm"
                  >SA Gaming</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StickyBottom />
  </div>
</template>
