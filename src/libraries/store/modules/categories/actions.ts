import axios from "axios";

export default {
    FETCH_CATEGORIES(context: any){
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: "https://zufil.ee/blogger/public/categories",
            })
                .then((response: any)=>{
                    console.warn(response.data)
                    context.commit("setAllCategories", response.data)
                    resolve(response)
                })
                .catch((err: any)=>{
                    reject(err)
                })
        })
    }
}