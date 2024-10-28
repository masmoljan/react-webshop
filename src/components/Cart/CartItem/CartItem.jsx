import React from 'react'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    
	return (
		<div className='px-6 py-2 w-1/4 flex'>
			<img className='w-30 h-30 rounded-lg' alt={ item.name } src= { item.media.source }/>
			<div className='flex flex-col items-center justify-center ml-8'>
				<p className='font-bold text-xl mb-2'>{ item.name }</p>
				<p>Price: { item.line_total.formatted_with_symbol }</p>
				<div className='py-6 m-2 flex items-center gap-3'>
					<button 
						type='button' 
						onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} 
						className='bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center'>
							-
						</button>
					<p>{item.quantity}</p>
					<button 
						type='button' 
						onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} 
						className='bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center'>
							+
					</button>
				</div>
			<button 
				type='button' 
				className='bg-red-600 text-white rounded p-1 shadow-lg' 
				onClick={() => onRemoveFromCart(item.id)}>
					Remove
			</button>
		</div>
		</div>
	)
}

export default CartItem
