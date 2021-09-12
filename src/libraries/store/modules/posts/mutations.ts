import '@/types/PostState'
import '@/types/Post'
export default {
    setPost(state: PostState, post: Post[]){
        state.post = post
    }
}