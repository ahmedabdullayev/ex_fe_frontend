<template>
<div>Categories</div>
  <Categories></Categories>
</template>

<script>
import {defineComponent} from "vue";
import Categories from "@/components/categories";
export default defineComponent({
  name: "Index",
  components: {Categories}
})
</script>

<style scoped>

</style>