<script setup>
import huay from "../../../assets/icon/หวย.png";
import casino from "../../../assets/icon/กีฬาคาสิโน.png";
import slot from "../../../assets/icon/สล็อตเกม.png";
import income from "../../../assets/icon/หารายได้.png";
import depositwithdraw from "../../../assets/icon/ฝากถอน.png";
</script>
<template>
  <div class="w-3/12 lg:w-2/12">
    <div class="flex flex-col items-center gap-1">
      <div
        v-for="item in items"
        class="bg-blue-200 w-12/12 py-2 rounded-xl flex flex-col items-center transition-all hover:bg-blue-300 duration-300 cursor-pointer"
      >
        <img class="w-10/12 lg:w-8/12" :src="item.img" alt="casino" />
        <span class="text-white text-sm">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "หวย",
          img: huay,
        },
        {
          name: "สล็อตเกม",
          img: slot,
        },
        {
          name: "คาสิโน",
          img: casino,
        },{
          name: "กีฬา",
          img: casino,
        },
      ],
    };
  },
  methods: {},
};
</script>
