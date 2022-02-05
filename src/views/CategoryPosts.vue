<template>
  <div class="PostsByCategories">
    <h1>Category: {{ $route.params.category }}</h1>
    <postsByCategories :categoryProp="$route.params.category" :parentMethod="parentMethodTest"></postsByCategories>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import postsByCategories from "@/components/postsByCategories.vue";
import {mapActions} from "vuex";
export default defineComponent({
  name: "CategoryPosts",
  components:{postsByCategories},
  methods:{
    parentMethodTest () : void{
      console.log("deleted")
    }
  },
});
</script>

<style scoped>

</style>