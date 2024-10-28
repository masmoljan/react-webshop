import React from 'react'
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

	const EmptyCart = () => (
		<div className='flex flex-col items-center justify-center'>
			<h4 className='pt-4 pb-4 text-3xl ml-3'>No items in cart!</h4>
			<Link to='/'>
				<button 
					className='bg-blue-600 text-white h-10 px-5 m-5 rounded-lg' 
					type="button">
					Back to store
				</button>
			</Link>
		</div>
	);

	const FilledCart = () => (
		<>
		<div class="grid grid-rows-auto gap-3 divide-y-2 divide-black-400">
			{cart.line_items.map((item) => (
				<div key={item.id}>
					<CartItem item={item} 
						onUpdateCartQty={handleUpdateCartQty} 
						onRemoveFromCart={handleRemoveFromCart}
					/>
				</div>
			))}
		</div>
		<div>
		<hr/>
				<h4 className='text-2xl px-6 mt-6 mb-6'>
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</h4>
				<div className='flex justify-between'>
					<button 
						type='button' 
						className='bg-blue-600 text-white m-5 py-2 h-10 px-5 rounded order-0' 
						onClick={handleEmptyCart}>
						Empty cart
					</button>
					<Link to='/checkout'>
						<button type='button' className='bg-blue-600 text-white m-5 py-2 h-10 px-5 rounded order-last'>
							Checkout
					</button>
					</Link>
				</div>
		</div>
		</>
	)
    
	if(!cart.line_items) return         
		<div className='w-full'>
		<CircularProgress />
		</div>;

	return (
		<div className='flex w-full justify-center '>
			<div className='flex flex-col w-3/5 border rounded shadow appearance-none divide-y-2 divide-black-400'>
				<h3 className='px-6 mb-2 text-4xl mt-3'>
					Your shopping cart
				</h3>
				{ !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
			</div>
		</div>
	)
}

export default Cart;
