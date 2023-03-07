<template>
  <router-link to="user/deposit" class="no-underline text-white w-full">
    <button
      class="bg-green-500 w-full py-2 flex flex-row justify-center gap-1 md:gap-2 lg:gap-3 items-center transition-all duration-300 hover:bg-green-700 group"
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
</template>
