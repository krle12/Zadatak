import express  from "express";
import formDataValue from "../models/formDataValue.js"
import formInputType from "../models/formInputType.js"


const router = express.Router();

router.post("/insert", async (req, res) => {
   const formData = new formDataValue({
       values: req.body
   })

    formData.save(function (err, Data) {
        if (err) {
            console.log(err);
        } else {

            res.json(Data);
        } 
    })
});

router.get("/", async (req, res, next) => {
   try{
       const formInput = await formInputType.find({})
       res.send(formInput)
   } catch(err) {
       console.log(err);
   }
})

export default router;