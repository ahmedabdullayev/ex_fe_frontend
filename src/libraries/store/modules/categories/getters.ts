import '@/types/CategoryState'
import '@/types/Categories'
export default {
    categories: (state: CategoryState): Categories[] => {
        return state.categories
    }
}