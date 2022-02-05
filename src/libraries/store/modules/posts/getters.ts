import PostState from "@/types/PostState";
import Post from "@/types/Post";
import _ from "lodash";

export default {
    filteredPost: (state: PostState) => (word: string) : Post[] =>{
        return _.values(_.pickBy(state.post, article => article.content.toLocaleLowerCase().includes(word.toLowerCase())));
    },
    post: (state: PostState) : Post[] => {
        return state.post;
    }
}