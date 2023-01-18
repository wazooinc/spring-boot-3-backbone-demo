import Backbone from 'backbone';
import _ from 'underscore';
import {templateFromUrl} from '../utils'

const options = {
    el: '#root',

    initialize: function () {

        this.model = new Backbone.Model({message: ''})
        this.listenTo(this.model, 'change', this.render);

        this.server();
        this.render();
    },

    server: function () {
        const self = this;
        fetch('/api/v1/hello')
            .then((response) => response.json())
            .then((data) => {
                self.model.set({message: data.message})
            })
    },

    render: async function () {
        const template = await templateFromUrl('/about.html', this.model.toJSON());
        this.$el.html(template);

        return this;
    }
};

export default Backbone.View.extend(options);