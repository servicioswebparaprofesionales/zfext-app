/**
 * Define the ContactoFrm view (allows the change of the data)
 */
Ext.define('CttList.view.index.ContactoFrm', {
	/** Extend the default Window */
	extend: 'Ext.window.Window',
	/** Assign an alias to the widget */
	alias: 'widget.ContactoFrm',
	/** Give the object an ID */
	id: 'ContactoFrm',
	/** Define a window title */
	title: 'Por favor, introduzca los datos del contacto',
	/** Show the window when it's loaded */
	autoShow: true,
	/** Use the "anchor" layout */
	layout: 'anchor',
	/** Set the window width */
	width: 300,
	/** Set the modal mode */
	modal: true,
	/** Define items to put inside the window */
	items: [
		{
			xtype    : 'form',
			id       : 'ContactoFrmFrm',
			bodyStyle: 'padding: 5px',
			items: [
				{
					xtype: 'hidden',
					name : 'id',
				},
				{
					xtype     : 'textfield',
					name      : 'name',
					fieldLabel: 'Nombre',
					allowBlank: false,
					maxLength  : 90,
				},
				{
					xtype     : 'textfield',
					name      : 'identification',
					fieldLabel: 'Identificaci\u00F3n',
					maxLength  : 45,
				},
				{
					xtype     : 'textfield',
					name      : 'city',
					fieldLabel: 'Ciudad',
					maxLength  : 45,
				},
				{
					xtype     : 'textfield',
					name      : 'address',
					fieldLabel: 'Direcci\u00F3n',
					maxLength  : 45,
				},
				{
					xtype     : 'textfield',
					vtype     : 'email',
					name      : 'email',
					fieldLabel: 'Correo e.',
					maxLength  : 100,
				},
				{
					xtype     : 'textfield',
					name      : 'phonePrimary',
					fieldLabel: 'T\u00E9lefono 1',
					maxLength  : 45,
				},
				{
					xtype     : 'textfield',
					name      : 'phoneSecondary',
					fieldLabel: 'T\u00E9lefono 2',
					maxLength  : 45,
				},
				{
					xtype     : 'textfield',
					name      : 'fax',
					fieldLabel: 'Fax',
					maxLength  : 45,
				},
				{
					xtype     : 'textfield',
					name      : 'mobile',
					fieldLabel: 'Celular',
					maxLength : 45,
				},
				{
					xtype      : 'fieldcontainer',
					fieldLabel : 'Tipo',
					defaultType: 'checkboxfield',
					items      : [
						{
							name      : 'type[]',
							boxLabel  : 'Cliente',
							inputValue: 'client',
						},
						{
							name      : 'type[]',
							boxLabel  : 'Proveedor',
							inputValue: 'provider',
						},
					]
				},
				{
					xtype     : 'textareafield',
					name      : 'observations',
					fieldLabel: 'Observaciones',
					grow      : true,
					maxLength : 500,
				},
			],
		},
	],
	/** Add an "Enter" button to the window */
	buttons: [
		{
			text: 'Enviar',
			id  : 'ContactoFrmEnviar',
		},
	],
});