import executeQuery from "../../lib/dbconn"

export default async function handler(req,res){
    const {method} = req
    if (method === 'GET') {
        const result = await executeQuery({
            query: 'SELECT presidente, votos FROM candidatosA00365567'
        })
        res.status(200).json(result)
    }
}