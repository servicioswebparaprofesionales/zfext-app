/**
 * Define the model structure for the data list
 */
Ext.define('CttList.model.ContactoLst', {
	/** Extend the default data Model */
	extend: 'Ext.data.Model',
	/** Define the model's fields */
	fields: [
		{name:'id', type:'int',},
		{name:'name', type:'string',},
		{name:'identification', type:'string',},
		{name:'email', type:'string',},
		{name:'phonePrimary', type:'string',},
		{name:'phoneSecondary', type:'string',},
		{name:'fax', type:'string',},
		{name:'mobile', type:'string',},
		{name:'observations', type:'string',},
		{name:'type',},
		{name:'address', type:'string', mapping: 'address.address',},
		{name:'city', type:'string', mapping: 'address.city',},
	],
	config: {
		idProperty: 'id',
	},
});