<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${item.userImage})` }"
      ></div>
      <span class="profile-name">{{ item.name }}</span>
    </div>
    <div
      :class="['post-body', item.filter]"
      :style="{ backgroundImage: 'url(' + item.postImage + ')' }"
      @click="handleLikeMutation({ index })"
    ></div>

    <div class="post-content">
      <p>{{ item.likes }} Likes</p>
      <p>
        <strong>{{ item.name }}</strong> {{ item.content }}
      </p>
      <p class="date">{{ item.date }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PostComponent",
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    ...mapMutations({
      handleLikeMutation: "handleLike", // handleLikeMutation이라는 이름으로 뮤테이션을 사용할 수 있게 함
    }),
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
