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
          :class="{ 'bg-slate-900 text-blue-500': this.StateIncomeAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          รายได้ AF
        </div>
        <div
          id="networkAf"
          :class="{ 'bg-slate-900 text-blue-500': this.StateNetworkAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          เครือข่าย
        </div>
        <div
          id="withdrawAf"
          :class="{ 'bg-slate-900 text-blue-500': this.StateWithdrawAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          ถอนรายได้
        </div>
        <div
          id="howtoaf"
          :class="{ 'bg-slate-900 text-blue-500': this.StateHowtoAf }"
          class="text-sm md:text-base text-center py-2 border-t border-r border-b border-gray-500 rounded-t-xl transition-all hover:bg-slate-900 duration-300 cursor-pointer hover:text-blue-500"
          @click="setState($event)"
        >
          วิธีการ
        </div>
      </div>
    </div>
    <IncomeAf v-show="StateIncomeAf" />
    <NetworkAf v-show="StateNetworkAf" />
    <WithdrawAf v-show="StateWithdrawAf" />
    <HowtoAf v-show="StateHowtoAf" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      StateIncomeAf: true,
      StateNetworkAf: false,
      StateWithdrawAf: false,
      StateHowtoAf: false,
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
        this.StateIncomeAf = true;
        this.StateNetworkAf = false;
        this.StateWithdrawAf = false;
        this.StateHowtoAf = false;
        return;
      }
      if (this.id == "networkAf") {
        this.StateIncomeAf = false;
        this.StateNetworkAf = true;
        this.StateWithdrawAf = false;
        this.StateHowtoAf = false;
        return;
      }
      if (this.id == "withdrawAf") {
        this.StateIncomeAf = false;
        this.StateNetworkAf = false;
        this.StateWithdrawAf = true;
        this.StateHowtoAf = false;
        return;
      }
      if (this.id == "howtoaf") {
        this.StateIncomeAf = false;
        this.StateNetworkAf = false;
        this.StateWithdrawAf = false;
        this.StateHowtoAf = true;
        return;
      }
    },
  },
};
</script>
