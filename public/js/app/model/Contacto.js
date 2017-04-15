/**
 * Define the model for the data
 */
Ext.define('CttList.model.Contacto', {
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
		{name:'type', type:'auto',},
		{name:'address', type:'string',},
		{name:'city', type:'string',},
	],
});