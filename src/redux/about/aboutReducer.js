import { DECREMENT, INCREMENT, INPUT_TEXT, COMENT_CREATE, COMENT_DELETE } from "./aboutTypes";

const initialState = {
    likes: 0,
    text: "",
    comments: []
}

export const likesReducer = (state = initialState, action) => { // cankacac reducer 
    // @ndunum e steyt@ etshn@ ev veradarnum steyt

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        case INPUT_TEXT:
            return {
                ...state, // katarum enq vichaki kopian 
                text: action.text // tarmacnum enq text-@ ...state, // katarum enq vichaki kopian 
            }
        case COMENT_CREATE:
            return{
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMENT_DELETE:
            return(()=>{
                const {id} = action;
                const {comments} = state;
                const itemIndex = comments.findIndex(res => res.id === id)

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex+ 1)
                ];
                return{
                    ...state,
                    comments: nextComments
                    // comments:[...state.comments, action.data]
                }
            })();

        default: return state;
    }

}