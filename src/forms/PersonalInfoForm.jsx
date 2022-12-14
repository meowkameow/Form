import React  from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().min(2,"Имя должно не менее двух букв").required("Обязательное поле"),
    lastName: yup.string().min(2,"Фамилия должна содержать не менее двух букв").required("Обязательное поле"),
    email: yup.string().email('Неверная почта').required("Обязательное поле"),
    password: yup.string().min(6,"Пароль должен содержать не менее 6 символов").required("Обязательное поле"),
}).required();

export const PersonalInfoForm =({ nextStep, setFormValues })=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => {
        setFormValues(values);
        nextStep('adress');
    };

    console.log(errors);

    return(
        <div>
            <div className='row'>
                <TextField name = 'firstName' className='textInput'
                           {...register(("firstName"))}
                           helperText={errors.firstName && errors.firstName.message}
                           error={!!errors.firstName}
                           label="Имя" fullWidth />
                <TextField name = 'lastName' className='textInput'
                           {...register(("lastName"))}
                           helperText={errors.lastName && errors.lastName.message}
                           error={!!errors.lastName}
                           label="Фамилия" fullWidth />
            </div>
            <div className='row'>
                <TextField name = 'email' className='textInput'
                           {...register(("email"))}
                           helperText={errors.email && errors.email.message}
                           error={!!errors.email}
                           label="Email" fullWidth />
                <TextField type='password' name = 'password' className='textInput'
                           {...register(("password"))}
                           helperText={errors.password && errors.password.message}
                           error={!!errors.password}
                           label="Пароль" fullWidth />
            </div>
            <div className='row'>
                <br />
                <Button  onClick={handleSubmit(onSubmit)} className='formButton' variant="contained">Далее</Button>
                <Button className='formButton' variant="contained" color='secondary'>Очистить</Button>
            </div>
        </div>
    )
}

export default PersonalInfoForm;