let myApp = require('../../dist/app').default;

module.exports = {

    friendlyName : 'Application',

    description : 'Run the app!',

    inputs : {
        some_json : {
            description : 'Some json in a specific format.',
            type : 'json',
            custom : value => {
                const json = JSON.parse(value);
                return _.isObject(json) && _.isObject(json.subjson) && _.isNumber(json.subjson.somenumber);
            },
            required : true,
        }
    },

    exits : {
        success : {
            responseType : ''
        }
    },

    fn : (inputs, exits) => {
        myApp();
        return exits.success({ your_json : inputs.some_json });
    },

};
