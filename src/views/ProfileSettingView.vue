<script setup>
import StickyBottom from "../components/User/StickyBottom.vue";
import StickyHeader from "../components/User/StickyHeader.vue";
</script>

<template>
  <div class="min-h-screen h-auto w-full flex flex-col relative bg-emerald-700">
    <StickyHeader />
    <div
      class="w-full  bg-gray-900 flex flex-col justify-start items-center pt-8 pb-20"
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="font-semibold"> ตั่งค่าผู้ใช้ </span>
          </div>
        </div>
        <div class="bg-slate-100 shadow-sm rounded-md py-2">
          <div class="flex flex-col">
            <div class="flex flex-row mb-3 px-9">
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span class="text-lg">โปรไฟล์</span>
            </div>
            <div class="flex flex-row justify-center items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-28"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div class="flex flex-col mb-3">
              <form class="w-full px-9" action="#" method="post">
                <div class="mb-3 flex flex-col">
                  <label class="mb-2" for="username">ชื่อผู้ใช้งาน</label>
                  <input
                    disabled
                    class="py-2 border bg-slate-300 border-white rounded-md px-3 outline-none focus:border-blue-400"
                    type="text"
                    value="0956236064"
                    placeholder="กรอกเบอร์ชื่อผู้ใช้งาน"
                  />
                </div>
                <div class="mb-3 flex flex-col">
                  <label class="mb-2" for="username">เบอร์โทรศัพท์</label>
                  <input
                    disabled
                    class="py-2 border bg-slate-300 border-white rounded-md px-3 outline-none focus:border-blue-400"
                    type="text"
                    value="0956236064"
                    placeholder="กรอกเบอร์เบอร์โทรศัพท์"
                  />
                </div>

                <div class="flex flex-col mb-3">
                  <span class="text-lg font-semibold mb-1"
                    >ยืนยันเบอร์โทรศัพท์</span
                  >
                  <span class="text-green-700">ยืนยันแล้ว</span>
                </div>
              </form>
            </div>

            <div class="flex flex-col mb-3 px-9">
              <div class="flex flex-row">
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="text-lg">จัดการรหัสผ่าน</span>
              </div>
              <span class="text-sm text-red-700"
                >*หมายเหตุ: กรณีจำรหัสผ่านปัจจุบันไม่ได้
                กรุณาติดต่อแอดมินทางไลท์</span
              >
            </div>

            <div class="flex flex-col mb-3">
              <form class="w-full px-9" action="#" method="post">
                <div class="mb-3 flex flex-col">
                  <label class="mb-2" for="username">รหัสผ่านเดิม</label>
                  <input
                    class="py-2 border bg-slate-50 border-gray-300 rounded-md px-3 outline-none focus:border-blue-400"
                    type="password"
                  />
                </div>
                <div class="mb-3 flex flex-col">
                  <label class="mb-2" for="username">รหัสผ่านใหม่</label>
                  <input
                    class="py-2 border bg-slate-50 border-gray-300 rounded-md px-3 outline-none focus:border-blue-400"
                    type="password"
                  />
                </div>
                <div class="mb-3 flex flex-col">
                  <label class="mb-2" for="username">ยืนยันรหัสผ่านใหม่</label>
                  <input
                    class="py-2 border bg-slate-50 border-gray-300 rounded-md px-3 outline-none focus:border-blue-400"
                    type="password"
                  />
                </div>

                <div class="w-full">
                  <button
                    class="bg-violet-500 w-full py-2 rounded-md hover:bg-violet-600 transition-all duration-300 hover:text-white"
                  >
                    เปลื่ยนรหัสผ่าน
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StickyBottom />
  </div>
</template>
