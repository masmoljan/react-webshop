import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const location = useLocation();

	return (
		<>
			<nav class="flex items-center justify-between bg-white-500 shadow p-6 mb-2">
				<Link to='/'>
					<div class="flex items-center flex-shrink-0 text-black mr-6">
					<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/>
					<path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/></svg>
					<span class="font-semibold text-xl tracking-tight ml-3">Web Shop</span>
					</div>
				</Link>

			{location.pathname === '/' && (
				<div className='order-last'>
					<Link to="/cart">
						<button type='button' className='cart-icon relative flex items-center justify-center border-none outline-none bg-gray-300 rounded-full h-14 w-14 hover:bg-gray-400' aria-label='Show cart' color='initial'>
							<span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg></span>
							<span className='cart-icon__badge absolute -bottom-1 -right-1 w-25 h-25 bg-red-600 text-white flex justify-center items-center rounded-full h-7 w-7'>{ totalItems ? totalItems : '0' }</span>
						</button>
					</Link>
				</div>
	)}
			</nav>
		</>
	)
}

export default Navbar
