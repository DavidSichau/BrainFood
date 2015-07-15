/**
 * Created by dsichau on 01.07.15.
 */

/**
 * Meteor.startup runs when the meteor application successfully started
 */
Meteor.startup(function () {

    /**
     * The config file for the alert package
     */
    sAlert.config({
        effect: '',
        position: 'top',
        timeout: 2000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });

});