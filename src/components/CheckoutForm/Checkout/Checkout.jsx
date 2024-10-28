import React, { useState, useEffect } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce'
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Checkout = ( {cart, order, onCaptureCheckout, error } ) => {

	const [formStep, setFormStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);
	const [shippingData, setShippingData] = useState({});

	useEffect(() => {
		const generateToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
				setCheckoutToken(token);
			} catch (error) {
				throw(error)
			}
		}
		generateToken();
	}, [cart])

	const test = (data) =>{
		setShippingData(data);
		nextFormStep();
	}

	const previousFormStep = () => setFormStep((prevActiveStep) => prevActiveStep - 1)
	
	const nextFormStep = () => setFormStep((nextActiveStep) => nextActiveStep + 1)

	let Confirmation = () => (order.customer ? (
		<>
			<div className='flex flex-col items-center w-full p-4'>
			<h5 className='text-2xl pt-3 pb-6'>
				Thank you for your purchase!
			</h5>
			<Link to="/">
				<button className='bg-blue-600 text-white h-10 px-5 rounded-lg' type="button" >
					Back to home
				</button>
			</Link>
			</div>
		</>
		) : (
			<div className='w-full h-20 flex justify-center items-center'>
				<CircularProgress />
			</div>
		));

    return (
			<>
				<div className='container flex items-center align-center justify-center'>
				<div className='flex w-2/5 border rounded shadow appearance-none'>
					{ formStep === 0 && checkoutToken &&(
						<section className='w-full'>
							<AddressForm 
								checkoutToken={checkoutToken} 
								setShippingData={setShippingData} 
								test={test} 
							/>
						</section>
					)}
					{ formStep === 1 && checkoutToken &&(
						<section className='w-full'>
							<PaymentForm 
								shippingData={shippingData} 
								checkoutToken={checkoutToken} 
								onCaptureCheckout={onCaptureCheckout} 
								previousFormStep={previousFormStep} 
								nextFormStep={nextFormStep}
							/>
						</section>
					)}
					{ formStep === 2 && checkoutToken && (
							Confirmation()
					)}
					</div>
				</div>
			</>
    )
    
}

export default Checkout
