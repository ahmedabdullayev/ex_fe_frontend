<template>
<div>
<addPostForm></addPostForm>
</div>
</template>

<script>
import {defineComponent} from "vue";
import addPostForm from "../components/addPostForm";
export default defineComponent({
  name: "AddPosts",
  components: {addPostForm}
})
</script>

<style scoped>

</style>