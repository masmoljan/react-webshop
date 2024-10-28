import React from 'react'
import Review from './Review'

const PaymentForm = ({checkoutToken, previousFormStep, nextFormStep, shippingData, onCaptureCheckout}) => {

	const handleSubmit = async (event) => {
			event.preventDefault();

			const orderData ={
				line_items: checkoutToken.live.line_items,
				customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
				shipping: { name: 'Primary', street: shippingData.address, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry},
				fulfillment: {shipping_method: shippingData.shippingOption},
				payment: {
					gateway: 'test_gateway',
					card: {
							number: '4242 4242 4242 4242',
							expiry_month: '01',
							expiry_year: '2023',
							cvc: '123',
							postal_zip_code: '94103',
					},
				}
			};
			onCaptureCheckout(checkoutToken.id, orderData)
			nextFormStep();
    }

	return (
		<div className='flex flex-col p-4 shadow border rounded'>
			<div className='flex justify-center'>
			<h5 className='text-2xl pt-3 pb-3'>Order review</h5>
			</div>
			<Review checkoutToken={checkoutToken}/>
			<hr/>
			<h5 className='text-xl font-semibold pt-3 pb-3'>Payment method</h5>
			
			<form onSubmit={(e) => handleSubmit(e)}>
			<input type="radio" name="paymentMethod" value="cod" checked='checked' readOnly></input>
			<label className='ml-2'>Cash on delivery</label>
			<div className='py-4 flex justify-between'>
			<button 
				onClick={previousFormStep} 
				className='bg-blue-600 text-white h-10 px-5 rounded-lg order-0' 
			>
				Return to checkout
			</button>
			<button 
				type='submit' 
				className='bg-blue-600 text-white h-10 px-5 rounded-lg order-last'>
					Confirm orde
				</button>
			</div>
			</form>
		</div>
	)
}

export default PaymentForm
