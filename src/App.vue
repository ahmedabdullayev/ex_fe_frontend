<template>
  <categories :key="componentKey"></categories>

  <div id="nav">
    <router-link to="/">Categories</router-link> |
    <router-link to="/category/add">Add categories</router-link> |
    <router-link to="/post/add">Add post</router-link>
<!--<router-link :to="{ name: 'user', params: { username: 'Grefg' } }"> Greg</router-link>-->
  </div>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import categories from "@/components/categories.vue";
export default defineComponent({
  components: {categories},
  data() {
    return {
      componentKey: 0 as number,
    };
  },


  methods:{
    updateCount(){
      this.componentKey ++

    }
  },
  mounted() {
    // setInterval(() =>{
    //   this.updateCount()
    // }, 1000)
  },
  beforeCreate() {
    console.log('At this point, events and lifecycle have been initialized.')
  }

})
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
