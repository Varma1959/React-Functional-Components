import {TextField, Button} from '@material-ui/core';

export const Addnote =()=> {
    return(
        <div>
            <TextField id="standard-basic" label="Type Notes" />
            <Button variant="contained"> Add </Button>
        </div>
    )
}
