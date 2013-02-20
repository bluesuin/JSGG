$(function(){
	window.Todo = Backbone.Model.extend({
		  idAttribute: '_id',
		  url: function() {
			//
			// 여기서 this.id 명을 Model의 idAttribute 명과 혼동하지 마세요.
			// Model 을 선언시에 idAttribute 값에 의해서 어떻게 세팅되던지
			// 내부에서 참조하는 맴버변수는 this.id 입니다.
			//
			// Model 의 idAttribute 에 해당하는 attribute를 설정하여
			// 전체 목록 / 1개의 목록.. 둘중 어느것을 가져올지에 대한 결정을 할 수 있도록 설정합니다.
			//
			// 참고로 Model에 설정하는 attribute 의 키값중에
			// id 으로 설정하면 this.id 와 동일하게 사용할 수 있습니다.
			//
			return this.id ? 'http://180.70.116.103:3000/api/todo/' + this.id : 'http://180.70.116.103:3000/api/todo'
		  }
	});
	
//	var todo = new Todo;
	var todo = new Todo({
	  _id: '511b6034ca4ee9f98d660b5c'
	});

	//
	// read (GET) 요청합니다.
	//
	todo.fetch();

	//
	// Model의 데이타가 database와 sync 되었다
	//
	todo.on('sync', function() {
	  console.info('sync');
	  console.log(arguments);
	});
	//
	// sync 중에 에러가 났다.
	//
	todo.on('error', function() {
	  console.warn('error');
	  console.log(arguments);
	});


});