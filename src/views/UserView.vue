<script setup>
import NewStickyBottom from "../components/User/NewStickyBottom.vue";
import NewStickyHeader from "../components/User/NewStickyHeader.vue";
import CircleMain from "../components/User/CircleMain.vue";
import CircleSecond from "../components/User/CircleSecond.vue";
import DepositButton from "../components/User/DepositButton.vue";
import WithDrawButton from "../components/User/WithDrawButton.vue";
import MenuView from "../components/User/Menu/Menu.vue"
</script>

<template>
  <div class="min-h-screen h-full pb-10" id="userMain">
    <NewStickyHeader />
    <div
      id="layout"
      class="w-full md:w-3/4  shadow-lg mx-auto mt-2 flex flex-col pt-2 lg:pt-4 pb-3"
    >
      <div class="flex flex-row w-full justify-center">
        <CircleMain />
        <CircleSecond />
      </div>
      <div class="flex mt-6 mb-2">
        <DepositButton />
        <WithDrawButton />
      </div>
      <div class="w-full flex-row hidden lg:flex">
        <router-link to="/user/reportaf" class="w-full">
          <img
            class="w-full"
            src="../assets/gif-link.gif"
            alt="gif"
          /> </router-link
        ><router-link to="/user/reportaf" class="w-full">
          <img
            class="w-full"
            src="../assets/gif-link.gif"
            alt="gif"
          /> </router-link
        ><router-link to="/user/reportaf" class="w-full">
          <img class="w-full" src="../assets/gif-link.gif" alt="gif" />
        </router-link>
      </div>
      <div class="w-full block lg:hidden">
        <router-link to="/user/reportaf" class="w-full">
          <img class="w-full" src="../assets/gif-link.gif" alt="gif" />
        </router-link>
      </div>
      <div class="flex flex-row gap-0.5 px-0.5">
        <MenuView />
      </div>
    </div>
    <NewStickyBottom />
  </div>
</template>
