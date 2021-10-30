import { useMediaQuery } from "@material-ui/core";
import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5000/',
  });


export const getFormData = async () => {
    const { data } = await instance.get("api/form");
    return data;
}

export const saveFormData  = async (formData) => {
   const { data } = await instance.post("api/form/insert", formData)
    return data;
}
