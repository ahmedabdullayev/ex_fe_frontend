import PostState from "@/types/PostState";
import Post from "@/types/Post";

export default {
    post: (state: PostState): Post[] =>{
        return state.post
    }
}