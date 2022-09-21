const express = require('express');
const router = express.Router();
const stock =require("../models/addSchema");



// router.get("/",(req,resp)=>{
//     console.log("connect");
// })
router.post("/register",async(res,resp)=>{
  

    //from fronted

    const {name,nameType,quantity,price,sold,curent,over,date} = res.body;

    if(!name  || !nameType || !quantity || !price || !sold || !curent || !over || !date ){
        resp.status(404).json("please fill the data");
    }
    try{
            const prestock = await stock.findOne({name:name})
            console.log(prestock);
            if(prestock){
                resp.status(404).json("this data is already present in database")
            } else{
                //Object destructuring 
                const addStocks = new stock({
                    name,nameType,quantity,price,sold,curent,over,date
                });
                await addStocks.save();

                resp.status(201).json(addStocks)
                console.log(addStocks);
                
            }
    } catch(err) {
        resp.status(404).json(err)
    }


})


module.exports =router;
