var App = (function(lng, undefined) {

    lng.App.init({
        name: 'CachiruloValley',
        version: '0.0.1'
    });

    var _getEnvironmentFromQuoJS = (function() {
        var environment = lng.Core.environment();
        if (environment.isMobile) {
            alert('Your phone is ' + environment.os.name + ' (' + environment.os.version + ')');
        }
    })();

    return {

    };

})(LUNGO);