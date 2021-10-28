import { Button, CardContent, Checkbox, Container, FormControlLabel, Grid, InputLabel, MenuItem, Radio, Select, TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from 'react';

export const Form = () => {
    const [formInput, setFormInput] = useState();

    useEffect(() => {
        const formIput = async () => {
            const { data } = await axios.get("http://localhost:5000/api/form");
            setFormInput(data);
        }
        formIput();

    }, [])



    const renderFields = (formInput) => {
        return formInput?.map(input => {
            let { Type, Label, Name, Options } = input;
            switch (Type) {
                case 'text':
                    return (
                        <Grid item lg={12} xs={12} sm={6}>
                            <TextField label={Label} type={Type} name={Name} variant="outlined" fullWidth required ></TextField>
                        </Grid>
                    )
                case 'number':
                    return (
                        <Grid item lg={12} xs={12} sm={6}>
                            <TextField label={Label} type={Type} name={Name} variant="outlined" fullWidth required ></TextField>
                        </Grid>
                    )
                case 'checkbox':
                    return (
                        <Grid item lg={12} xs={12} sm={6}>
                            <label>{Label} </label>
                            <Checkbox type={Type} name={Name} variant="outlined" fullWidth required ></Checkbox >
                        </Grid>
                    )
                case 'select':
                    return (
                        <Grid item lg={12} xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-label">{Label}</InputLabel>

                            <Select labelId="demo-simple-select-label" id="demo-simple-select" fullWidth label={Label} required>
                                {Options.map((option, _idx) => <MenuItem value={10}>{option}</MenuItem>)}
                            </Select>
                        </Grid>
                    )

                case 'radiobutton':
                    return (
                        <Grid item lg={12} xs={12} sm={6}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" required/>
                        </Grid>
                    )
                case 'date':
                    return (
                        <Grid item lg={12} xs={12} sm={6}>
                            <TextField  type={Type} name={Name} variant="outlined" fullWidth required ></TextField>
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

    const hanndleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
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