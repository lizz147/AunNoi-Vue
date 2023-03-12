<script setup>
import Header from "../components/Home/Header.vue";
import Menu from "../components/Home/Menu.vue";
</script>
<template>
  <Header />
  <Menu />
  <div
    class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-6"
  >
    <router-link class="no-underline" to="/news/1">
      <div
        class="bg-slate-50 rounded-xl drop-shadow-lg hover:bg-slate-100 cursor-pointer"
      >
        <img
          class="h-56 object-cover rounded-xl rounded-b-none"
          src="../assets/carousel/s1.webp"
          alt="cover"
        />
        <div class="flex flex-col items-start flex-wrap p-6 pt-3 pb-12">
          <a href="#" class="mb-2 no-underline"
            >เว็บ แทง หวย มาแรง ทำเงินได้ชิวๆ ตลอดคืน</a
          >
          <p class="leading-snug mb-1">
            เว็บ แทง หวย อันดับ 1 เว็บยอดฮิตที่ติดตลาดมาอย่างยาวนาน
            มีสถานะทางการเงินที่มั่นคง รวบรวมทุกประเภทมาไว้ให้บริการมากที่สุดใน
          </p>
          <a href="#" class="no-underline text-sm mt-2">อ่านเพิ่มเเติม</a>
        </div>
      </div>
    </router-link>
  </div>
</template>
