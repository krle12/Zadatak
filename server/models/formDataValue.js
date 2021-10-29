import  mongoose  from "mongoose";

const formDataValue = mongoose.Schema({
    values: {}
    
});

const formData = mongoose.model('formData', formDataValue);

export default formData;

