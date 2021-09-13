<template id="editCategoryform-component">
  <h1>Edit "{{$route.params.category}}" category</h1>
  <div className="add_form">
    <form v-on:submit.prevent="submitForm">
      <input type="text" id="fname" placeholder="Category name.." v-model="form.name">

      <div v-if="form.success == true">
        <div class="success-msg">
          <i class="fa fa-check"></i>
          Category {{ $route.params.category }} was successfully edited!
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
  name: "editCategoryform",
  data() {
    return {
      form: {
        name: '',
        success: 'nothing',
        id: '',
      }
    }
  },
  methods: {
    submitForm() {
      this.form.id = this.$route.params.id;
         console.warn(this.form.id)
      axios.put('https://zufil.ee/blogger/public/category', this.form)
          .then((res) => {
            console.warn(res.data)
            this.form.success = true
          })
          .catch((error) => {
            this.form.success = false
            console.warn(error)
          })
    }
  },
  mounted() {
    console.warn('lol')
  }
})

</script>

<style lang="less">
</style>