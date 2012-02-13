App.View = (function(lng, App, undefined) {

    lng.View.Template.create(
        'profile-tmp',
        '<li class="selectable {{anchor}}">\
                <img src="{{image}}" />\
                <div class="onright bubble yellow">{{votes}}</div>\
                {{name}}\
                <small>{{bio}}</small>\
            </a>\
        </li>'
    );

    lng.View.Template.create(
        'cats-tmp',
        '<li id="{{id}}" class="selectable {{anchor}}">\
                <div class="onright bubble yellow">{{users_count}}</div>\
                {{name}}\
                <small>{{descr}}</small>\
            </a>\
        </li>'
    );

    return {

    }


})(LUNGO, App);