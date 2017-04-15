/**
 * Define a Grid for the data list
 */
Ext.define('CttList.view.index.ContactoGrd', {
	/** Extend the default grid */
	extend: 'Ext.grid.Panel',
	/** Assign an alias to the widget */
	alias: 'widget.ContactoGrd',
	/** Give the object an ID */
	id: 'ContactoGrd',
	/** Give the grid a title */
	title: 'Contactos',
	/** The store to pull data from */
	store: 'ContactoLst',
	/** Show loading message */
	loadMask: true,
	/** Show column lines */
	columnLines: true,
	/** Column definition for the grid */
	columns: [
		{
			header   : 'Nombre',
			dataIndex: 'name',
			flex     : 1,
			sortable : true,
			align    : 'LEFT',
		},
		{
			header   : 'Identificaci\u00F3n',
			dataIndex: 'identification',
			flex     : 1,
			sortable : true,
			align    : 'LEFT',
		},
		{
			header   : 'Correo e.',
			dataIndex: 'email',
			flex     : 1,
			sortable : true,
			align    : 'LEFT',
		},
		{
			header   : 'T\u00E9lefono 1',
			dataIndex: 'phonePrimary',
			flex     : 1,
			sortable : true,
			align    : 'LEFT',
		},
		{
			header   : 'Celular',
			dataIndex: 'mobile',
			flex     : 1,
			sortable : true,
			align    : 'LEFT',
		},
		{
			header   : 'Observaciones',
			dataIndex: 'observations',
			flex     : 1,
			sortable : true,
			align    : 'LEFT',
		},
		{
			xtype   : 'actioncolumn',
			header  : 'Acciones',
			align   : 'CENTER',
			sortable: false,
			width   : 100,
			items   : [
				{
					tooltip: 'Modificar Contacto',
					icon   : 'img/alegra-btn-edit.png',
					handler: function( view, rowIndex ) {
						this.fireEvent( 'modificar', rowIndex );
					},
				},
				{
					tooltip: 'Eliminar Contacto',
					icon   : 'img/alegra-btn-delete.png',
					handler: function( view, rowIndex ) {
						this.fireEvent( 'eliminar', rowIndex );
					},
				},
			],
		},
	],
	/** Docked items definition */
	dockedItems: [{
		xtype      : 'pagingtoolbar',
		store      : 'ContactoLst',
		dock       : 'bottom',
		displayInfo: true,
	}],
	/** Toolbar definition */
	tbar: [
		{
			id     : 'ContactoGrdCrear',
			text   : 'Nuevo Contacto',
			tooltip: 'Crear un nuevo contacto',
			icon   : 'img/alegra-btn-plus.png',
		},
	],
	/** Initialize the grid */
	initComponent: function() {
		this.callParent(arguments);
	},
});