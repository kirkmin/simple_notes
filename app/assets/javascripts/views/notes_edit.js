simpleNotes.Views.notesEdit = Backbone.View.extend({
	template: JST['edit'],

	className: 'notes-edit',

	events: {
		'click .submit' : 'submit'
	},

	initialize: function() {
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function () {
		var content = this.template({
			note: this.model
		});
		this.$el.html(content);
		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var name = this.$('#name').val()
		var time = this.$('#time').val()
		var body = this.$('#body').val()
		var that = this;
		this.model.save({name: name, time: time, body: body}, {
			success: function () {
				Backbone.history.navigate("" + that.model.attributes.id, { trigger: true })
			}
		})
	}
})