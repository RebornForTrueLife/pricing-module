
Pricing modular
===

> Purpose: pricing a cart

- **This modular is an stack of 3 levels**:
	
	1. Item level
		- Responsible for modeling and validation Item data

	2. Cart Line level
		- Responsible for pricing a line of cart: An Item + quantity + discount-at-line-level

	3. Cart level
		- Responsible for pricing a cart: all cart lines + discount-at-order-level

1. Item level interface

	what am I doing? - writing document about the way to use Item interface but I dont implement it yet?
	make it work first 
	design - make it work - domcument

	I have Item properties - so when do i need to create an Item? -> read from database (item-list.json)
	ItemVariant: when do I need to create an ItemVariant?
		- when user want to create a particular Item
		- How to create an ItemVariant: by using Builder: 
			- automa
			- setItem(Item)
			- setAttribute("key", "value")

	
