<template>
  <div>
    <div v-if="step === 0">
      <Post
        v-for="(item, index) in postData"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
    <div v-if="step === 1">
      <div
        :class="['upload-image', selectedFilter]"
        :style="{ backgroundImage: `url(${myImageUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="filter in filters"
          :key="filter"
          :filter="filter"
          :imageUrl="myImageUrl"
        >
          <template v-slot:filterName>{{ filter }}</template>
        </FilterBox>
      </div>
    </div>
    <div v-if="step === 2">
      <div
        :class="['upload-image', selectedFilter]"
        :style="{ backgroundImage: `url(${myImageUrl})` }"
      ></div>
      <div class="write">
        <textarea @input="writeContent" class="write-box"></textarea>
      </div>
    </div>
    <div v-if="step === 3">
      <MyPage :step="step" />
    </div>
  </div>
</template>

<script>
import PostComponentVue from "./PostComponent.vue";
import FilterBox from "./FilterBox.vue";
import MyPageComponent from "./MyPageComponent.vue";

export default {
  name: "ContainerComponent",
  components: {
    Post: PostComponentVue,
    FilterBox,
    MyPage: MyPageComponent,
  },
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  props: {
    postData: Array,
    step: Number,
    myImageUrl: String,
    myContent: String,
    selectedFilter: String,
  },
  methods: {
    writeContent(e) {
      this.$emit("writeContent", { myContent: e.target.value });
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}

.filters {
  overflow-x: scroll;
  white-space: nowrap;
}

.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}

.filters::-webkit-scrollbar {
  height: 5px;
}

.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
