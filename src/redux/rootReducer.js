import {combineReducers} from 'redux'
import repositorieReducer from './repositories/repositories.reducer'
const rootReducer = combineReducers({
    articles: repositorieReducer
})
export default rootReducer;