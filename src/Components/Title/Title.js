import { useDispatch, useSelector } from "react-redux";
// useDispatch ayn ogtagorcvelu e mapDispatchToProps funkciayi poxaren

//useSelector ogtagorcelu enq mapStateToProps funkciayi poxaren
import { inputText } from '../../redux/about/aboutActions';
import './Title.css'

function Title(props){
    console.log('props title>', props);
    const text = useSelector(state => {
        const {text} =state;
        return text.text;
    })
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        dispatch(inputText(e.target.value))//mer teqst@ reduserin poxancelu hamar
    }
    return (
        <div className="card-title">
            <div className="card-titel-top">
                <input className="inputtitel" type="text" onChange={handleChange}/>
            </div>

        </div>
    )
}

export default Title;