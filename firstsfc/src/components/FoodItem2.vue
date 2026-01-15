FoodItem.vue
 
<template>
  <div class="tangerine">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Tangerine',
      message: 'I like tangerines'
    }
  }
};
</script>
 
<style></style>

<style>
  .tangerine {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: orange;
  }
</style> 