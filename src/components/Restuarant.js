import { React, useEffect, useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restuarant() {
    
    // state to hold data from api   
    var [restaurantList, setRestaurant] = useState([])
    
    // funcatin call api
    const fetchData = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => {
            setRestaurant(data.restaurants)
        })
    }

    useEffect(() => { 
        fetchData() 
    },[])

    return (
        <Row>
          {
           restaurantList.map(item=>(
          <Col className='p-5' lg={4} md={6}>
               <Restcard restdata={item}></Restcard>         
          </Col>           
          ))
          }        
        </Row>
    )
}

export default Restuarant