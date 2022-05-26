import Header from '../mainComp/Header'
import Tarjeta from '../mainComp/Tarjeta'
import {Box, Paper, Container} from '@mui/material'
import { createTheme } from '@mui/material/styles';


function index({names}) {
    return(
        <div>
            <Header title="ELECCIONES 2022"/>
            <Container sx={{textAlign:"center"}}>
                <div>
                    <h1>ELECCIONES 2022-2026</h1>
                </div>
                <div>
                </div>
            </Container>
            <Paper  elevation={0} sx={{my:5,mx:5}}>
                <Box sx={{backgroundColor: 'warning.light',display:"flex",flexDirection:"row",flexFlow:"wrap",justifyContent:"space-evenly" }}>
                    {names.map((item) => (
                        <Tarjeta
                            presidente={item.presidente} vicepresidente={item.vicepresidente}
                            presidenteImage={item.presidentImage}
                            vicepresidenteImage={item.vicepresidenteImage}
                            id={item.id}
                            key={item.id}
                        />
                    ))}
                </Box>
            </Paper>
        </div>
    )
}


export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/getcandidates',{method:'GET'})
    const names = await res.json()
    return {props:{names}}
}

export default index