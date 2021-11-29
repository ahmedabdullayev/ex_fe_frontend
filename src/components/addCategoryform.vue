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
      form: {
        name: '',
        success: 'nothing' as unknown as boolean,
        cats: [] as Categories[]
      }
    }
  },
  computed: {
    ...mapGetters('categories',[
      'categories'
    ]),
  },
  methods: {
    ...mapActions('categories', [
      'FETCH_CATEGORIES'
    ]),

    submitForm(){
      axios.post('/category', this.form)
      .then(async (res) => {
         await this.FETCH_CATEGORIES()
        console.warn(res)
        // this.categories()
       // await this.getDatas()
        this.form.success = true
      })
      .catch((error) =>{
        this.form.success = false
        console.warn(error)
      })
    },
    async getDatas(){
      this.form.cats = this.categories
      console.log(this.form.cats)
    }
  },
  mounted() {
    console.warn(this.form.success)
  }
})

</script>

<style lang="less">
</style>