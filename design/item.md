
Item Level design
===

1. Objects
	1. Item
		1. Fields
			- id: IDs
			- name: a string, displaying name
			- kind: a string, kind of item
			- base-price: base price of the item
			- attribute-list: list compulsory attributes of the item

	2. ItemVariant
		1. Fields:
			- id: IDs
			- item: Item
			- attributes: an array of Attribute

2. Validation

	*Not done yet*

# Glossary
1. Objects
	- Attribute: is a pair of key and value, which are strings
	- IDs: is a string, and global unique and represented as hierarchy: "gid://[shop-name]/[item-posfix]/[item-variant-posfix]"
		eg: "gid://shop-name/coffee/01010202"
