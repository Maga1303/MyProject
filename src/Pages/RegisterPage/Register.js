import React from "react";
import ReactDom from "react-dom";
import {useForm} from "react-hook-form";
import './Register.css'

export default function App(){
    const {register, handleSubmit,
         formState: {errors}} = useForm();
         const onSubmit = (data) => console.log(data);
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder="First Name" {...register("First Name")} />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" {...register("Last Name")} />
                </div>
                <div>
                    <input type="email" placeholder="First Name" {...register("email")} />
                </div>
                <div>
                    <input type="password" placeholder="Your password" {...register("password")} />
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}