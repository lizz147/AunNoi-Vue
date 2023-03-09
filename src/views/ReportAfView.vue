<script setup>
import IncomeAf from "../components/ReportAf/IncomeAf.vue";
import HowtoAf from "../components/ReportAf/HowtoAf.vue";
import NetworkAf from "../components/ReportAf/NetworkAf.vue";
import WithdrawAf from "../components/ReportAf/WithdrawAf.vue";
import StickyBottom from "../components/User/NewStickyBottom.vue";
import StickyHeader from "../components/User/NewStickyHeader.vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
</script>
<template>
  <StickyHeader />
  <div class="container py-3 bg-slate-100 mb-10">
    <router-link
      to="/user"
      class="text-blue-500 no-underline hover:text-blue-700 transition-all duration-200 flex flex-row gap-1 my-2 px-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>

      หน้าแรก
    </router-link>
    <div id="headerAf">
      <div
        class="grid grid-cols-4 w-full border-l border-gray-500 rounded-tl-xl"
      >
        <div
          id="incomeaf"
          :class="{ 'bg-slate-900 text-blue-500': isStateIncomeAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          รายได้ AF
        </div>
        <div
          id="networkAf"
          :class="{ 'bg-slate-900 text-blue-500': isStateNetworkAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          เครือข่าย
        </div>
        <div
          id="withdrawAf"
          :class="{ 'bg-slate-900 text-blue-500': isStateWithdrawAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          ถอนรายได้
        </div>
        <div
          id="howtoaf"
          :class="{ 'bg-slate-900 text-blue-500': isStateHowtoAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          วิธีการ
        </div>
      </div>
    </div>
    <IncomeAf v-if="isStateIncomeAf" />
    <NetworkAf v-if="isStateNetworkAf" />
    <WithdrawAf v-if="isStateWithdrawAf" />
    <HowtoAf v-if="isStateHowtoAf" />
  </div>
  <StickyBottom />
</template>

<script>
export default {
  data() {
    return {
      id: "",
      isStateIncomeAf: true,
      isStateNetworkAf: false,
      isStateWithdrawAf: false,
      isStateHowtoAf: false,
      items: [
        {
          name: "รายได้ AF",
        },
        {
          name: "เครือข่าย",
        },
        {
          name: "ถอนรายได้",
        },
        {
          name: "วิธีการ",
        },
      ],
    };
  },
  methods: {
    setState(event) {
      this.id = event.target.id;
      if (this.id == "incomeaf") {
        this.isStateIncomeAf = true;
        this.isStateNetworkAf = false;
        this.isStateWithdrawAf = false;
        this.isStateHowtoAf = false;
        return;
      }
      if (this.id == "networkAf") {
        this.isStateIncomeAf = false;
        this.isStateNetworkAf = true;
        this.isStateWithdrawAf = false;
        this.isStateHowtoAf = false;
        return;
      }
      if (this.id == "withdrawAf") {
        this.isStateIncomeAf = false;
        this.isStateNetworkAf = false;
        this.isStateWithdrawAf = true;
        this.isStateHowtoAf = false;
        return;
      }
      if (this.id == "howtoaf") {
        this.isStateIncomeAf = false;
        this.isStateNetworkAf = false;
        this.isStateWithdrawAf = false;
        this.isStateHowtoAf = true;
        return;
      }
    },
  },
};
</script>
