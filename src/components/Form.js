import React from 'react'

const Form = (props) =>{
    const{inputs, setInputs} = props

    const onchange = e =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })     
    }
    return(
        <form>
            <label htmlFor="firstName">First Name</label>
            <input onChange={onchange} type="text" name="firstName"/><br/>

            <label htmlFor="lastName">Last Name</label>
            <input onChange={onchange} type="text" name="lastName"/><br/>

            <label htmlFor="email">Email</label>
            <input onChange={onchange} type="email" name="email"/><br/>

            <label htmlFor="password">Password</label>
            <input onChange={onchange} type="password" name="password"/><br/>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onchange} type="password" name="confirmPassword"/><br/>
        </form>
    )
}

export default Form