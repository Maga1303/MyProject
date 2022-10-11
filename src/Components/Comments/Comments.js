import { useState } from "react"; // vorpeszi stananq defold vichak
import SingleComment from '../../Components/SingleComments/SingleComments'; //import aneluc
// heto mer komponent@ texapoxum enq app.js
import { comentCreate } from '../../redux/about/aboutActions';
import { useDispatch, useSelector } from "react-redux";
import uniqid from  'uniqid';// yurahatuk id e talis
// import {comments} from '../../redux/about/reducer';
import './Comments.css'

function Components(props){
    const [textComment, setTextComment] = useState('');
    // console.log("comment props >", state);
    const comments = useSelector(state =>{
        // console.log('redux state >', state);
        const {comments} = state;
        return comments.comments // aystexov arden kpahpani bolor komentner@
    });
    console.log('comments >', comments);

    const dispatch = useDispatch();

    const hendleInput = (e) =>{
        // console.log("inpt >>>", e.target.value);
        setTextComment(e.target.value);
    }
    const handeleSubmit = (e)=>{// submiti jamanak menq form-@ amen angam talis enq default-ayin vichak@
        e.preventDefault();//dra hamar e 
        // console.log('textComment>>>', textComment);//uxarkum enq textComment -i vichak@ 
        const id = uniqid();
        dispatch(comentCreate(textComment, id));
        setTextComment(e.target.value="");

    }
    return (
        <div className="card-comments">
            <form onSubmit={handeleSubmit} className="commet-item-create">
                <input type="text" className="card-input" value={textComment} onChange={hendleInput} />
                <input type="submit" hidden/>
            </form>
            {!!comments.length && comments.map(res=>{
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )

}
export default Components;

// velyun talis enq skzbnakan arjeq@
//hendlesubmit-um dispatch enq anum mer eqshn@ ev poxancum tvyalner@,dranq en henc qomentner@ ev id
//input-neric heto avelacnum enq mer komentner@, vorpeszi tesnenq ekranin 
//aynuhetev gnum enq SingleComment render enq anum mi arandzin koment@