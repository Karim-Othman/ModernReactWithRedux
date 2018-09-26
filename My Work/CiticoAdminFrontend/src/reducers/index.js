import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CategoriesReducer from './categories-reducer';
import ViewCategoryReducer from './ViewCategory-reducer'

const rootReducer = combineReducers({
  form: formReducer,
  categories: CategoriesReducer,
  category: ViewCategoryReducer
});

export default rootReducer;
