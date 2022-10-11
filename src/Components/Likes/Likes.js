import {connect} from "react-redux";
import './Likes.css';
import {decrementLikes, incrementLikes} from '../../redux/about/aboutActions';


function Likes(props){
    console.log("render>", props);
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤️{props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}
function mapStateToProps(state){
    const {likes} = state;
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: ()=> dispatch(incrementLikes()),
        onDecrementLikes: ()=> dispatch(decrementLikes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes);

//ajspes stanum enq mer funkcianer@ mapDispachToProps
//aystex miacnum enq mer komponet@ redux-in hatuk funkciayov connect
//ogtagorcum enq hatuk funkcia mapStateToprops, vorpeszi karoxananq uxxarkel mer pahestic redux-i 
//mer komponentin
//nuyn@ anum enq mer metodneri het ev ogtagorcum mapDispatchToProps


