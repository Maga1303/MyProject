
import { INPUT_TEXT , DECREMENT, INCREMENT, COMENT_CREATE, COMENT_DELETE} from "./aboutTypes";

export function inputText(text){
    return {
        type:INPUT_TEXT,
        text
    }     
}
export function incrementLikes(){
    return {
        type: INCREMENT
    }
}
export function decrementLikes(){
    return {
        type: DECREMENT
    }
}
export function comentCreate(text, id){
    return {
        type: COMENT_CREATE,
        data: {text, id}
    }
}
export function comentDelete(id){
    return {
        type: COMENT_DELETE,
        id
    }
}