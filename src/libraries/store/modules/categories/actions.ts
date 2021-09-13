import axios from "axios";

export default {
    FETCH_CATEGORIES(context: any){
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: "http://127.0.0.1/categories",
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