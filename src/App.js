import { useForm } from "react-hook-form";
import './App.css';
import React  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (values) => console.log(values);

    console.log(errors);


  return (
    <div className="App"> 
      <div className='row'>
          <TextField name = 'firstName' className='textInput' defaultValue="test"
                     {...register("firstName",
                         { required: 'Обязательное поле'})}
                        helperText={errors.firstName && errors.firstName.message}
                        error={!!errors.firstName}
                     label="Имя" fullWidth />
          <TextField name = 'lastName' className='textInput'
                     {...register("lastName",
                         { required: 'Обязательное поле'})}
                     helperText={errors.lastName && errors.lastName.message}
                     error={!!errors.lastName}
                     label="Фамилия" fullWidth />
      </div>
      <div className='row'>
          <TextField name = 'email' className='textInput'
                     {...register("email",
                         { required: 'Обязательное поле'})}
                     helperText={errors.email && errors.email.message}
                     error={!!errors.email}
                     label="Email" fullWidth />
          <TextField type='password' name = 'password' className='textInput'
                     {...register("password",
                         { required: 'Обязательное поле'})}
                     helperText={errors.password && errors.password.message}
                     error={!!errors.password}
                     label="Пароль" fullWidth />
      </div>
        <div className='row'>
            <br />
            <Button  onClick={handleSubmit(onSubmit)} className='formButton' variant="contained">Зарегистрироваться</Button>
            <Button className='formButton' variant="contained" color='secondary'>Очистить</Button>
        </div>
    </div>
  );
}

export default App;
