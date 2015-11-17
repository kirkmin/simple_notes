simpleNotes.Views.notesShow = Backbone.View.extend({
	template: JST['show'],

	className: 'notes-show',

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function () {
		var content = this.template({
			note: this.model
		});
		this.$el.html(content);
		return this;
	}
})