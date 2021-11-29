import axios from "axios";

export default {
    FETCH_CATEGORIES(context: any){
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: "/categories",
            })
                .then((response: any)=>{
                    console.warn(response)
                    context.commit("setAllCategories", response.data)
                    resolve(response)
                })
                .catch((err: any)=>{
                    reject(err)
                })
        })
    }
}