import React from 'react';
import {connect} from 'react-redux'
import Header from './Container/Header';


const Orders = ({list}) => {
  return (
    <div>
      <Header/>
      <center>
            {list.length > 0 ?
            <div className='container'>
                <div className='row'>
                    {list.map((item)=>(
                        <div className='col-md-3' style={{padding:'10px'}} key={item.id}>
                            <div className='card w-70 h-85' style={{width:'18rem',padding:'3px'}}>
                                <img src={item.url} alt='FoodItems' className='card-img-top'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <div className='card-text'>Billing Amount ₹{item.prize}</div>
                                    <p> Your table number { item.table_number} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            :
            <div className='h4'>
              No Order place yet
            </div>
            }
        </center>
    </div>
  )
}
const mapStateToProps = state => ({
  list:state.orderreducer,
})

export default connect(mapStateToProps)(Orders)