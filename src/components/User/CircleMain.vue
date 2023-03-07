<template>
  <router-link to="/user/moneyreport" class="no-underline text-black">
    <div class="w-fit h-fit">
      <div
        id="main-circle"
        class="w-60 h-60 lg:w-72 lg:h-72 rounded-full flex flex-col justify-center items-center relative hover:scale-105 transition-all duration-100"
      >
        <div class="flex flex-col items-center w-full">
          <span class="text-sm mb-2 flex flex-row items-center"
            ><span class="bg-blue-600 rounded-lg text-white mr-1 px-2">
              user
            </span>
            <span class="mt-0.5"> 0956236064 </span></span
          >
          <span class="mb-2 flex flex-row gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 stroke-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            ยอดเงินคงเหลือ</span
          >
          <span class="text-blue-500 text-3xl font-bold">1,000,000.00</span>
        </div>
        <router-link to="/user/profile"
          class="absolute right-8 lg:right-11 bottom-[0] lg:bottom-1 bg-white p-3 rounded-full shadow-xl transition-all duration-300 hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5"
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
  </router-link>
</template>
