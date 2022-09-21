import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link, useHistory, useParams} from 'react-router-dom'



const View = () => {

    const [stock,setStock]=useState({
        name:"",
        nameType:"",
        quantity:"",
        price:"",
        sold:"",
        curent:"",
        over:"",
        date:""
        
    });

    const {id} = useParams();

    useEffect(() =>{
        loadStock();
    },[])

    const loadStock = async () =>{
        const res = await axios.get(`http://localhost:2500/user/${id}`);
        setStock(res.data);
    };
    useHistory();

  return (
    <div className="container">
        <h1 className="display-4 ">Dashboard </h1>
      
        <ul className="list-group w-50">

            <li className="list-group-item mt-4">Name: {stock.name}</li>
            <li className="list-group-item mt-4">Transaction Type: {stock.nameType}</li>
            <li className="list-group-item mt-4">Quantity: {stock.quantity}</li>
            <li className="list-group-item mt-4">Amount: {stock.price}</li>
            <li className="list-group-item mt-4">Sold Amount: {stock.sold}</li>
            <li className="list-group-item mt-4">Current Amount: {stock.curent}</li>
            <li className="list-group-item mt-4">Over all Profit: {stock.over}</li>
            <li className="list-group-item mt-4">Date: {stock.date}</li>

            <Link className="btn btn-primary" to="/">
            Back to Home
        </Link>
            
        </ul>
    </div>
  )
}

export default View;