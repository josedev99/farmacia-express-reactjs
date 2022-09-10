import connect from "../config/dbConnect.js"

export const VentaController = {
    getVenta: (req,res)=>{
        connect.query("SELECT * FROM venta", (err,result)=>{
            res.status(200).json(result)
        })
    },
    getVentaById: (req,res)=>{
        const {id} = req.params
        connect.query("SELECT * FROM venta WHERE id=?",id, (err,result)=>{
            res.status(200).json(result)
        })
    },
    storeVenta: (req,res)=>{
        try{

            connect.query("INSERT INTO venta set ?",req.body, (err,result)=>{
                res.status(201).json({
                    "status":"inserted data"
                })
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    },
    updateVentaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("UPDATE venta SET ? WHERE id=?",[req.body,id], (err,result)=>{
                res.status(200).json({
                    "status": "updated data"
                })
            })
        }catch{
            res.status(500).json({
                "status": "error server"
            })
        }
    },
    deleteVentaById: (req,res)=>{
        try{
            const {id} = req.params
            connect.query("DELETE FROM venta WHERE id=?",id, (err,result)=>{
                res.json(result)
            })
        }catch{
            res.status(500).json({
                "status": "server error"
            })
        }
    }
} 