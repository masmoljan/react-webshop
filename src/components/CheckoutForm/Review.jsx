import React from 'react'

const Review = ({ checkoutToken }) => {
	return (
		<div className='flex'>
			<ul className='w-full'> 
				{checkoutToken.live.line_items.map((product) => (
					<li key={product.name}>
						<p className='text-xl font-semibold'>{product.name}</p>
						<div class="flex justify-between">
						<p className='text-gray-500 order-0'>Quantity: {product.quantity}</p>
						<p className='order-last font-semibold'>{product.line_total.formatted_with_symbol}</p>
						</div>
					</li>                      
				))}
					<li className='text-xl font-semibold mt-2 mb-1'>Total</li>
					<p 
						className='font-semibold mb-2'
					>
						{checkoutToken.live.subtotal.formatted_with_symbol} + {checkoutToken.shipping_methods[0].price.formatted_with_symbol} (Shipping fee) 
					</p>
			</ul>
		</div>
    )
}

export default Review
