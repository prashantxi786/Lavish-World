import {
    legacy_CreateStore,combineReducer,compose,applyMiddleware
} from "redux";
import thunk from "redux-thunk";

const rootReducer=combine({
    auth:authReducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_CreateStore(
    rootReducer,composeEnhancer(applyMiddleware(thunk))
)