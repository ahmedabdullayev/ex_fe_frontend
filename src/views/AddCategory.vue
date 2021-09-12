<template>



  <!--  <form-compnent></form-compnent>-->

  <addCategoryform v-if="$route.params.query == 'add'"></addCategoryform>
  <editCategoryform v-if="$route.params.id" :tesvar='hi'></editCategoryform>
</template>

<script>
import {defineComponent} from "vue";
import addCategoryform from "@/components/addCategoryform";
import editCategoryform from "@/components/editCategoryform";
export default defineComponent({
  name: "AddCategory",
  components: {addCategoryform, editCategoryform}
})
</script>

<style>

</style>