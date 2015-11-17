simpleNotes.Routers.Router = Backbone.Router.extend({
	initialize: function () {
		this.$rootEl = $('#main');
	},

	routes: {
		'' : 'notesIndex',
		'new' : 'notesNew',
		':id' : 'notesShow',
		':id/edit' : 'notesEdit'
	},

	notesNew: function () {
		var note = new simpleNotes.Models.Note();
		var view = new simpleNotes.Views.notesNew({
			model: note,
			collection: simpleNotes.Collections.notes
		})

		this._swapView(view);
	},

	notesEdit: function (id) {
		var note = simpleNotes.Collections.notes.getOrFetch(id);
		var view = new simpleNotes.Views.notesEdit({
			model: note
		});

		this._swapView(view);
	},

	notesShow: function  (id) {
		var note = simpleNotes.Collections.notes.getOrFetch(id);
		var view = new simpleNotes.Views.notesShow({
			model: note
		});

		this._swapView(view);
	},

	notesIndex: function () {
		simpleNotes.Collections.notes.fetch();

		var view = new simpleNotes.Views.notesIndex({
			collection: simpleNotes.Collections.notes
		});

		this._swapView(view);
	},

	_swapView: function (view) {
	    this.currentView && this.currentView.remove();
	    this.currentView = view;
	    this.$rootEl.html(view.render().$el);
  	}
})