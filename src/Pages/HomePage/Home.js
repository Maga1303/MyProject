import React, { useState } from "react";
import './Home.css'


const Home = () => {
    const [ pop, setPop ] = useState(false);
    const [menu, setMenu] = useState(false);
    const [item, setItem] = useState(false);
    console.log(pop,"pomn e");
    console.log(menu,"menu e");
    console.log(item,"item e");

    return (// qani vor 2-rd if else-i payman@ sxal e,ogtagorcum enq himnakanum && -i dzevov 
        <div className="a">
            <div >
                <div className="id" onClick={()=>setPop((e) => !e)} ></div>
               {pop && <a href="https://www.google.com" target="blank " id="b" >Ancient History of Perching birds</a>}
            </div>

            <div>
                <div className="p" onClick={()=>setMenu((d) => !d)} ></div>
                {menu ? <a href="https://www.google.com" target="blank" >Natural History Bird prints</a> : null}
            </div>
            <div id="e">
                <div className="u" onClick={()=>setItem((y)=> ! y)} ></div>
                    {item && <a href="https://www.google.com" target="blank">A Bird Story on Steam</a>}
            </div>
        </div>
    )
}
export default Home;