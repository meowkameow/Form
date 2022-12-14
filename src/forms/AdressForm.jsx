import React  from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    city: yup.string().min(2,"Город должен содержать не менее двух букв").required("Обязательное поле"),
    street: yup.string().min(2,"Улица должна содержать не менее двух букв").required("Обязательное поле"),
    houseNumber: yup.string().required("Обязательное поле"),
}).required();


export const AdressForm =({ nextStep, setFormValues }) =>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
            city: '',
            street:''
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => {
        setFormValues((prev) => {
        return {...prev, ...values};
        });
        nextStep('result');
    };

    console.log(errors);

    return(
        <div>
            <div className='row'>
                <TextField name = 'city' className='textInput'
                           {...register(("city"))}
                           helperText={errors.city && errors.city.message}
                           error={!!errors.city}
                           label="Город" fullWidth />
                <TextField name = 'street' className='textInput'
                           {...register(("street"))}
                           helperText={errors.street && errors.street.message}
                           error={!!errors.street}
                           label="Улица" fullWidth />
            </div>
            <div className='row'>
                <TextField name = 'houseNumber' className='textInput'
                           {...register(("houseNumber"))}
                           helperText={errors.houseNumber && errors.houseNumber.message}
                           error={!!errors.houseNumber}
                           label="Номер дома" fullWidth />
                <TextField  name = 'apartment' className='textInput'
                           {...register(("apartment"))}
                           helperText={errors.apartment && errors.apartment.message}
                           error={!!errors.apartment}
                           label="Номер квартиры" fullWidth />
            </div>
            <div className='row'>
                <br />
                <Button  onClick={handleSubmit(onSubmit)} className='formButton' variant="contained">Далее</Button>
                <Button className='formButton' variant="contained" color='secondary'>Очистить</Button>
            </div>
        </div>
    )
}

export default AdressForm;