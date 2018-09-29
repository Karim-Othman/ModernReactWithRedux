import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CategoriesReducer from './categories-reducer';
import ViewCategoryReducer from './ViewCategory-reducer';
import CategoriesSearchBarReducer from './CategoriesSearchBar-reducer';
import PackagesSearchBarReducer from './PackagesSearchBar-reducer';
const rootReducer = combineReducers({
  form: formReducer,
  categories: CategoriesReducer,
  category: ViewCategoryReducer,
  searchBarCategories: CategoriesSearchBarReducer,
  searchBarPackages:PackagesSearchBarReducer,
});

export default rootReducer;
