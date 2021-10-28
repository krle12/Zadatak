import  mongoose  from "mongoose";

const formInputType = mongoose.Schema({
    label: {type: String,},
    type: {type: String},
    name: {value: String},
    options: [],
});

const formInput = mongoose.model('formInput', formInputType);

export default formInput;