import * as React from 'react';
import { useRouter } from 'next/router'
import { Card, Stack, Button, CardActions, Alert, AlertTitle, Snackbar } from '@mui/material'

function Tarjeta(props) {
    const [open, setOpen] = React.useState(false);
    const router = useRouter()

    const handleClick = async () => {
        setOpen(true);
        fetch(`http://localhost:3000/api/votar/${props.id}`,{method:'POST'})
        setTimeout(() => { router.push("/results")},3000)
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    if(props.presidente != props.vicepresidente){
        return (
            <Card variant="outlined" sx={{ maxWidth: 500, my: 2 ,boxShadow: 10 }}>
                <Stack direction="row">
                    <div>
                        <div>
                            <img
                                src={props.presidenteImage}
                                style={{ width: 150, height: 180, objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <div>
                                <h5>PRESIDENTE</h5>
                            </div>
                            <div>
                                <h5>{props.presidente}</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img
                                src={props.vicepresidenteImage}
                                style={{ width: 150, height: 180, objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <div>
                                <h5>VICEPRESIDENTE</h5>
                            </div>
                            <div>
                                <h5>{props.vicepresidente}</h5>
                            </div>
                        </div>
                    </div>
                </Stack>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="large" color="success" variant="outlined" onClick={handleClick}>VOTAR</Button>
                </CardActions>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message ="Voto Registrado">
                </Snackbar>
            </Card>
        )
    }else{
        return (
            <Card variant="outlined" sx={{ maxWidth: 400, my: 2 ,border: 5 ,borderColor: 'error.main',boxShadow: 10}}>
                <Stack direction="row">
                    <div>
                        <div>
                            <img
                                src={props.presidenteImage}
                                style={{ width: 400, height: 180, objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <div>
                                <h1>{props.presidente}</h1>
                            </div>
                        </div>
                    </div>
                </Stack>
                <CardActions sx={{boxShadow: 1,maxWidth: 400,justifyContent: "center"}}>
                    <Button color = "error" variant="contained" onClick={handleClick} >VOTAR</Button>
                </CardActions>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message="Voto Registrado">

                </Snackbar>
            </Card>
        )
    }
}

export default Tarjeta