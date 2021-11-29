<template id="addPostForm-component">
  <h1>Add a post</h1>


  <div class="add_form">
    <form v-on:submit.prevent="submitForm">
      <select v-model="form.categories_id" id="listOfCategories">
        <option v-for="(category) in categs" :key="category.id" v-bind:value="category.id" >{{category.name}}</option>
      </select>
      <input type="text" id="fname" name="firstname" placeholder="Post a content.." v-model="form.content">
      <div v-if="form.success == true">
        <div class="success-msg">
          <i class="fa fa-check"></i>
          Post was successfully added!
        </div>
      </div>
      <div v-if="form.success == false">
        <div class="error-msg">
          <i class="fa fa-times-circle"></i>
          Error! Min length is 2 and max length is 140!
        </div>
      </div>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import $ from 'jquery'
import axios from "axios";
import {mapActions, mapGetters} from "vuex";
export default defineComponent({
  name: "addPostForm",
  data(){
    return{
      init: '',
      categs: '',
      form: {
        content: '',
        categories_id: '',
        success: 'nothing',
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
      axios.post('/post/create', this.form)
          .then((res) =>{
            console.warn(res.data)
            this.form.success = true
          })
          .catch((error) =>{
            this.form.success = false
            console.warn(error)
          })
    },
    async selectFirst(){
      console.warn('loler')
      document.getElementById("listOfCategories").selectedIndex = "0";
    },
  },
  async mounted() {
     await this.FETCH_CATEGORIES();
    this.categs = this.categories
    this.form.categories_id = this.categs[0]['id']
   /// this.form.category_id = this.categs[0]
     console.warn('mount')
    this.selectFirst()
    // if(this.categs != ''){
    //   this.init = true;
    // }
  },


})
document.addEventListener("onunload", function(){
  console.warn(';erere')
  document.getElementById("listOfCategories").selectedIndex = "0";
});
</script>

<style lang="less">
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');
@color: white;
.success-msg{
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  color: #270;
  background-color: #DFF2BF;
}
body {
  background-color: @color;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.add_form{
  display: inline-block;
  width: 50%;
}
input[type=submit] {
  width: 100%;
  background-color: #42b983;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}


</style>