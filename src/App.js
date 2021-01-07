import React, { useState } from "react";
import "./App.css";
import logo from "../src/PngItem.png";
import laptop from "../src/laptop.png";
import ipad from "../src/ipad.png";
import watch from "../src/watch.png";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
	const [cart, setCart] = useState([]);
	const [page, setPage] = useState(PAGE_PRODUCTS);
	const [product] = useState([
		{
			name: "Iphone 11",
			cost: "$699",
			image: logo,
		},
		{
			name: "Ipad Pro",
			cost: "$599",
			image: ipad,
		},
		{
			name: "MacBook Pro Retina 2018",
			cost: "$1250",
			image: laptop,
		},
		{
			name: "Apple Watch",
			cost: "$299",
			image: watch,
		},
	]);

	const addToCart = (product) => {
		setCart([...cart, { ...product }]);
	};
	const removeFromCart = (productToRemove) => {
		setCart(cart.filter((product) => product !== productToRemove));
	};
	const navigateTo = (nextPage) => {
		setPage(nextPage);
	};
	const renderProducts = () => (
		<>
			<p>Products</p>
			<div className='alignCartel'>
				<div className='products'>
					{product.map((product, idx) => (
						<div className='product' key={idx}>
							<h3 className='prodName'>{product.name}</h3>
							<h4 className='prodCost'>{product.cost}</h4>
							<img
								className='imgStyle'
								src={product.image}
								alt={product.name}
								width='fit-content'
								height='300px'
							/>
							<button onClick={() => addToCart(product)}>Add to Cart</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
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

	return (
		<div className='App'>
			<header>
				<p>{page === PAGE_PRODUCTS ? "Products" : "Cart"}</p>
				<button onClick={() => navigateTo(PAGE_CART)}>Go to cart ({cart.length})</button>
				<button onClick={() => navigateTo(PAGE_PRODUCTS)}>View products</button>
			</header>
			{page === PAGE_PRODUCTS && renderProducts()}
			{page === PAGE_CART && renderCart()}
		</div>
	);
}

export default App;
