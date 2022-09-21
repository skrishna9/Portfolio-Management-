import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {FaEye, FaPencilAlt,FaTrashAlt} from 'react-icons/fa'
const ListItem = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        loadusers();
    }, []);

    const loadusers = async () => {
        const result = await axios.get("http://localhost:2500/user");
        setUser(result.data.reverse());
    }

    const deleteStock =async id =>{
        await axios.delete(`http://localhost:2500/user/${id}`);
        loadusers();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <h1 className='text-center md-6'>List of Stocks</h1>
                <table class="table border shadow">
                    <thead className='bank'>
                        <tr>
                            <th scope="col">SN</th>
                            <th scope="col">Name</th>
                            <th scope="col">Transaction Type</th>
                            <th scope="col">Quality</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Transaction Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                       {
                        user.map((users,index)=>(
                            <tr>
                            <th scope='row'>{index +1}</th>
                            <td>{users.name}</td>
                            <td>{users.nameType}</td>
                            <td>{users.quantity}</td>
                            <td>{users.price}</td>
                            <td>{users.date}</td>
                            <td className="d-flex justify-content-between">
                                <Link class="btn btn-secondary mr-10"to={`/View/edit/${users.id}`}><FaEye /></Link>
                                <Link class="btn btn-outline-primary mr-10" to={`/stock/edit/${users.id}`}><FaPencilAlt /></Link>
                                <Link class="btn btn-danger mr-10"onClick={()=> deleteStock(users.id)}><FaTrashAlt /></Link>

                            </td>
                    
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListItem;
