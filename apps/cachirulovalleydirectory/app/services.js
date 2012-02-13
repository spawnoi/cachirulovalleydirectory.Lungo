App.Services = (function(lng, App, undefined) {

	var load_categories = function(){
		lng.Service.Settings.timeout = 2500;
        lng.Service.Settings.dataType = 'json';
        lng.Service.Settings.error = function() {
            console.log('Timeout exceed (500ms):', arguments);
        };

	    var url = 'http://www.letsnode.com:8085/api/cats';
        var parameters = {
			callback: '?'
        };

        lng.Service.json(url, parameters,
            function(response) {
				var cats = response.cats;
		        lng.View.Template.Binding.create('directory_cats_list', 'cats-tmp', cats);
            }
        );
	}

    var load_users_from_cat = function(id_cat, callback) {
        lng.Service.Settings.timeout = 2500;
        lng.Service.Settings.dataType = 'json';
        lng.Service.Settings.error = function() {
            console.log('Timeout exceed (500ms):', arguments);
        };

        var url = 'http://www.letsnode.com:8085/api/users';
        var parameters = {
            id_cat: id_cat,
			callback: '?'
        };

        lng.Service.json(url, parameters,
            function(data) {
				var profiles = data.users;
		        lng.View.Template.Binding.create('list-plain', 'profile-tmp', profiles);
				callback(null, data)
            }
        );
    };
	
    return {
		load_categories : load_categories,
        load_users_from_cat: load_users_from_cat
    }


})(LUNGO, App);