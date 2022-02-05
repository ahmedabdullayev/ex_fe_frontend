<template id="addCategoryform-component">
  <h1>Add a category</h1>
  <div class="add_form">
  <form v-on:submit.prevent="submitForm">
    <input type="text" id="fname" name="firstname" placeholder="Category name.." v-model="form.name">
    <div v-if="success">
    <div class="success-msg">
      <i class="fa fa-check"></i>
      Category {{form.name}} was successfully added!
    </div>
    </div>
    <div v-if="errorArray.length">
      <div class="error-msg">
        <i class="fa fa-times-circle"></i>
        Error! Max length is 15 and min is 3!Also categories names should be different!
      </div>
    </div>
    <input type="submit" value="Submit">
  </form>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import {mapActions, mapGetters} from "vuex";
import Categories from "@/types/Categories"
export default defineComponent({
  name: "addCategoryform",
  components:{},
  data(){
    return{
      errorArray: [] as string[],
      success: false as boolean,
      form: {} as Categories // for the form
    }
  },
  computed: {
    ...mapGetters('categories',[
      'categories'
    ]),
  },
  methods: {
    ...mapActions('categories', [
      'FETCH_CATEGORIES',
    ]),

    submitForm(){
      axios.post('/category', this.form)
      .then(async (res) => {
        this.errorArray = []
        this.success = true
        console.warn(res)
      })
      .catch((error) =>{
        this.errorArray.push(error);
        this.success = false;
        console.warn(error)
      })
    },
  },
  mounted() {
    console.warn(this.success)
  }
})

</script>

<style lang="less" scoped>
</style>