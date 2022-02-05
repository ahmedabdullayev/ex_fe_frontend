<template id="addPostForm-component">
  <h1>Add post</h1>
  <div class="add_form">
    <form v-on:submit.prevent="submitForm">
      <p class="addpost_label">Choose a category for your post</p>
      <select v-model="form.categories_id" id="listOfCategories">
        <option v-for="(category) in categories" :key="category.id" v-bind:value="category.id" >{{category.name}}</option>
      </select>
      <input type="text" id="fname" name="firstname" placeholder="Text for post.." v-model="form.content">
      <div v-if="success">
        <div class="success-msg">
          <i class="fa fa-check"></i>
          Post was successfully added!
        </div>
      </div>
      <div v-if="errorArray.length">
        <div class="error-msg">
          <i class="fa fa-times-circle"></i>
          Error! Min length is 2 and max length is 140!
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
import Post from "@/types/Post";
export default defineComponent({
  name: "addPostForm",
  data(){
    return{
      errorArray: [] as string[],
      success: false as boolean,
      form: {} as Post, // form data
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
            this.errorArray = []
            this.success = true
          })
          .catch((error) =>{
            this.errorArray.push(error);
            this.success = false;
            console.warn(error)
          })
    },
  },
  async mounted() {
     await this.FETCH_CATEGORIES();
    this.form.categories_id = this.categories[0]['id']
    console.warn('mount')
  },


})
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
.addpost_label{
  text-align: left;
  margin-bottom: 0px;
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