<template>
  <div class="flex flex-col items-center w-full">
    <div
      @click="isVisible = !isVisible"
      class="w-full px-4 bg-amber-300 hover:bg-amber-400 cursor-pointer rounded-lg"
    >
      <div class="flex flex-row justify-start items-center w-full py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
          />
        </svg>
        <h6 class="mr-3 text-xs md:text-sm">หวยออมสิน</h6>
        <svg
          v-show="!isVisible"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 ml-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>

        <svg
          v-show="isVisible"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 ml-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
          />
        </svg>
      </div>

      <div v-show="isVisible" class="mb-1 rounded fade h-32">
        <div class="flex flex-col">
          <div class="mb-2">
            <div class="bg-white rounded py-1">
              <h6 class="text-center">590417</h6>
            </div>
          </div>

          <div class="mb-2">
            <div class="flex flex-row w-full gap-3">
              <div class="w-full flex flex-col items-center rounded">
                <span
                  class="py-1 bg-yellow-200 w-full rounded rounded-b-none text-center"
                  >3ตัวหน้า</span
                >
                <h6
                  class="py-2 bg-white w-full rounded rounded-t-none text-center"
                >
                  664,195
                </h6>
              </div>
              <div class="w-full flex flex-col items-center rounded">
                <span
                  class="py-1 bg-yellow-200 w-full rounded rounded-b-none text-center"
                  >3ตัวหน้า</span
                >
                <h6
                  class="py-2 bg-white w-full rounded rounded-t-none text-center"
                >
                  664,195
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
};
</script>
