import style from "./ContactForm.module.scss";
import {useform} from 'react-hook-form'
import * as yup from 'yup'
import {yapResolver} from '@hookform/resolvers/yup'
const ContactForm = ({formSubmit}) => {
    const schema = yup.object({
        name: yupResolver.string().required('Please Enter your name'),
        email: yup.string().required('Please enter your email').email('Must be valid email address'),
        message: yup.string('Please enter a message')
    
})

    const {register, handleSubmit, formState :{errors},  }
  return (
    <form className={style.form}>
      <div>
        <label htmlFor="nameInput">Name</label>
        <input type="text" id="nameInput" />
      </div>
      <div>
        <label htmlFor="emailInput">Name</label>
        <input type="email" id="emailInput" />
      </div>
      <div>
        <label htmlFor="nameInput">Name</label>
        <textarea id="message" />
      </div>
      <div>
        <button type="submit">Contact me</button>
      </div>
    </form>
  );
};

export default ContactForm;
