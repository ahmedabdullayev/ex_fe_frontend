import Categories from "@/types/Categories";
import CategoryState from "@/types/CategoryState";
import _ from 'lodash';
export default {
    setAllCategories(state: CategoryState, categories: Categories[]){
        state.categories = categories
    },
    deleteCategory(state: CategoryState, categories: Categories){
        _.remove(state.categories, {id: categories.id})
        console.warn(state.categories)
    },
    addToCategory(state: CategoryState, categories: Categories){
        state.categories.push(categories);
    }
}