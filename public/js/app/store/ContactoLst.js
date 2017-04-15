/**
 * Define a store for the data list
 */
Ext.define('CttList.store.ContactoLst', {
	/** Extend the default Store */
	extend: 'Ext.data.Store',
	/** Link to a model for structure */
	model: 'CttList.model.ContactoLst',
	/** Define page size, max 30 */
	pageSize: 10,
	/** Define the store's source */
	proxy: {
		type: 'ajax',
		url: 'contacto/contactolst/format/json',
		reader: {
			type: 'json',
			root: 'contactos',
			successProperty: 'success',
			totalProperty: 'total',
		},
	},
	/** Set the store to autoload and autosync */
	autoLoad: true,
	autoSync: true,
});