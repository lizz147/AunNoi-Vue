<template>
  <router-link to="user/withdraw" class="no-underline text-white w-full">
    <button
      class="bg-red-500 w-full py-2 flex flex-row justify-center gap-1 lg:gap-2 items-center transition-all duration-300 hover:bg-red-700"
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
</template>
