simpleNotes.Models.Note = Backbone.Model.extend({
	urlRoot: 'notes',

	// validate : {
	//     name : {
	//       required  : true,
	//       pattern   : /[a-zA-z \.]/,
	//       minlength : 3,
	//       maxlength : 255
	//     },

	//     time : {
	//       required  : true,
	//       pattern   : /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/
	//     },

	//     body : {
	//     	required  : true,
	//     	pattern : !(/<(?:.|\n)*?>/)
	//     }
	// }
})