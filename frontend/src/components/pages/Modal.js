import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch'
    }
}));

export default function LayoutTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <h1>Adding equipment to Respective Society</h1>
                <TextField
                    id="outlined-full-width"
                    label="Product Name"
                    style={{ margin: 8 }}
                    placeholder="Enter Your Product Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Model"
                    style={{ margin: 8 }}
                    placeholder="Enter Model of Your Product Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Description"
                    style={{ margin: 8 }}
                    placeholder="Description"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Quantity"
                    id="outlined-margin-none"
                    style={{ margin: 8 }}
                    placeholder="Quantity"
                    variant="outlined"
                />
                <TextField
                    label="Type"
                    id="outlined-margin-none"
                    style={{ margin: 8 }}
                    placeholder="Type"
                    variant="outlined"
                />
            </div>
        </div>
    );
}
