simpleNotes.Collections.Notes = Backbone.Collection.extend({
	model: simpleNotes.Models.Note,
	url: 'notes',

	getOrFetch: function (id) {
		var note = this.get(id);

		if (!note) {
			note = new simpleNotes.Models.Note({id: id})
			note.fetch({
				success: function () {
					this.add(note);
				}.bind(this)
			});
		} else {
			note.fetch();
		}
		return note
	}
})

simpleNotes.Collections.notes = new simpleNotes.Collections.Notes