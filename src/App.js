import logo from './logo.svg';
import './App.css';
import React  from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
    const [fields, setFields] = React.useState({
        firstName : '' ,
        lastName : '',
        email: '',
        password : ''
    })


    const handleClickClear =() =>{
        setFields({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    const handleClickRegister = () =>{
        if(!fields.email.includes('@')){
            alert('Почта неверная!')
            return;
        }
        if(fields.firstName.length < 2 || fields.lastName.length < 2 ){
            alert('Имя или фамилия введены неверно!')
            return;
        }

        if(fields.password.length < 5){
            alert('Пароль должен содержать не менее пяти символов!')
            return;
        }

        console.log('Регистрация прошла успешно', fields);
        handleClickClear();
    }

    const handleChangeInput = (event) =>{
        const { name, value } = event.target;
        setFields({
            ...fields,
            [name]: value
        })
    }

    const isValid = !!fields.firstName && !!fields.lastName && !!fields.email && !!fields.password;

  return (
    <div className="App"> 
      <div className='row'>
          <TextField name = 'firstName' className='textInput' onChange={handleChangeInput} value={fields.firstName} label="Имя" fullWidth />
          <TextField name = 'lastName' className='textInput' onChange={handleChangeInput} value={fields.lastName} label="Фамилия" fullWidth />
      </div>
      <div className='row'>
          <TextField name = 'email' className='textInput'  onChange={handleChangeInput} value={fields.email} label="Email" fullWidth />
          <TextField type='password' name = 'password' className='textInput' onChange={handleChangeInput} value={fields.password} label="Пароль" fullWidth />
      </div>
        <div className='row'>
            <br />
            <Button disabled={!isValid} onClick={handleClickRegister} className='formButton' variant="contained">Зарегистрироваться</Button>
            <Button onClick={handleClickClear} className='formButton' variant="contained" color='secondary'>Очистить</Button>
        </div>
    </div>
  );
}

export default App;
