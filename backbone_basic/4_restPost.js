$(function(){
	window.Todo = Backbone.Model.extend({
		  idAttribute: '_id',
		  url: 'http://180.70.116.103:3000/api/todo'
	});
	var todo = new Todo;
//	var testVal = {name : 'CSI'};

//	todois.save(testVal, {
//		success: function(todois){
//			alert(todois.toJSON());
//		}
//	});
	todo.save({name: "bluesuin"});

	todo.on('sync', function() {
    console.log(todo, todo.id);
  });

});