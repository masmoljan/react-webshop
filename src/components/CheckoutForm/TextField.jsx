import React from 'react'

const TextField = ({ name, label, required }) => {
	return (
		<input 
			className='shadow appearance-none border rounded w-4/5 py-2 px-3 mt-2 mb-2 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
			name={name} 
			label={label}
			placeholder={label}
			type='text'
			required='required'
		/>
	)
}

export default TextField
