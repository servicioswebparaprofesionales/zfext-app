Ext.Loader.setConfig({enabled: true});
Ext.onReady(function() {
	/** Define the main application index */
	Ext.application({
		/** Name the example */
		name: 'CttList',
		/** Disable viewport auto-creation */
		autoCreateViewport: false,
		/** Set up the base folder for the app */
		appFolder: '../public/js/app',
		/** Autload these controllers */
		controllers: [
			'Index',
		],
		/** Launch the application and define the default Viewport */
		launch: function() {
			Ext.create('Ext.container.Viewport', {
				layout: 'border',
				items: [
					{
						xtype  : 'ContactoGrd',
						region : 'center',
					},
				],
			});
		},
	});
});