<template id="addCategoryform-component">
  <h1>Add a category</h1>

  <div class="add_form">
  <form v-on:submit.prevent="submitForm">
    <input type="text" id="fname" name="firstname" placeholder="Category name.." v-model="form.name">
    <div v-if="form.success == true">
    <div class="success-msg">
      <i class="fa fa-check"></i>
      Category {{form.name}} was successfully added!
    </div>
    </div>
    <div v-if="form.success == false">
      <div class="error-msg">
        <i class="fa fa-times-circle"></i>
        Error! Max length is 15 and min is 3! Also could be same category name!
      </div>
    </div>
    <input type="submit" value="Submit">
  </form>
</div>
</template>

<script>
import {defineComponent} from "vue";
import axios from "axios";
import css from '@/assets/category-style.less'
export default defineComponent({
  name: "addCategoryform",
  data(){
    return{
      form: {
        name: '',
        success: 'nothing',
      }
    }
  },
  methods: {
    submitForm(){
      axios.post('https://zufil.ee/blogger/public/category', this.form)
      .then((res) =>{
        console.warn(res.data)
        this.form.success = true
      })
      .catch((error) =>{
        this.form.success = false
        console.warn(error)
      })
    }
  },
  mounted() {
    console.warn(this.form.success)
  }
})

</script>

<style lang="less">
</style>