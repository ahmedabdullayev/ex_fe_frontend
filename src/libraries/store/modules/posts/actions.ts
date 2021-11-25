import axios, {AxiosResponse} from "axios";
import '@/types/PostState'
import '@/types/Post'
import Post from "@/types/Post";
import { Commit } from "vuex";

import PostState from "@/types/PostState";
export default {
    FETCH_POSTS({ commit }: { commit: Commit }, category: string){
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: "/postsbycategory/" + category,
            })
                .then((response: AxiosResponse)=>{
                    console.warn("here")
                    console.warn(response.data)
                    commit("setPost", response.data)
                    resolve(response)
                })
                .catch((err: any)=>{
                    reject(err)
                })
        })
    }
}