import React  from 'react';
import { Paper } from "@mui/material";

export const Result = ({formValues}) =>{
    return(
        <Paper style={{padding: 30} }>
            <h2>Персональная информация:</h2>
            <ul>
                <li>Имя: {formValues.firstName}</li>
                <li>Фамилия: {formValues.lastName}</li>
                <li>Почта: {formValues.email}</li>
                <li>Город: {formValues.city}</li>
                <li>Улица: {formValues.street}</li>
            </ul>
        </Paper>
    )
}

export default Result;