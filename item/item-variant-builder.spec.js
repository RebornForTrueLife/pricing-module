/*
	A test for ItemVariant builder
 */

// import ItemVariantBuilder from './item-variant-builder.js';
const ItemVariantBuilder = require('././item-variant-builder.js');


test("create a null attribute Item", () => {
	const builder = new ItemVariantBuilder();
	const itemVariant = builder.construct("coffee");
	expect(itemVariant.attributes).toHaveLength(0);
});