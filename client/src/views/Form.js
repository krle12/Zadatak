import { Button, CardContent, Checkbox, Container, FormControlLabel, Grid, InputLabel, MenuItem, Radio, Select, TextField } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { getFormData, saveFormData } from "../api/api";

export const Form = () => {
    const [formInput, setFormInput] = useState();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const formIput = async () => {
            const data = await getFormData()
            setFormInput(data);
        }
        formIput();

    }, [])

    const handleChange = (event) => {
        setFormData(prevState =>({
            ...prevState,
            [event.target.name]: event.target.value
        }));
      };

      const hanndleSubmit = async (event) => {
        event.preventDefault(); 
        saveFormData(formData).then (() => setFormData({}))      
    }

    const renderFields = (formInput) => {
        return formInput?.map(input => {
            let { Type, Label, Name, Options } = input;
            switch (Type) {
                case 'text':
                    return (
                        <Grid key={Name} item lg={12} xs={12} sm={6}>
                            <TextField label={Label} type={Type} name={Name} variant="outlined" value={formData[Name] ?? ''} fullWidth required onChange={handleChange}></TextField>
                        </Grid>
                    )
                case 'number':
                    return (
                        <Grid  key={Name} item lg={12} xs={12} sm={6}>
                            <TextField label={Label} type={Type} name={Name} variant="outlined" value={formData[Name] ?? ''} fullWidth required onChange={handleChange}></TextField>
                        </Grid>
                    )
                case 'checkbox':
                    return (
                        <Grid key={Name} item lg={12} xs={12} sm={6}>
                            <label>{Label} </label>
                            <Checkbox type={Type} name={Name} variant="outlined"  required onChange={handleChange} value="true" checked={ !!formData[Name]}></Checkbox >
                        </Grid>
                    )
                case 'select':
                    return (
                        <>
                        {Options &&
                        <Grid key={Name} item lg={12} xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-label">{Label}</InputLabel>

                            <Select labelId="demo-simple-select-label" id="demo-simple-select" fullWidth label={Label} name={Name} value={formData[Name] ?? ''} required onChange={handleChange}>
                                { Options.map((option, _idx) => <MenuItem value={option}>{option}</MenuItem>)}
                            </Select>
                        </Grid>}
                        </>
                    )
                case 'radiobutton':
                    return (
                        <Grid key={Name} item lg={12} xs={12} sm={6}>
                            <FormControlLabel name={Name} value="female" control={<Radio />} label={Label} checked={ !!formData[Name]} required onChange={handleChange}/>
                        </Grid>
                    )
                case 'date':
                    return (
                        <Grid key={Name} item lg={12} xs={12} sm={6}>
                            <TextField  type={Type} name={Name} variant="outlined" fullWidth value={formData[Name] ?? ''} required  onChange={handleChange}></TextField>
                        </Grid>
                    )
                default:
                    return (
                        <div>
                            <span>Invalid Field</span>
                        </div>
                    );
                    break;
            }

        })
    }


    return (
        <>
            <Container>
                <CardContent>
                    <h4>Car information</h4>
                    <form onSubmit={hanndleSubmit}>
                        {renderFields(formInput)}
                        <Button type="submit" variant="contained" color="primary" fullWidth>Send</Button>
                    </form>
                </CardContent>
            </Container>


        </>
    )
}

export default Form;