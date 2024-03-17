<template>
  <div>
    <Post v-for="(item, index) in postData" :key="index" :item="item" />
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
    postData: Array,
  },
};
</script>

<style></style>
