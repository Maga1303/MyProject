import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux" //ays komponet@ kmiacni mer redux-@ react-i naxadryalnerin
// ev chi entarki popoxutyan
import {store} from './redux/store' //import enq arel store-@ store.js-ic:

const container =document.getElementById('root');

const root = ReactDOM.createRoot(container);
//patatum enq mer naxadryalner@ Provider-i mej ev poxancum enq stor@` pahestanoc@
root.render(
<Provider store={store}>
   <App />
</Provider>
   
);


