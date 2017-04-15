/**
 * Define the Index (main) controller
 */
Ext.define('CttList.controller.Index', {
	/** Extend the default Controller */
	extend: 'Ext.app.Controller',
	/** Autolod these models */
	models: [
		'Contacto',
		'ContactoLst',
	],
	/** Autolod these views */
	views: [
		'index.ContactoGrd',
		'index.ContactoFrm',
	],
	/** Autoload these stores */
	stores: [
		'Contacto',
		'ContactoLst',
	],
	/** Initialize the controller */
	init: function() {
		CttList = this;
		/** Define the interactions for the controller and view components */
		this.control({
			'ContactoGrd': {
				itemdblclick: function(element,rec,item,index,evt) {
					_url = 'contacto/contactomod/format/json';
					CttList.crearContactoFrm(rec);
				},
			},
			'#ContactoGrdCrear': {
				click: function() {
					_url = 'contacto/contactocre/format/json';
					CttList.crearContactoFrm();
				},
			},
			'#ContactoGrd actioncolumn': {
				modificar: function(idx) {
					var rec = Ext.getCmp('ContactoGrd').getStore().getAt(idx);
					_url = 'contacto/contactomod/format/json';
					CttList.crearContactoFrm(rec);
				},
				eliminar: function(idx) {
					Ext.MessageBox.confirm('Importante', '¿Desea usted eliminar este contacto?', function(btn){
						if(btn === 'yes'){
							var rec = Ext.getCmp('ContactoGrd').getStore().getAt(idx);
							Ext.Ajax.request({
								url: 'contacto/contactoeli/format/json',
								params: {
									id: rec.internalId,
								},
								success: function(form,action) {
									CttList.refrescarContactoGrd();
								},
								failure: function(form,action) {
									CttList.refrescarContactoGrd();
									Ext.MessageBox.alert('Disculpe', 'La acci\u00F3n no fue ejecutada');
								},
							});
						}
					});
				}
			},
			'#ContactoFrmEnviar': {
				click: function() {
					var form = Ext.getCmp('ContactoFrmFrm').getForm();

					if (form.isValid()) {
						form.submit({
							method: 'POST',
							url : _url,
							waitTitle: 'Enviando la informaci\u00F3n',
							waitMsg: 'Por favor, espere un momento...',
							success: function(form,action) {
								CttList.cerrarContactoFrm();
								CttList.refrescarContactoGrd();
							},
							failure: function(form,action) {
								CttList.cerrarContactoFrm();
								CttList.refrescarContactoGrd();
								Ext.MessageBox.alert('Disculpe', 'La acci\u00F3n no fue ejecutada');
							},
						});
					}
				},
			},
		});
	},
	/** Refresh ContactoLst*/
	refrescarContactoGrd: function() {
		Ext.getCmp('ContactoGrd').getStore().load();
	},
	/** Create ContactoFrm*/
	crearContactoFrm: function(rec=false) {
		Ext.create('CttList.view.index.ContactoFrm');
		if (rec) {
			rec['data']['type[]']=rec['data']['type'];
			Ext.getCmp('ContactoFrm').down('form').loadRecord(rec);
		}
	},
	/** Close ContactoFrm*/
	cerrarContactoFrm: function() {
		if (Ext.getCmp('ContactoFrm')) {
			Ext.getCmp('ContactoFrm').close();
		}
	},
});