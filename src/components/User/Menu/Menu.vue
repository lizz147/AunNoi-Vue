<script setup>
import huay from "../../../assets/icon/หวย.png";
import casino from "../../../assets/icon/กีฬาคาสิโน.png";
import slot from "../../../assets/icon/สล็อตเกม.png";
import income from "../../../assets/icon/หารายได้.png";
import depositwithdraw from "../../../assets/icon/ฝากถอน.png";

import HuayMenu from "./HuayMenu.vue";
import CasinoMenu from "./CasinoMenu.vue";
import FishMenu from "./FishMenu.vue";
import SlotMenu from "./SlotMenu.vue";
</script>
<template>
  <div class="w-3/12 lg:w-2/12">
    <div class="flex flex-col items-center gap-1">
      <div
        @click="ChangeisHuay"
        class="bg-gray-700 w-12/12 py-2 rounded-xl flex flex-col items-center transition-all hover:bg-gray-800 duration-300 cursor-pointer"
      >
        <img class="w-10/12 lg:w-8/12" :src="huay" alt="casino" />
        <span class="text-white text-sm">หวย</span>
      </div>
      <div
        @click="ChangeisCasiso"
        class="bg-gray-700 w-12/12 py-2 rounded-xl flex flex-col items-center transition-all hover:bg-gray-800 duration-300 cursor-pointer"
      >
        <img class="w-10/12 lg:w-8/12" :src="casino" alt="casino" />
        <span class="text-white text-sm">คาสิโน</span>
      </div>
      <div
        @click="ChangeisSlot"
        class="bg-gray-700 w-12/12 py-2 rounded-xl flex flex-col items-center transition-all hover:bg-gray-800 duration-300 cursor-pointer"
      >
        <img class="w-10/12 lg:w-8/12" :src="slot" alt="casino" />
        <span class="text-white text-sm">สล็อตเกม</span>
      </div>
      <div
        @click="ChangeisShootFish"
        class="bg-gray-700 w-12/12 py-2 rounded-xl flex flex-col items-center transition-all hover:bg-gray-800 duration-300 cursor-pointer"
      >
        <img class="w-10/12 lg:w-8/12" :src="income" alt="casino" />
        <span class="text-white text-sm">ยิงปลา</span>
      </div>
      <div
        class="bg-gray-700 w-12/12 py-2 rounded-xl flex flex-col items-center transition-all hover:bg-gray-800 duration-300 cursor-pointer"
      >
        <img class="w-10/12 lg:w-8/12" :src="income" alt="casino" />
        <span class="text-white text-sm">กีฬา</span>
      </div>
    </div>
  </div>
  <div class="w-9/12 lg:w-10/12 bg-slate-900 h-auto rounded-lg">
    <HuayMenu v-show="isHuay" />
    <SlotMenu v-show="isSlot" />
    <CasinoMenu v-show="isCasiso" />
    <FishMenu v-show="isShootFish" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHuay: false,
      isCasiso: false,
      isSlot: true,
      isShootFish: false,
    };
  },
  methods: {
    ChangeisHuay() {
      this.isHuay = true;
      this.isCasiso = false;
      this.isSlot = false;
      this.isShootFish = false;
    },
    ChangeisCasiso() {
      this.isHuay = false;
      this.isCasiso = true;
      this.isSlot = false;
      this.isShootFish = false;
    },
    ChangeisSlot() {
      this.isHuay = false;
      this.isCasiso = false;
      this.isSlot = true;
      this.isShootFish = false;
    },
    ChangeisShootFish() {
      this.isHuay = false;
      this.isCasiso = false;
      this.isSlot = false;
      this.isShootFish = true;
    },
  },
};
</script>
