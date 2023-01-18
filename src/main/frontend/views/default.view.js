import Backbone from 'backbone';
import _ from 'underscore';
import {templateFromUrl} from '../utils.js'

const viewOptions = {
    el: '#root',

    initialize: function () {

        this.model = new Backbone.Model({message: 'hello world', count: 0})
        this.listenTo(this.model, 'change', this.render);

        this.render();
    },

    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        let temp = this.model.get('count')
        temp++

        this.model.set({count: temp})
    },

    render: async function () {
        const template = await templateFromUrl('/default.html', this.model.toJSON());
        this.$el.html(template);

        return this;
    }
};

export default Backbone.View.extend(viewOptions);
