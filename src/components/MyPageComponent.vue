<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">사용자명</span>
    </div>
    <div class="followers-wrapper">
      <div
        v-for="follower in followers"
        :key="follower.name"
        class="post-header"
      >
        <div
          class="profile"
          :style="{ backgroundImage: `url(${follower.image})` }"
        ></div>
        <div class="profile-name">{{ follower.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, toRefs } from "vue";

export default {
  name: "MyPageComponent",
  props: {
    step: Number,
  },
  setup(props) {
    let followers = ref([]);
    let { step } = toRefs(props);
    console.log(props);
    console.log(`step: ${step.value}`);

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

<style>
.followers-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid black;
  margin-top: 10px;
}
.follower-container {
  background-color: gray;
}
</style>
