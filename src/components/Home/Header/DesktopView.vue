<template>
  <div class="hidden lg:block">
    <div class="flex flex-row items-center gap-7 py-7">
      <div class="flex-none">
        <img
          src="../../../assets/small/logo.png"
          alt="logo"
          width="250"
          height="150"
        />
      </div>
      <div class="grow">
        <form action="#">
          <div class="mb-2 relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <input
              type="tel"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl pl-10 focus:outline-none focus:outline-gray-300 block w-full p-2.5"
              placeholder="เบอร์โทรศัพท์"
              required
              autocomplete="off"
            />
          </div>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <input
              type="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl pl-10 focus:outline-none focus:outline-gray-300 block w-full p-2.5"
              placeholder="รหัสผ่าน"
              required
              autocomplete="off"
            />
          </div>
        </form>
      </div>

      <div class="grow">
        <div class="flex flex-row mb-2">
          <div class="flex flex-row justify-center w-full gap-2">
            <router-link
              class="no-underline text-gray-900 w-full"
              to="/register"
            >
              <button
                type="button"
                class="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5"
              >
                สมัครสมาชิก
              </button>
            </router-link>
            <button
              type="button"
              class="w-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
        <div>
          <div class="flex flex-row justify-center w-full">
            <button
              type="button"
              class="flex flex-row justify-center items-center w-full text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-11"
            >
              <img
                class="mr-2"
                src="../../../assets/small/LINE_logo.svg.png"
                alt="Line Login"
                width="25"
                height="25"
              />
              Line Login
            </button>
            <div class="flex flex-row justify-center items-center w-full">
              <router-link class="flex flex-row" to="#"
                ><span class="mr-2"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                </span>
                ลืมรหัสผ่าน</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
