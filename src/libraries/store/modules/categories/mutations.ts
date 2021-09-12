import '@/types/CategoryState'
export default {
    setAllCategories(state: CategoryState, categories: Categories[]){
        state.categories = categories
    }
}