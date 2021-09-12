<template id="categories-component">
<div>

  <div v-if="init">
<!--    <li v-for="category in categs" :key="category.id" >-->
<!--    <router-link :to="{ name: 'user', params: { username: category.name  } }"> Greg</router-link>-->
<!--    </li>-->
<!--    <router-link v-for="route in categs" :key="route.id" :to="route.name">-->
<!--      {{route.name}}-->
<!--    </router-link>-->
    <li v-for="category in categs" :key="category.id" >
    <router-link :to="`/posts/${category.name}`">{{ category.name }}</router-link> |
    <router-link :to="`/category/edit/${category.name}/${category.id}`">Edit</router-link>
    </li>

    <!--  <li v-for="category in categs" :key="category.id" >-->
<!--    <router-link :to="{ name: 'posts', params: {id: category.name} }" > {{category.name}}</router-link>-->
<!--  </li>-->
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

<style scoped>

</style>