import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut, Pie } from 'react-chartjs-2'
import { Paper, Container, Box } from '@mui/material'

ChartJS.register(ArcElement, Tooltip, Legend)

function convertData(toconvert) {
    let values = []
    let labels = []
    let backcolor = []
    toconvert.forEach(element => {
        labels.push(element.presidente)
        values.push(element.votos)
        backcolor.push(`rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`)
    })
    return ({ values: values, labels: labels, backcolor: backcolor })
}

export default function App({ data }) {
    const converted = convertData(data)
    const newData = {
        labels: converted.labels,
        datasets: [
            {
                label: 'Numero de votos',
                data: converted.values,
                backgroundColor: converted.backcolor,
                borderColor: converted.backcolor,
                borderWidth: 1
            }
        ]
    }

    return (
        <div>
            <Paper elevation={3} sx={{ my: 5, mx: 5, p: 2 }}>
                <Container sx={{ textAlign: "center", alignContent:"center" }}>
                    <div>
                        <h1>Conteo Votos</h1>
                    </div>
                    <Box sx={{ display: "flex", flexDirection: "row", flexFlow: "wrap", justifyContent: "space-evenly" }}>
                        <div>
                            <Doughnut data={newData} />
                        </div>
                        <div>
                            <Pie data={newData} />
                        </div>
                    </Box>
                </Container>
            </Paper>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/getresults', { method: 'GET' })
    const data = await res.json()
    return ({ props: { data } })
}
