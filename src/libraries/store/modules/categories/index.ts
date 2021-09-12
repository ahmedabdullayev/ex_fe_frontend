import getters from "@/libraries/store/modules/categories/getters";
import mutations from "@/libraries/store/modules/categories/mutations";
import actions from "@/libraries/store/modules/categories/actions";
import '@/types/CategoryState'

export default {
    namespaced: true,
    state: <CategoryState>{},
    getters,
    mutations,
    actions
}