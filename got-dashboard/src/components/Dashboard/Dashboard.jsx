import React, { useEffect, useState } from 'react';

//components
import Books from '../Books/Books'

//CSS
import './dashboard.css'

const Dashboard = ({data}) => {

    return(
        <div className='dashboard-container'>
            <Books books={data}/>
        </div>
    )
}

export default Dashboard