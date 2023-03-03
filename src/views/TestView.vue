<script setup>
import casino from "../assets/icon/กีฬาคาสิโน.png";
import deposit from "../assets/icon/ฝากถอน.png";
import slotgame from "../assets/icon/สล็อตเกม.png";
import huay from "../assets/icon/หวย.png";
import earnmoney from "../assets/icon/หารายได้.png";
import giflink from "../assets/gif-link.gif";
import StickyBottom from "../components/Test/StickyBottom.vue";
</script>

<template>
  <div class="min-h-screen h-auto w-full flex flex-col relative bg-emerald-700">
    <div
      id="header"
      class="w-full bg-emerald-700 flex flex-row justify-evenly items-center sticky top-0 z-30 py-1  lg:gap-0"
    >
      <div>
        <img src="../assets/small/logo.png" class="w-36 lg:w-48" />
      </div>
      <div class="flex flex-row items-center lg:gap-3">
        <div class="flex flex-row relative">
          <div>
            <div class="flex flex-row bg-green-700 py-1 px-2 rounded-tl-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="w-3 lg:w-4 mr-1 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <span class="text-white text-sm">0956236064</span>
            </div>
            <div
              class="flex flex-row bg-slate-100 items-center px-2 rounded-bl-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                class="w-4 mr-1 stroke-green-700 stroke-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span class="mb-0.5">0.00</span>
            </div>
          </div>
          <div
            class="bg-green-700 flex flex-col justify-center px-1 rounded-tr-md rounded-br-md"
          >
            <svg
              style="user-select: none"
              @click="toggleMenuDropDownVisible"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 stroke-white cursor-pointer hover:stroke-2 hover:stroke-green-600 transiton-all duration-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <div
            class="fade absolute w-full py-3 pb-1 -bottom-44 bg-slate-50 shadow-lg rounded-md px-2 border border-gray-700"
            id="MenuDropDown"
            v-show="isMenuDropDownVisible"
          >
            <div class="flex flex-col">
              <div
                class="flex flex-row cursor-pointer hover:text-blue-700 transiton-all duration-200 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="text-sm">ตั่งค่าผู้ใช้</span>
              </div>
              <div
                class="flex flex-row cursor-pointer hover:text-blue-700 transiton-all duration-200 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>

                <span class="text-sm">บัญชีธนาคาร</span>
              </div>
              <div
                class="flex flex-row cursor-pointer hover:text-blue-700 transiton-all duration-200 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>

                <span class="text-sm">วิธีใช้งาน</span>
              </div>
              <div
                class="flex flex-row cursor-pointer hover:text-blue-700 transiton-all duration-200 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>

                <span class="text-sm">ศูนย์ช่วยเหลือ</span>
              </div>
              <hr class="bg-gray-200 pt-0.5 mb-2" />
              <div
                class="flex flex-row cursor-pointer hover:text-blue-700 transiton-all duration-200 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <span class="text-sm">ออกจากระบบ</span>
              </div>
            </div>
          </div>
        </div>
        <div
          @click="toggleContectVisible"
          class="w-12 h-12 bg-slate-100 rounded-full ml-2 flex flex-col items-center justify-center hover:bg-slate-200 cursor-pointer transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 stroke-green-700 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </div>
      </div>
    </div>
    <div
      class="w-full h-full bg-gray-900 flex flex-col justify-start pt-7 items-center py-24"
    >
      <div
        class="w-full md:w-1/2 flex flex-row items-end justify-center"
        id="glass"
      >
        <routerLink class="no-underline text-black" to="/test/moneylist">
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
                class="w-14 h-14 rounded-full border-2 border-gray-100 bg-slate-100 shadow-sm flex flex-col items-center justify-center transition-all duration-200  hover:bg-red-500 hover:border-none"
              >
                <router-link to="/test/profile">
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
                class="w-5 lg:mr-1"
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

      <div class="w-full lg:w-1/2 mt-3" id="button-deposit-withdraw">
        <div class="flex flex-row items-center gap-2 px-2">
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
        </div>
      </div>

      <div class="w-full flex flex-row justify-center" id="gift">
        <div class="w-full lg:w-1/2">
          <img class="w-full object-cover" :src="giflink" alt="giflink" />
        </div>
      </div>

      <div
        id="menu"
        class="h-auto w-full lg:w-1/2 flex flex-row mb-4 bg-slate-900"
      >
        <div class="w-3/12 pt-4">
          <div class="flex flex-col items-center">
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img class="w-7/12 lg:w-4/12" :src="casino" alt="casino" />
              <span class="text-white text-sm">คาสิโน</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img class="w-7/12 lg:w-4/12" :src="casino" alt="casino" />
              <span class="text-white text-sm">คาสิโน</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img class="w-7/12 lg:w-4/12" :src="casino" alt="casino" />
              <span class="text-white text-sm">คาสิโน</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img class="w-7/12 lg:w-4/12" :src="casino" alt="casino" />
              <span class="text-white text-sm">คาสิโน</span>
            </div>
            <div
              class="bg-gray-800 w-10/12 mb-4 py-3 rounded-xl flex flex-col items-center transition-all hover:bg-gray-700 duration-300 cursor-pointer"
            >
              <img class="w-7/12 lg:w-4/12" :src="casino" alt="casino" />
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

    <div
      v-show="isContectVisible"
      id="center-popup"
      class="fade w-11/12 lg:w-11/12 h-1/6 absolute  top-48 lg:top-2 left-1/2 transform -translate-x-1/2   shadow rounded-md z-50 bg-slate-50"
    >
      <div class="flex flex-col h-full">
        <div
          class="flex flex-row justify-between py-5 p-3 bg-emerald-500 rounded-t-md"
        >
          <span class="text-white text-lg">เลือกข่องทางติดต่อเรา</span>
          <svg
            @click="toggleContectVisible"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 cursor-pointer stroke-slate-800 hover:stroke-white transition-all duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-3 py-5 rounded-b-md h-full"
        >
          <div
            class="flex flex-col items-center border border-emerald-500 p-4 px-5 cursor-pointer transiton-all hover:bg-green-200 duration-300"
          >
            <span class="text-green-700">ติดต่อผ่านไลท์</span>
            <img
              src="../assets/small/LINE_logo.svg.png"
              alt="Line"
              width="60"
            />
          </div>
          <div
            class="flex flex-col items-center border border-red-500 p-4 cursor-pointer transiton-all hover:bg-red-200 duration-300"
          >
            <span class="text-red-700 mb-1">แชทสดกับพนักงาน</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="50"
              class="stroke-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-show="isContectVisible"  class="w-full h-full absolute z-40"     style="background-color: rgba(0, 0, 0, 0.5)">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isContectVisible: false,
      isMenuDropDownVisible: false,
      isMenuMoneyListVisible: false,
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
  methods: {
    toggleContectVisible() {
      this.isContectVisible = !this.isContectVisible;
    },
    toggleMenuDropDownVisible() {
      this.isMenuDropDownVisible = !this.isMenuDropDownVisible;
    },
    toggleMoneyListVisible() {
      this.isMoneyListVisible = !this.isMoneyListVisible;
    },
  },
};
</script>
