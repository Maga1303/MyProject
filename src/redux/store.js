import {createStore, applyMiddleware} from "redux";
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware) // ev petq e poxancel @ndhanur reduser-@
//Stexcecinq mer pahestanoc@