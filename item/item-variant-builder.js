/*
	A Builder to create ItemVariant object
 */

// import ItemFactory from './item-factory.js'; 
// import * as PlaceHolder from './item-utils.js';
const ItemFactory = require('./item-factory.js');
const getId = require('./item-utils.js');


function ItemVariantBuilder () {

	this.itemVariant = {};
	this.itemVariant.attributes = [];

	this.construct = function (itemKey) {
		const factory = new ItemFactory();
		this.itemVariant.item = factory.getItem(itemKey);
		this.itemVariant.id = getId(this.itemVariant.item);
		return this.itemVariant;
	}	// close construct

	this.addAttribute = function ( key, value ) {
		this.itemVariant.attributes.push({key: value});
	}	// close addAttribute
}	// close ItemVariantFactory


module.exports = ItemVariantBuilder;