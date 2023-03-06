<template>
<div
      id="header"
      class="w-full bg-emerald-700 flex flex-row justify-evenly items-center sticky top-0 z-30 py-1  lg:gap-0"
    >
      <div>
        <img src="../../assets/small/logo.png" class="w-36 lg:w-48" />
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
              <router-link to="/user/profile" class="text-black no-underline">
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
              </router-link>
              <router-link to="/user/bankacount" class="text-black no-underline">
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
              </router-link>
              <router-link to="/user/howtouse" class="text-black no-underline">
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
              </router-link>
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
      v-show="isContectVisible"
      id="center-popup"
      class="fade w-11/12 lg:w-6/12 h-2/6 absolute  top-5 lg:top-2 left-1/2 transform -translate-x-1/2   shadow rounded-md z-50 bg-slate-50"
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
            <span class="text-green-700 mb-2">ติดต่อผ่านไลท์</span>
            <img
              src="../../assets/small/LINE_logo.svg.png"
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

</template>

<script>
export default {
  data() {
    return {
      isContectVisible: false,
      isMenuDropDownVisible: false,
      isMenuMoneyListVisible: false,
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
