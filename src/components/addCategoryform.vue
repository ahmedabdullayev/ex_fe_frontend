<template id="addCategoryform-component">
  <h1>Add a category</h1>

  <div class="add_form">
  <form v-on:submit.prevent="submitForm">
    <input type="text" id="fname" name="firstname" placeholder="Category name.." v-model="form.name">
    <div v-if="form.success">
    <div class="success-msg">
      <i class="fa fa-check"></i>
      Category {{form.name}} was successfully added!
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
export default defineComponent({
  name: "addCategoryform",
  data(){
    return{
      form: {
        name: '',
        success: false,
      }
    }
  },
  methods: {
    submitForm(){
      axios.post('http://127.0.0.1/category', this.form)
      .then((res) =>{
        console.warn(res.data)
        this.form.success = true
      })
      .catch((error) =>{
        console.warn(error)
      })
    }
  }
})

</script>

<style lang="less">
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');

.success-msg{
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  color: #270;
  background-color: #DFF2BF;
}
@color: white;
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
  background-color: #4CAF50;
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