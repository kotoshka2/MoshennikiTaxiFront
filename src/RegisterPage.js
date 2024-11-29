import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
export default function RegisterForm() {
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();

        axios.post(" ", { // tut api
            UserName: login,
            Password: password,
            Email: email,
            Role: 'user'
        })
            .then((response) => {
                console.log(response)
                Navigate("") // tut route na zakazi
            }).catch(function (error){
            if (error.response.status === 400){
                alert("ты лох")
            }
        });

        return(
            <></>
        )
    }
}