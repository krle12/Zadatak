import axios from "axios";
import { useEffect, useState } from 'react';


export const Form = () => {
  const[formInput, setFormInput] = useState();

    useEffect(() => {
        const formIput = async () =>{
            const {data} = await axios.get("http://localhost:5000/api/form");
            setFormInput(data);
        }
        formIput();
    },[])

    return (
        <>
        <div>
            <form>
                {formInput?.map((input,_idx) => {
                    return(
                        <div key={_idx}>
                            <label>{input.Label}</label>
                            <input type={input.Type} name={input.Name}></input>
                        </div>
                    )
                })}
            </form>
        </div>
        </>
    )
}

export default Form;