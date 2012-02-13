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

    var mockScrolls = function() {
        var markup = '';
        for (var i=0; i < 32; i++) {
            markup += '<li>'+i+'</li>';
        }

        lng.View.Scroll.update('scroll_vertical', markup);
        lng.View.Scroll.update('scroll_horizontal', markup);
    };

    return {
        mockScrolls: mockScrolls
    }


})(LUNGO, App);