import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



export const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [order, setOrder] = useState({})
	const [error, setError] = useState('')

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	}

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	}

	const handleAddToCart = async (productId, quantity) => {
		const {cart} = await commerce.cart.add(productId, quantity);
		setCart(cart)
		NotificationManager.success('Product added to cart!')
	}

	const handleUpdateCartQty = async (productId, quantity) => {
		const {cart} = await commerce.cart.update(productId, {quantity});
		NotificationManager.success('Product quantity updated!');
		setCart(cart)
	}

	const handleRemoveFromCart = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart)
		NotificationManager.warning('Product removed from cart!')
	}

	const handleEmptyCart = async () => {
		const {cart} = await commerce.cart.empty();
		setCart(cart);
	}

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh();
		setCart(newCart);
	}

	const handleCaptureCheckout = async(checkoutTokenId, newOrder) =>{
		try {
			const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
			setOrder(incomingOrder);
			refreshCart();
		} catch (error){
			setError(error.data.error.message);
		}
	}

	useEffect (() => {
		fetchProducts();
		fetchCart();
	}, [])


	return (
		<Router>
			<div className='container mx-auto'>
				<Navbar totalItems={cart.total_items} />
				<Switch>
					<Route exact path='/'>
						<Products products={products} onAddToCart={handleAddToCart} /> 
					</Route>
					<Route exact path='/cart'>
						<Cart cart={cart} 
						handleUpdateCartQty={handleUpdateCartQty}
						handleRemoveFromCart={handleRemoveFromCart}
						handleEmptyCart={handleEmptyCart}
						/> 
					</Route>
					<Route exact path='/checkout'>
						<Checkout 
							cart={cart} 
							order={order} 
							onCaptureCheckout={handleCaptureCheckout} 
							error={error}
						/>
					</Route>
				</Switch>
				<NotificationContainer/>
			</div>
		</Router>
  )
}


export default App;