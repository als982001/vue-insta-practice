<template>
  <!-- <div
    class="filter-item"
    :class="filter"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  ></div> -->
  <div
    :class="['filter-item', filter]"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <slot name="filterName" :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imageUrl: String,
    filter: String,
  },
  data() {
    return {
      msg: "이 msg는 자식 컴포넌트로부터 온 것이다...",
    };
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
