import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
//import TextField from './TextField';
import { TextField } from '@material-ui/core';


const FormInput = ({ name, label, required, type }) => {
	const { control } = useFormContext();

	return (
		<div>
			<Controller
					as={TextField}
					name={name}
					control={control}
					label={label}
					fullWidth
					required={required}
					type={type}
					defaultValue=''
			/>
		</div>
	)
}

export default FormInput
