window.simpleNotes = {
	Models: {},
  	Collections: {},
 	Views: {},
 	Routers: {},
 	Utils: {},
 	initialize: function() {
 		new simpleNotes.Routers.Router();
 		Backbone.history.start();
 	}
}