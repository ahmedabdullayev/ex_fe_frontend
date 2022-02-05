import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import Categories from "@/types/Categories";
import {Commit} from "vuex";

export default {
    FETCH_CATEGORIES({ commit }: { commit: Commit }) : Promise<Categories[]>{
        return new Promise<Categories[]>((resolve , reject)=>{
            axios({
                method: 'get',
                url: "/categories",
            })
                .then((response: AxiosResponse)=>{
                    console.warn(response)
                    commit("setAllCategories", response.data)
                    return resolve(<Categories[]>response.data)
                })
                .catch((err: Error)=>{
                    reject(err)
                })
        })
    },
    DELETE_CATEGORY(context: any, category: Categories){
      context.commit('deleteCategory', category);
    },
    ADD_CATEGORY(context: any, category: Categories){
        context.commit('addToCategory', category);
    }
}