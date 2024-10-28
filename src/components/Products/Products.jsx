import React from "react";
import { CircularProgress } from '@material-ui/core';


import Product from "./Product/Product";


const Products = ({ products, onAddToCart }) => {

	if(!products.length) {
		return (
			<div className='w-full h-20 flex justify-center items-center'>
			<CircularProgress />
			</div>
		)
	}

	return (
		<main>
			<div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4'>  
			{products.map((product) => (
				<div className='rounded overflow-hidden shadow-lg' item key={product.id}>     
					<Product product={product} onAddToCart={onAddToCart} />
				</div>
			))}
			</div>
		</main>
	);
}

export default Products;