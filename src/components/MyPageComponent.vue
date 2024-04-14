<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">사용자명</span>
    </div>
    <div>
      <div>{{ followers }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "MyPageComponent",
  setup() {
    let followers = ref([]);

    onMounted(() => {
      axios.get("/followers.json").then((res) => {
        const { data } = res;
        followers.value = [...data];
      });
    });

    return { followers };
  },
};
</script>

<style></style>
