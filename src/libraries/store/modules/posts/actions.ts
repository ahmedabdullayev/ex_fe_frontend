import axios from "axios";

export default {
    FETCH_POSTS(context: any, category: string){
        return new Promise((resolve, reject)=>{
            axios({
                method: 'get',
                url: "http://127.0.0.1/postsbycategory/" + category,
            })
                .then((response: any)=>{
                    console.warn(response.data)
                    context.commit("setPost", response.data)
                    resolve(response)
                })
                .catch((err: any)=>{
                    reject(err)
                })
        })
    }
}