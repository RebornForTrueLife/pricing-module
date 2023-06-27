/*
	This file is not a library, which is a temperary placeholder for lacking functions
 */

/* getId(itemId)
	A function to get the id of an ItemVariant 
	Parameter:
		itemId: id of the item which the ItemVariant belongs to
	Return:
		An global unique id for ItemVariant
		Id is represent in hierarchy, so Id of the ItemVariant must be next level of itemId
 */
function getId(itemId) {
	return itemId + Math.random();
}


module.exports = getId;