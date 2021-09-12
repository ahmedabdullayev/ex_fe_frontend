<template>
  <div class="PostsByCategories">
<!--    <Categories></Categories>-->
<!--    <back></back>-->
<h1>Category: {{ $route.params.category }}</h1>

    <postsByCategories></postsByCategories>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import postsByCategories from "@/components/postsByCategories";
import back from "@/components/back";
export default defineComponent({
  name: "CategoryPosts",
  components:{postsByCategories}

});
</script>

<style scoped>

</style>