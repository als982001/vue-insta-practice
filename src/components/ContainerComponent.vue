<template>
  <div>
    <Post v-for="(item, index) in data" :key="index" :item="item" />
  </div>
</template>

<script>
import PostComponentVue from "./PostComponent.vue";

export default {
  name: "ContainerComponent",
  components: {
    Post: PostComponentVue,
  },
  props: {
    data: Array,
  },
};
</script>

<style></style>
