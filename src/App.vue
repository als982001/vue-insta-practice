<template>
  <div class="header">
    <div>
      {{ testString }}
    </div>
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish()">발행</li>
    </ul>
    <img @click="() => (step = 3)" src="./assets/logo.png" class="logo" />
  </div>

  <div :style="{ backgroundColor: 'pink', display: 'flex', width: '100%' }">
    <button
      :style="{
        flex: '1 0 0',
        backgroundColor: step === 0 ? 'black' : 'white',
        color: step === 0 ? 'white' : 'black',
        height: '32px',
      }"
      @click="step = 0"
    >
      게시물
    </button>
    <button
      :style="{
        flex: '1 0 0',
        backgroundColor: step === 1 ? 'black' : 'white',
        color: step === 1 ? 'white' : 'black',
        height: '32px',
      }"
      @click="step = 1"
    >
      필터
    </button>
    <button
      :style="{
        flex: '1 0 0',
        backgroundColor: step === 2 ? 'black' : 'white',
        color: step === 2 ? 'white' : 'black',
        height: '32px',
      }"
      @click="step = 2"
    >
      글쓰기
    </button>
  </div>

  <Container
    :postData="postData"
    :step="step"
    :myImageUrl="myImageUrl"
    :myContent="myContent"
    :selectedFilter="selectedFilter"
    @writeContent="this.myContent = $event.myContent"
  />

  <button @click="showMore()">더 보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="uploadImage" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerComponentVue from "./components/ContainerComponent.vue";
import store from "./store";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Container: ContainerComponentVue,
  },
  computed: {
    postData() {
      return this.$store.state.data;
    },
    ...mapState(["testString", "moreDataIndex"]),
  },
  data() {
    return {
      step: 0,
      myImageUrl: "",
      myContent: "",
      selectedFilter: "",
    };
  },
  methods: {
    showMore() {
      store.dispatch("getData");
    },
    uploadImage(e) {
      let { files } = e.target;
      let url = URL.createObjectURL(files[0]);
      this.myImageUrl = url;
      this.step++;
    },
    publish() {
      const myPost = {
        name: "user",
        userImage: "",
        postImage: this.myImageUrl,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.myContent,
        filter: this.selectedFilter,
      };

      this.postData.unshift(myPost);
      this.step = 0;
    },
  },
  mounted() {
    this.emitter.on("applyFilter", (selectedFilter) => {
      this.selectedFilter = selectedFilter;
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
