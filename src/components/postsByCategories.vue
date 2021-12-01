<template >
  <div class="page">
    <template v-if="init">
    <template v-if="!post || !post.length">
      <h1>No posts for this category</h1>
    </template>
    <template v-else>
    <div class="archive" v-for="pos in post" :key="pos.id">
      <article class="article"><h2>Post #{{pos.id}}</h2>
        <p>{{pos.content}}</p>
        <button class="button button5" v-on:click="deletePost(pos.id)">Delete</button>
        <hr>
        <hr>
      </article>
    </div>
    </template>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mapGetters, mapActions, mapMutations } from 'vuex';
import axios from "axios";
import Post from '@/types/Post'

export default defineComponent({
  name: "postsByCategories",
  props:{

  },
  data(){
    return{
      posts: [] as Post[],
      cat: '' as string,
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
      this.cat = this.$route.params.category as string
      console.warn(this.cat)
      await this.FETCH_POSTS(this.cat);
      this.posts = this.post
    },
    deletePost(id : any){
      //this.posts = ''
      axios.delete('delete/post/' + id)
          .then(async (res) => {
            await this.FETCH_POSTS(this.cat);
            // if we use computed, dont even need code bellow
            // for(let i =0; i < this.posts.length; i++){
            //   if(this.posts[i]['id'] == id){
            //     this.posts.splice(i, 1);
            //   }
            // }
            console.warn(res.data)
          })
          .catch((error) => {
            console.warn(error)
          })

    }
  },

  async mounted() {
    await this.getAll()
    this.init = true
  },

})
</script>

<style lang="less">
@desktop:   ~"only screen and (min-width: 501px) ";
@phone:    ~"only screen and (max-width: 500px)";

@mainColor: #42b983;
@whiteColor: #fff;
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

@media @phone {
  .page {
    padding: 1em;
    border-radius: 5px;
    text-align: center;
    background: @mainColor;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
@media @desktop {
  .page {
    padding: 1.5em;
    border-radius: 5px;
    text-align: center;
    background: @mainColor;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
}


.archive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1em;
}

.article {
  padding: 1em;
  background: @whiteColor;
  box-shadow:
      0 5px 10px rgba(0, 0, 0, 0.1),
      0 20px 20px rgba(0, 0, 0, 0.05);
}
.button {
  background-color: @mainColor; /* Green */
  border: none;
  color: @whiteColor;
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
  background-color: @whiteColor;
  color: black;
  border: 2px solid @mainColor;
}

.button5:hover {
  background-color: @mainColor;
  color: @whiteColor;
}
</style>