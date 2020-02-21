const mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');


const PetSchema = new mongoose.Schema({
    pet: {
        type: String,
        required: [true, "You must name the pet."],
        minlength: [3, "Pet name must be at least 3 characters."],
        unique: [true, "This pet name already exists."]
    },
    type: {
        type: String,
        required: [true, "You must tell us your pet type."],
        minlength: [3, "Type must be at least 3 characters."]
    },
    description: {
        type: String,
        required: [true, "You must add a description."],
        minlength: [3, "Description must be at least 3 characters long."]
    },
    skill1: {
        type: String,
        required: [false]
    },
    skill2: {
        type: String,
        required: [false]
    },
    skill3: {
        type: String,
        required: [false]
    }

}, {timestamps:true});

PetSchema.plugin(uniqueValidator);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;