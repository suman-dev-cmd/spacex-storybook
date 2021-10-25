import { Provider } from "react-redux";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import spaceSlice from "../../state/slice/spaceSlice";
const rootReducer = combineReducers({
    spacex: spaceSlice,
   
})
const store = configureStore({
    reducer:rootReducer
})
export function withReduxToolKitStore({Story}:any){
    return(
        <Provider store={store}>
         <Story />
        </Provider>
    )
}

export default withReduxToolKitStore
