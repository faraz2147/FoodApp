import React from 'react'

const Desserts=({dessert ,handleUpdate})=> {
    return (
        <div className="row mt-4 ">
        {dessert.map(({img,name,rates,price},index) => (
            <div className="col-4 mb-3">
    <div class="card" >
        <img className="card-img-top" src={img} height="250" width="150" />
        <div className="card-body">
        <h4>{name}</h4>
            <div className="d-flex justify-content-between">
                <div >
        <i className="fa fa-star-o bg-success">{rates.rating}</i>
                </div>
        <div >{rates.review}</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
        <div>{price}</div>
                <button onClick={(e)=>handleUpdate(e,index)} id="dessert" className="bg-warning btn-rounded btn-center"><i className="fa fa-shopping-cart"></i>Order</button>
            </div>
        </div>
    </div>
    </div>
    ))}
    </div>
    )
}

export default Desserts;
