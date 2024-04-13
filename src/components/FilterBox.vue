<template>
  <!-- <div
    class="filter-item"
    :class="filter"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  ></div> -->
  <div
    :class="['filter-item', filter]"
    :style="{ backgroundImage: `url(${imageUrl})` }"
    @click="() => applyFilter(filter)"
  >
    <slot name="filterName"></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imageUrl: String,
    filter: String,
  },
  methods: {
    applyFilter(filter) {
      this.emitter.emit("applyFilter", filter);
    },
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
