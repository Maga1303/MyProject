import { useEffect, useState } from "react"; // angam erb ga nor text, menq petq e texavorenq 
// popoxakani mej, dra hamar ogtagorccum enq hook-r@
import './SingleComments.css'
import {comentDelete} from '../../redux/about/aboutActions'
import {useDispatch} from 'react-redux';

function SingleComment({data}){// amen kometi hamar stanum enq teqst@ ev id 
    // console.log("single comment props >", props); 
    const [commentText, setTextComment] = useState('');
    const {text, id} = data;
    const dispatch = useDispatch();

    const handleUpdate = (e)=> {
        e.preventDefault();
        console.log('submit ->>', commentText);
    }
    const handleDelete = (e)=>{
        console.log("click>>");
        dispatch(comentDelete(id));
    }
    useEffect(()=>{// amen angam erb poxvi teqst@ ajn kavelacvi
        if(text){
            setTextComment(text);
        }
    },[text]);
    const hendleInput = (e)=>{ //aysinqn erb menq kgrenq inch-vor ban ,hin komentic heto
        // ayn aftomat poxancvelu e 2ntacik state, popoxakan commentText@
        setTextComment(e.target.value);

    }
    return (
        <form onSubmit={handleUpdate} className="comment-item">
            <span onClick={handleDelete} className="comment-item-delete">X</span>
            <input type="text" value={commentText} onChange={hendleInput} />
            <input type="submit" hidden />
        </form>
    )

}
export default SingleComment;

//erb menq grum enq koment ayn aftomat linum e render avelanum 
//popoxakan commentText-i mej
//hima uzum enq tarmacnel ,erb uzum enq mer koment@,
//usti form-i mej bacum enq onSubmit funkcian