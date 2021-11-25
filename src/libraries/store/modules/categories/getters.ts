import '@/types/CategoryState'
import '@/types/Categories'
import Categories from "@/types/Categories";
import CategoryState from "@/types/CategoryState";
export default {
    categories: (state: CategoryState): Categories[] => {
        return state.categories
    }
}