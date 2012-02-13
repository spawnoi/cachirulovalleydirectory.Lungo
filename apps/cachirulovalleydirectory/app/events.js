App.Events = (function(lng, undefined) {
    lng.dom('a#directory').tap(function(event) {
		App.Services.load_categories()
	});
	
    lng.dom('ul#directory_cats_list li').tap(function(event) {
		var id= $$(this).attr('id');
		App.Services.load_users_from_cat(id, function(err, data){
			lng.dom('#directory_professionals header .title').text(data.cat.name);
			lng.Router.section('directory_professionals');
		});
    });

})(LUNGO);