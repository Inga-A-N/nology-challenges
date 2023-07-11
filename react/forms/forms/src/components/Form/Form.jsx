import { useState } from "react"


const ControlledForm = ({handleSubmit}) => {
    
    const defaultValues = {
        username : '',
        email : '',
        password: '',
        confirmPassword:''
    }
    const [formValues, setFormValues]=useState(defaultValues);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(formValues);
    }

    const onInputChange = (event) => {
        const {name, value} =
        event.target
    }

    return (
        <form >
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={} />
            </div>
        </form>
    )
}

export default ControlledForm