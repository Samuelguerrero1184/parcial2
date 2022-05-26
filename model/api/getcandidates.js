import executeQuery from "../../DBConnection/dbconn"

export default async function handler(req,res){
    const {method} = req
    if (method === 'GET') {
        const result = await executeQuery({
            query: 'SELECT * FROM candidatosA00365567'
        })
        res.status(200).json(result)
    }
}