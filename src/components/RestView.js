import { React, useState, useEffect } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import OperatingTime from './OperatingTime'
import Reviews from './Reviews'

function RestView() {

    var [Allrestaurants, setRestaurants] = useState([])

    const fetchRest = async () => {
        const result = await fetch('/restaurants.json')
        result.json().then(data => {
            setRestaurants(data.restaurants)
        })
    }
    const params = useParams()

     const restaurant = Allrestaurants.find(item => item.id == params.id)

    useEffect(() => {
        fetchRest()
    }, [])

    return (
        <div>
            { restaurant ? (
                <Row >
                    <Col lg={6} md={6} className='p-5 pe-5 text-center'>
                        <img id='cal' alt='' className='rounded border border-info' style={{ height: '470px', }} src={restaurant.photograph}></img>
                    </Col>
                    <Col lg={6} md={6} className='ms-0 p-5'>
                        <ListGroup>
                             <ListGroup.Item><h3 className='text-info'><strong>{restaurant.name}</strong></h3></ListGroup.Item>
                            <ListGroup.Item><h4>Cuisine : <strong> {restaurant.cuisine_type}</strong></h4></ListGroup.Item>
                            <ListGroup.Item><h4>Neighborhood : <strong> {restaurant.neighborhood}</strong></h4></ListGroup.Item>
                            <ListGroup.Item><h4>Address : <strong> {restaurant.address}</strong></h4></ListGroup.Item>            
                            <OperatingTime  timeData={restaurant.operating_hours}/> 
                            <Reviews reviewData={restaurant.reviews}/>
                        </ListGroup>
                    </Col>
                </Row>) : ""
            }
        </div>
    )
}

export default RestView