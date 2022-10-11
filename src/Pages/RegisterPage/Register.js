// import React from "react";
// // import ReactDom from "react-dom";
// import {useForm} from "react-hook-form";
// import './Register.css'

// export default function App(){
//     const {register, handleSubmit,
//          formState: {errors}} = useForm();
//          const onSubmit = (data) => console.log(data);
//     return(
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <input type="text" placeholder="First Name" {...register("First Name")} />
//                 </div>
//                 <div>
//                     <input type="text" placeholder="Last Name" {...register("Last Name")} />
//                 </div>
//                 <div>
//                     <input type="email" placeholder="First Name" {...register("email")} />
//                 </div>
//                 <div>
//                     <input type="password" placeholder="Your password" {...register("password")} />
//                 </div>
//                 <input type="submit"/>
//             </form>
//         </div>
//     )
// }


import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React from "react";
import {useForm} from "react-hook-form"
import Input from '../../Components/Input/input';
import './Register.css'

// const Register = ()=>{
//     const {handleSubmit, control} = useForm();
//     const onSubmit = (data)=> console.log(data);
//     return (
//         <div className="formheader">
//             <form onSubmit={handleSubmit(onSubmit)} >
//                 <Input name="firstName" control={control} type="text" placeholder="first name" />
//                 <Input  name="lastName" control={control} type="text" placeholder="last Name" />
//                 <Input  name="email" control={control} type="email" placeholder="email"  />
//                 <Input name="password" control={control} type="password" placeholder="password" />
//                 <input type="submit" value={"Submit"} />
//             </form>
//         </div>
//     )
// }
// export default Register;

const imports = [
    {
        name: "firstName",
        type: "text",
        placeholder: "first name",
        id: 1
    },
    {
        name: "lasttName",
        type: "text",
        placeholder: "last name",
        id: 2
    },
    {
        name: "email",
        type: "email",
        placeholder: "email",
        id: 3
    },
    {
        name: "password",
        type: "password",
        placeholder: "password",
        id: 4
    },
]

const Register = ()=>{
    const {handleSubmit, control} = useForm();
    const onSubmit = (data)=> console.log(data);
    return (
        <div className="formheader">
            <form onSubmit={handleSubmit(onSubmit)} >
                {imports.map((e)=>(
                    <Input key={e.id} name={e.name} control={control} type={e.type} placeholder={e.placeholder}/>
                ))}
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
}
export default Register;