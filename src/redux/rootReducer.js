import { combineReducers } from "redux"; // sranov menq miacnum enq 
//bolor reduserner@ mer komponentneri:
import {likesReducer} from './about/aboutReducer';

const rootReducer = combineReducers({ // aystex menq grelu enq mer bolor reducer-ner@
    text: likesReducer,
    likes: likesReducer,
    comments: likesReducer
    
})
export default rootReducer;
