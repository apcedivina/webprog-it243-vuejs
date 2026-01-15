FoodItem.vue
 
<template>
  <div class="durian">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Durian',
      message: 'I like durian'
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
    background-color: green;
  }
</style> 