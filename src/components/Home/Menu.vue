<template>
  <div class="bg-gray-900 py-5">
    <ul class="flex flex-row justify-center">
      <li class="text-xs lg:text-base mx-2" v-for="item in items">
        <router-link
          class="text-white no-underline hover:text-orange-700 transition-all duration-200"
          :to="item.link"
          >{{ item.message }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          message: "หน้าแรก",
          link: "/",
        },
        {
          message: "อัตราจ่าย",
          link: "/payrate",
        },
        {
          message: "ข่าวสาร",
          link: "/news",
        },
        {
          message: "ติดต่อเรา",
          link: "/contact",
        },
        {
          message: "กฎและกติกา",
          link: "/rule",
        },
      ],
    };
  },
};
</script>
