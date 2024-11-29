import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function LoginPage(){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate  = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
            axios.post("", { // api tut
                UserName: login,
                Password: password
            })
                .then((response) => {
                    console.log(response)
                    sessionStorage.setItem('token', response.data.token)
                    sessionStorage.setItem('user', response.data.user.userName)
                    sessionStorage.setItem('valid', response.data.validToken)
                    Navigate("")// tut rout na zakazi
                }).catch(function (error){
                    if (error.response.status === 400){
                        alert("ты лох")
                    }
            });

    }
    return(
        <></>
    )
}

