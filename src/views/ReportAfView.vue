<script setup>
import IncomeAf from "../components/ReportAf/IncomeAf.vue";
import HowtoAf from "../components/ReportAf/HowtoAf.vue";
import NetworkAf from "../components/ReportAf/NetworkAf.vue";
import WithdrawAf from "../components/ReportAf/WithdrawAf.vue";
</script>
<template>
  <div class="container py-3">
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
