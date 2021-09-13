<template>
  <div class="PostsByCategories">
    <h1>Category: {{ $route.params.category }}</h1>
    <postsByCategories></postsByCategories>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import postsByCategories from "@/components/postsByCategories";
export default defineComponent({
  name: "CategoryPosts",
  components:{postsByCategories}

});
</script>

<style scoped>

</style>