import React from "react";

const renderCart = () => (
	<>
		<p className='cart'>Cart</p>
		<div className='alignCartel cartelList'>
			<div className='products prodCart'>
				{cart.map((product, idx) => (
					<div className='product productCart' key={idx}>
						<h3>{product.name}</h3>
						<h4>{product.cost}</h4>
						<img src={product.image} alt={product.name} width='170px' height='200px' />
						<button className='remove' onClick={() => removeFromCart(product)}>
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	</>
);

export default Cart;
