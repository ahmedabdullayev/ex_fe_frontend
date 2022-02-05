<template id="editCategoryform-component">
  <h1>Edit "{{$route.params.category}}" category</h1>
  <div className="add_form">
    <form v-on:submit.prevent="submitForm">
      <input type="text" id="fname" placeholder="Category name.." v-model="form.name">

      <div v-if="success">
        <div class="success-msg">
          <i class="fa fa-check"></i>
          Category {{ $route.params.category }} was successfully edited!
        </div>
      </div>
      <div v-if="errorArray.length">
        <div class="error-msg">
          <i class="fa fa-times-circle"></i>
          Error! Max length is 15 and min is 3! Also could be same category name!
        </div>
      </div>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import Categories from "@/types/Categories";
export default defineComponent({
  name: "editCategoryform",
  data() {
    return {
      errorArray: [] as string[],
      success: false as boolean,
      form: {} as Categories // form data
    }
  },
  methods: {
    submitForm() {
      this.form.id = Number.parseInt(String(this.$route.params.id)); // params.id has type of string[] | string
      axios.put('/category', this.form)
      .then((res) => {
        console.warn(res.data)
        this.errorArray = []
        this.success = true
      })
      .catch((error) => {
        this.errorArray.push(error);
        this.success = false;
        console.warn(error)
      })
    }
  },

})

</script>

<style lang="less" scoped>
</style>