<template id="categories-component">
<div>

  <div class="wrapper">
    <div class="a" v-for="category in categories" :key="category.id" >
      <h1>{{ category.name }}</h1>
    <router-link class="rout" :to="`/posts/${category.name}`">{{ category.name }}</router-link> |
    <router-link class="rout" :to="`/category/edit/${category.name}/${category.id}`">Edit</router-link>
    </div>
<!--    <input v-model="firstName" />-->
<!--    <input v-model="lastName" />-->
<!--    {{fullName}}-->
<!--    <HelloWorld msg="brat"></HelloWorld>-->
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Categories from "@/types/Categories"
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  name: "categories",
  props:{

  },
  data(){
    return{
      firstName: 'Foo' as string,
      lastName: 'Bar' as string,
      categs: [] as Categories[],
      init: false as boolean,
    }
  },
  computed: {
    fullName () {
      // `this` points to the vm instance
      //  this.FETCH_CATEGORIES();
      console.warn(this.firstName + " " + this.lastName)
      return this.firstName + " " + this.lastName
    },
    ...mapGetters('categories',[
        'categories'
    ])

  },
  methods:{
    ...mapActions('categories', [
        'FETCH_CATEGORIES'
    ]),

  },
  watch: {
    categories(newValue, oldValue){
      console.warn("WATHGFHH AFDDSDFFAAFDAFFDFDS")
      console.log(newValue)
      console.log(this.categories)
      this.categs = newValue
    }
  },
  async mounted() {
    await this.FETCH_CATEGORIES();
    this.categs = this.categories
    if(this.categs){
      this.init = true;
    }
  }


})
</script>

<style lang="less">
@desktop:   ~"only screen and (min-width: 501px) ";
@phone:    ~"only screen and (max-width: 500px)";

@borderColor: #4CAF50;

@media @phone {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 5px;
  }
}
@media @desktop {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 5px;
  }
}

.a {
  margin: 0 3px;
  color: #1195c9;
  border: 3px solid @borderColor;
  background: white;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
.rout {
  border: 5px solid @borderColor;
  background-color: #42b983;
  border-radius: 4px;
  color: white;

  position: relative;
  text-decoration: none;
}

.rout:hover {
  background-color: #227700;
}

.rout:active {
  box-shadow: none;
  top: 5px;
}
</style>