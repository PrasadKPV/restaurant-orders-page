import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Header = ({count}) => {
  return (
    <div>
        <nav className = 'navbar navbar-dark bg-dark'>
              <p className='navbar-brand'> Welcome to our Restaurant !</p>
            <button className='btn btn-dark opacity-100'>
                <Link to ='./orders'style={{color:'white',textDecoration:'none'}}> Orders </Link><span className='badge bg-outline-dark'>{count}</span>
            </button>
        </nav>  
    </div>
  )
}
const mapStateToProps = state =>({
  count : state.orderreducer.length
})

export default connect(mapStateToProps)(Header)