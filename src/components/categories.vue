<template id="categories-component">
<div>

  <div v-if="init">
  <div class="wrapper">
    <div class="a" v-for="category in categs" :key="category.id" >
    <router-link  :to="`/posts/${category.name}`">{{ category.name }}</router-link> |
    <router-link  :to="`/category/edit/${category.name}/${category.id}`">Edit</router-link>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import {defineComponent} from "vue";
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default defineComponent({
  name: "categories",
  props:{

  },
  data(){
    return{
      categs: '',
      init: false
    }
  },
  computed: {
    ...mapGetters('categories',[
        'categories'
    ])
  },
  methods:{
    ...mapActions('categories', [
        'FETCH_CATEGORIES'
    ])
  },
  async mounted() {
    await this.FETCH_CATEGORIES();
    this.categs = this.categories
    if(this.categs != ''){
      this.init = true;
    }
  }

})
</script>

<style>



.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 5px;
}



.a {
  margin: 0 3px;
  color: #1195c9;
  border: 3px solid #4CAF50;
  background: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>