<script setup>
import Yeegee from "./Accordion/Yeegee.vue";
import Gts from "./Accordion/Gts.vue";
import Thai from "./Accordion/Thai.vue";
import Aomsin from "./Accordion/Aomsin.vue";
import Laos from "./Accordion/Laos.vue";
import Vitenam from "./Accordion/Vitenam.vue";
import Inter from "./Accordion/INter.vue";
import Share from "./Accordion/Share.vue";
import ShareVip from "./Accordion/ShareVip.vue";
import YeegeeVip from "./Accordion/YeegeeVip.vue";

</script>
<template>
  <div class="w-full py-4" style="user-select: none">
    <h5 class="text-center">ผลรางวัล</h5>
    <div class="mb-3">
      <Thai />
    </div>
    <div class="mb-3">
      <div class="flex flex-col items-center gap-1 md:flex-row md:items-start">
        <Gts />
        <Aomsin />
      </div>
    </div>
    <div class="mb-3"><Yeegee /></div>
    <div class="mb-3"><Laos/></div>
    <div class="mb-3"><Vitenam /></div>
    <div class="mb-3"><Inter /></div>
    <div class="mb-3"><Share /></div>
    <div class="mb-3"><ShareVip /></div>
    <div class="mb-3"><YeegeeVip /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
