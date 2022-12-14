import './App.css';
import React  from 'react';
import { BrowserRouter, Routes ,Route, useNavigate} from 'react-router-dom';
import PersonalInfoForm from "./forms/PersonalInfoForm";
import AdressForm from "./forms/AdressForm";
import Result from "./forms/Result";

function App() {
    const [formValues, setFormValues] = React.useState({

    });

    const history = useNavigate();

    const nextStep =(name) =>{
        history(name);
    }

    console.log('mainForm', formValues);

  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<PersonalInfoForm nextStep={nextStep} setFormValues={setFormValues}/>} exact/>
        <Route path='/adress' element={<AdressForm nextStep={nextStep} setFormValues={setFormValues}/> }/>
        <Route path='/result' element={<Result formValues={formValues}/> }/>
        </Routes>
    </div>
  );
}

export default App;
