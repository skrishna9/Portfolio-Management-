import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'


const AddStocks = () => {
    let history = useHistory();
    const [stock, setStock] = useState({
        name: "",
        nameType: "",
        quantity: "",
        price: "",
        sold: "",
        curent: "",
        over: "",
        date: ""

    })
    const { name, nameType, quantity, price, sold, curent,over, date } = stock;
    const onInputChange = e => {
        setStock({ ...stock, [e.target.name]: e.target.value })
    }



    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:2500/user", stock);
        history.push("/");

    }


    return (
        <div className='container1'>
            
            <form className="mt-5"
                onSubmit={e => onSubmit(e)}>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12" >
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Stock Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <select class="form-control" name="nameType" value={nameType} onChange={e => onInputChange(e)}>
                            <option>Select</option>
                            <option>Buy</option>
                            <option>Sell</option>
                        </select>
                    </div>



                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Enter the quantity"
                            name="quantity"
                            value={quantity}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Enter the price"
                            name="price"
                            value={price}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Enter the Sold Amount"
                            name="sold"
                            value={sold}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"
                            class="form-control"
                            placeholder="Enter the Current Amunt"
                            name="curent"
                            value={curent}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <input

                            type="number"
                            placeholder="Enter the Profit or Loss"
                            class="form-control"
                            name="over"
                            value={over}
                            onChange={e => onInputChange(e)}

                        />
                    </div>

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="date"
                            class="form-control "
                            placeholder="Enter the date"
                            name="date"
                            value={date}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-control mt-4"  >
                        <button type="submit" className="btn btn-primary  form-control form-control-lg" >AddStock</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default AddStocks;