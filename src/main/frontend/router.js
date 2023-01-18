// declare our views that we'll route to
import Backbone from 'backbone';
import aboutView from './views/about.view';
import defaultView from './views/default.view';

// Declare our options we'll use to extend the Router
const routerOptions = {

    routes: {
        "about": "aboutRoute",
        "*action": "defaultRoute"
    },

    aboutRoute: () => {
        new aboutView();
    },

    defaultRoute: () => {
        new defaultView();
    },


    /*
    initialize: function () {
        console.log('router initialize');
    },*/
};

// export our extended Router object
export default Backbone.Router.extend(routerOptions);