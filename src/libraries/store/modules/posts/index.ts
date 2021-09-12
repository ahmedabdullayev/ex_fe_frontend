import getters from "@/libraries/store/modules/posts/getters";
import mutations from "@/libraries/store/modules/posts/mutations";
import actions from "@/libraries/store/modules/posts/actions";
import '@/types/PostState'

export default {
    namespaced: true,
    state: <PostState>{},
    getters,
    mutations,
    actions
}