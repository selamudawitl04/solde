const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const TutorailSchema = mongoose.Schema({
    title:{
        type:String,
        require:[true, "A Tutorail must have a name"],
        maxlength: [40, 'A tour name must have less or equal then 40 characters'],
        minlength: [4, 'A tour name must have more or equal then 10 characters'],
    },
    description: {
        type: String,
        trim: true  
    },
    published:{
        type:Date
    },
    createdAt:Date,
    updatedAt:Date
})
const TutorailModel = mongoose.model('Tutorail', TutorailSchema);

module.exports = TutorailModel;

