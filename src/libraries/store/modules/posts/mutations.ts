import Post from '@/types/Post'
import PostState from "@/types/PostState";
export default {
    setPost(state: PostState, post: Post[]){
        state.post = post
    }
}