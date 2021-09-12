<template id="postsByCategories-component">
  <div>
    <ul>
<!--      <h1 v-on:click="tester">click</h1>-->
      {{this.posts}}
      <li v-for="post in posts" :key="post.id">
        <h1>Post #{{post.id}}</h1>
        <p>{{post.content}}</p>
        <button v-on:click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { mapGetters, mapActions, mapMutations } from 'vuex';
import axios from "axios";
export default defineComponent({
  name: "postsByCategories",
  props:{

  },
  data(){
    return{
      posts: '',
      cat: '',
      init: false,
      update: true,
    }
  },
  computed: {
    ...mapGetters('categories',[
      'categories'
    ]),
    ...mapGetters('post',[
        'post'
    ])
  },
  watch : {
    see: function (){
      console.warn('doing')
    }
  },
  methods:{
    ...mapActions('categories', [
      'FETCH_CATEGORIES'
    ]),
    ...mapActions('post', [
        'FETCH_POSTS'
    ]),
    async getAll(){
      this.cat = this.$route.params.category
      console.warn(this.cat)
      await this.FETCH_POSTS(this.cat);
      this.posts = this.post
    },
    deletePost(id){
      //this.posts = ''
      axios.delete('http://127.0.0.1/delete/post/' + id)
          .then((res) => {
            for(let i =0; i < this.posts.length; i++){
              if(this.posts[i]['id'] == id){
                this.posts.splice(i, 1);
              }
            }
            console.warn(res.data)
          })
          .catch((error) => {
            console.warn(error)
          })

    }
  },

  async mounted() {
    await this.getAll()
    //console.warn(this.posts[0]['id'])
  },
  // async updated() {
  //   // if(this.update == true) {
  //   //   console.warn('updated')
  //   //   await this.FETCH_POSTS(this.cat);
  //   //   this.posts = this.post
  //   //   // console.warn(this.cat)
  //   //   console.warn(this.posts)
  //   //   this.update = true
  //   // }else{
  //   //   this.update = true
  //   // }
  //
  // },

})
</script>

<style scoped>

</style>