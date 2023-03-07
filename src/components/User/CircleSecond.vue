<template>
  <router-link to="/user/reportaf" class="no-underline text-black">
    <div class="w-fit h-full flex flex-col">
      <div
        id="second-circle"
        class="w-20 h-20 lg:w-32 lg:h-32 rounded-full mt-auto flex flex-col justify-center items-center relative hover:scale-105 transition-all duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 mb-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
        <span class="text-[10px] lg:text-sm">รายได้เพื่อน AF</span>
      </div>
    </div>
  </router-link>
</template>
