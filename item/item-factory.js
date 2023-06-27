/*
	Item Factory is to get The Item
 */
// import items from "../data/item-list.json" assert { type: "json"};
const items = require('../data/item-list.json');

function ItemFactory() {
	this.getItem = function ( itemKey ) {
		return items[itemKey];
	};	// close getItem
}	// close func

module.exports = ItemFactory;