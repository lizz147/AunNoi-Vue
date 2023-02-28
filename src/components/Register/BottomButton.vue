<template>
  <div class="flex flex-row w-full justify-center py-2 gap-2 px-4">
    <router-link
      class="no-underline text-green-700 w-full"
      to="/"
    >
      <div
        class="flex flex-row justify-center w-full border border-green-500 py-2 rounded hover:bg-green-50 cursor-pointer"
      >
        หน้าแรก
      </div>
    </router-link>
    <router-link class="no-underline text-white w-full" to="/">
      <div
        class="flex flex-row justify-center w-full border bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer"
      >
        เข้าสู่ระบบ
      </div>
    </router-link>
  </div>
</template>
