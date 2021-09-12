<template >
  <div class="page">
    <!--    <ul>-->
    <!--&lt;!&ndash;      <h1 v-on:click="tester">click</h1>&ndash;&gt;-->
    <!--      {{this.posts}}-->
    <!--      <li v-for="post in posts" :key="post.id">-->
    <!--        -->
    <!--        <h1>Post #{{post.id}}</h1>-->
    <!--        <p>{{post.content}}</p>-->
    <!--        <button v-on:click="deletePost(post.id)">Delete</button>-->
    <!--      </li>-->
    <!--    </ul>-->
    <div class="archive" v-for="post in posts" :key="post.id">
      <article class="article"><h2>Post #{{post.id}}</h2>
        <!-- content -->
        <p>{{post.content}}</p>


        <button class="button button5" v-on:click="deletePost(post.id)">Delete</button>
        <hr>
        <hr>
      </article>
    </div>

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
  },

})
</script>

<style>


hr { /*dummy content*/
  height: 6px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
}

hr:last-child {  /*dummy content*/
  margin-right: 60%;
}

hr.image { /*dummy content*/
  padding-bottom: 50%;
}

.page {
  padding: 2em;
  text-align: center;
  background: #cecece;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.archive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1em;
}

.article {
  padding: 1em;
  background: #fff;
  box-shadow:
      0 5px 10px rgba(0, 0, 0, 0.1),
      0 20px 20px rgba(0, 0, 0, 0.05);
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
}

.button5 {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}

.button5:hover {
  background-color: #555555;
  color: white;
}
</style>