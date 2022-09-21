import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();

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
    const { name, nameType, quantity, price, sold, curent, over, date } = stock;
    const onInputChange = e => {
        setStock({ ...stock, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadStock()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:2500/user/${id}`, stock);
        history.push("/");

    }

    const loadStock = async () => {
        const result = await axios.get("http://localhost:2500/user/" + id)
        setStock(result.data)
    }

    return (
        <div className='container2 mt-6'>
            <h1 className="text-center">EditStock</h1>
            <form className="mt-5"

                onSubmit={e => onSubmit(e)}>
                <div className="row ">
                    <div class="mb-3 col-lg-6 col-md-6 col-12" >
                        <input
                            type="text"
                            placeholder="Enter the Stock Name"
                            class="form-control"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <select className="form-control" name="nameType" value={nameType} onChange={e => onInputChange(e)}>
                            <option>Select</option>
                            <option>Buy</option>
                            <option>Sell</option>
                        </select>
                    </div>



                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"

                            placeholder="Enter the quantity"
                            class="form-control"
                            name="quantity"
                            value={quantity}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"

                            placeholder="Enter the price"
                            class="form-control"
                            name="price"
                            value={price}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"

                            placeholder="Enter the Sold Amount"
                            class="form-control"
                            name="sold"
                            value={sold}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="number"

                            placeholder="Enter the Current Amount"
                            class="form-control"
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

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <input
                            type="date"
                            placeholder="Enter the date"
                            class="form-control"
                            name="date"
                            value={date}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="form-control mt-4" >
                        <button className="btn btn-warning  form-control form-control-lg" type="submit">UpdateStock</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default EditUser;