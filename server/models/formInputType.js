import  mongoose  from "mongoose";

const formInputType = mongoose.Schema({
    label: {type: String,},
    input: {type: String},
    value: {value: String},
});

const formInput = mongoose.model('formInput', formInputType);

export default formInput;