<template>
  <div class="right-list">
    <h4>{{rightTitle}}</h4>
    <div class="house-list">

    </div>
  </div>
</template>

<script>
export default {
  name: 'rightList',
  props: {
    rightTitle: {
        type :String,
        required: true,
    }
  },
  data() {
    return {};
  }
};
</script>

<style  lang='scss' scoped>
</style>