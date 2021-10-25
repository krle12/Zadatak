import  mongoose  from "mongoose";

const formDataValue = mongoose.Schema({
    title:  { type: String}  ,
    subtitle: { type: String },
    mileage: { type: Number },
    horsepower: { type: Number },
    accessories: { type: String},
    description: { type: String },
    
});

const formData = mongoose.model('formData', formDataValue);

export default formData;