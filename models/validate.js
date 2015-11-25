var validate = function(type, data) {
    var model = models[type];
    if (!data) {
        return {success: false, message: 'Request contained no data'};
    }
    if (!model) {
        return {success: false, message: 'Missing data type in database'};
    }

    for (property in model) {
        if (!model.hasOwnProperty(property) && data.hasOwnProperty(property)) {
            return {success: false, message: 'Missing ' + property + 'in API definition'};
        } else if ((model.hasOwnProperty(property)
            && model[property].required) && !data.hasOwnProperty(property)) {
            return {success: false, message: 'Missing required field: ' + property};
        }
    }
    return true;
}

var models = {
    user: {
        display_name: {
            required: true
        },
        first_name: {
            required: true
        },
        last_name: {
            required: true
        },
        date_of_birth: {
            required: true
        }
    }
};

module.exports = validate;