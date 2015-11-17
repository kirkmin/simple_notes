simpleNotes.Views.notesNew = Backbone.View.extend({
	template: JST['new'],

	className: 'notes-new',

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
		var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
		var day = currentDate.getDate()
		var month = currentDate.getMonth() + 1
		var year = currentDate.getFullYear()
		var time = month + "/" + day + "/" + year
		var body = this.$('#body').val()
		var that = this;
		this.model.save({name: name, time: time, body: body}, {
			success: function () {
				Backbone.history.navigate("" + that.model.attributes.id, { trigger: true })
			}
		})
	}
})