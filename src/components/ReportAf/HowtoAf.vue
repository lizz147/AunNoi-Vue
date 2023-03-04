<script setup>
import premierImg from "../../assets/New folder/h99-af-01-premier.jpg";
import goldImg from "../../assets/New folder/h99-af-02-gold.jpg";
import platinumImg from "../../assets/New folder/h99-af-03-platinum.jpg";
import diamondImg from "../../assets/New folder/h99-af-04-diamond.jpg";
import firstImg from "../../assets/New folder/h99-af-05-first.jpg";
import wisdomImg from "../../assets/New folder/h99-af-06-wisdom.jpg";
import infiniteImg from "../../assets/New folder/h99-af-07-infinite.jpg";
import tableImg from "../../assets/New folder/h-af-full-table.jpg";
</script>
<template>
  <div class="border-t-0 border border-gray-500 p-3">
    <div class="w-full flex flex-col">
      <h3>วิธีสร้างรายได้</h3>
      <span class="bg-gray-300 h-0.5 w-full my-3"></span>
      <div class="w-full mt-3">
        <p
          class="w-full text-start text-blue-700 px-5 leading-loose text-sm md:text-base"
        >
          ตัวอย่างการสร้างรายได้ ตามเลเวล แบ่งเป็นทั้งหมด 7 ชั้นด้วยกัน ดังนี้
        </p>

        <h3 class="text-center mt-2">
          <span class="text-red-700">ตัวอย่าง</span> การคำณวนรายได้ตามเลเวล
        </h3>
        <div class="flex flex-row flex-wrap md:flex-nowrap w-full bg-gray-800">
          <div
            @click="setState($event)"
            id="premier"
            :class="{ 'bg-red-600': isPremier }"
            class="hover:text-red-700 rounded-none hover:bg-slate-200 w-full text-xs md:text-base transition-all cursor-pointer text-center px-1 py-2 mdrounded-lg text-white md:rounded-b-none md:rounded-t-lg md:mt-1"
          >
            Premier
          </div>
          <div
            @click="setState($event)"
            id="gold"
            :class="{ 'bg-red-600': isGold }"
            class="hover:text-red-700 rounded-none hover:bg-slate-200 w-full text-xs md:text-base transition-all cursor-pointer text-center px-1 py-2 mdrounded-lg text-white md:rounded-b-none md:rounded-t-lg md:mt-1"
          >
            Gold
          </div>
          <div
            @click="setState($event)"
            id="platinum"
            :class="{ 'bg-red-600': isPlatinum }"
            class="hover:text-red-700 rounded-none hover:bg-slate-200 w-full text-xs md:text-base transition-all cursor-pointer text-center px-1 py-2 mdrounded-lg text-white md:rounded-b-none md:rounded-t-lg md:mt-1"
          >
            Platinum
          </div>
          <div
            @click="setState($event)"
            id="diamond"
            :class="{ 'bg-red-600': isDiamond }"
            class="hover:text-red-700 rounded-none hover:bg-slate-200 w-full text-xs md:text-base transition-all cursor-pointer text-center px-1 py-2 mdrounded-lg text-white md:rounded-b-none md:rounded-t-lg md:mt-1"
          >
            Diamond
          </div>
          <div
            @click="setState($event)"
            id="first"
            :class="{ 'bg-red-600': isFirst }"
            class="hover:text-red-700 rounded-none hover:bg-slate-200 w-full text-xs md:text-base transition-all cursor-pointer text-center px-1 py-2 mdrounded-lg text-white md:rounded-b-none md:rounded-t-lg md:mt-1"
          >
            First
          </div>
          <div
            @click="setState($event)"
            id="wisdom"
            :class="{ 'bg-red-600': isWisdom }"
            class="hover:text-red-700 rounded-none hover:bg-slate-200 w-full text-xs md:text-base transition-all cursor-pointer text-center px-1 py-2 mdrounded-lg text-white md:rounded-b-none md:rounded-t-lg md:mt-1"
          >
            Wisdom
          </div>
          <div
            @click="setState($event)"
            id="infinite"
            :class="{ 'bg-red-600': isInfinite }"
            class="hover:text-red-700 rounded-none hover:bg-slate-200 w-full text-xs md:text-base transition-all cursor-pointer text-center px-1 py-2 mdrounded-lg text-white md:rounded-b-none md:rounded-t-lg md:mt-1"
          >
            Infinite
          </div>
        </div>
        <div class="w-full">
          <img v-show="isPremier" :src="premierImg" alt="isPremier" />
          <img v-show="isGold" :src="goldImg" alt="isGold" />
          <img v-show="isPlatinum" :src="platinumImg" alt="isPlatinum" />
          <img v-show="isDiamond" :src="isDiamond" alt="isDiamond" />
          <img v-show="isFirst" :src="firstImg" alt="isFirst" />
          <img v-show="isWisdom" :src="wisdomImg" alt="isWisdom" />
          <img v-show="isInfinite" :src="infiniteImg" alt="isInfinite" />
          <div class="w-full flex flex-row justify-center">
            <button
              class="flex flex-row gap-1 bg-black text-white py-2 px-5 rounded-xl"
            >
              <a
                class="flex flex-row text-white no-underline"
                :href="stateImg"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                คลิกเพื่อดูภาพขนาดใหญ่
              </a>
            </button>
          </div>
          <div class="w-full flex flex-row">
            <span class="bg-gray-300 h-0.5 w-full my-3"></span>
          </div>
        </div>
        <div class="w-full">
          <img :src="tableImg" alt="table" />
        </div>
        <div class="w-full flex flex-row justify-center">
          <button
            class="flex flex-row gap-1 bg-red-500 text-white py-2 px-5 rounded-xl"
          >
            <a
              class="flex flex-row text-white no-underline"
              :href="tableImg"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              คลิกเพื่อดูภาพขนาดใหญ่
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      stateImg: premierImg,
      isPremier: true,
      isGold: false,
      isPlatinum: false,
      isDiamond: false,
      isFirst: false,
      isWisdom: false,
      isInfinite: false,
    };
  },
  methods: {
    setState(event) {
      this.id = event.target.id;
      if (this.id == "premier") {
        this.isPremier = true;
        this.isGold = false;
        this.isPlatinum = false;
        this.isDiamond = false;
        this.isFirst = false;
        this.isWisdom = false;
        this.isInfinite = false;
        this.stateImg = premierImg;
      }
      if (this.id == "gold") {
        this.isPremier = false;
        this.isGold = true;
        this.isPlatinum = false;
        this.isDiamond = false;
        this.isFirst = false;
        this.isWisdom = false;
        this.isInfinite = false;
        this.stateImg = goldImg;
      }
      if (this.id == "platinum") {
        this.isPremier = false;
        this.isGold = false;
        this.isPlatinum = true;
        this.isDiamond = false;
        this.isFirst = false;
        this.isWisdom = false;
        this.isInfinite = false;
        this.stateImg = platinumImg;
      }
      if (this.id == "diamond") {
        this.isPremier = false;
        this.isGold = false;
        this.isPlatinum = false;
        this.isDiamond = true;
        this.isFirst = false;
        this.isWisdom = false;
        this.isInfinite = false;
        this.stateImg = diamondImg;
      }
      if (this.id == "first") {
        this.isPremier = false;
        this.isGold = false;
        this.isPlatinum = false;
        this.isDiamond = false;
        this.isFirst = true;
        this.isWisdom = false;
        this.isInfinite = false;
        this.stateImg = firstImg;
      }
      if (this.id == "wisdom") {
        this.isPremier = false;
        this.isGold = false;
        this.isPlatinum = false;
        this.isDiamond = false;
        this.isFirst = false;
        this.isWisdom = true;
        this.isInfinite = false;
        this.stateImg = wisdomImg;
      }
      if (this.id == "infinite") {
        this.isPremier = false;
        this.isGold = false;
        this.isPlatinum = false;
        this.isDiamond = false;
        this.isFirst = false;
        this.isWisdom = false;
        this.isInfinite = true;
        this.stateImg = infiniteImg;
      }
    },
  },
};
</script>
