import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restdata}) {
  return (
    <>
   <Link to={`/view-restuarant/${restdata.id}`} style={{textDecoration:'none',color:'white',textAlign:'center'}}>
        <Card id='cal' className='rounded border border-info' style={{ width: '18rem' }}>
              <Card.Img style={{height:'350px'}} variant="top" src={restdata.photograph} />
              <Card.Body>
                <Card.Title><h5 className='text-info'><strong>{restdata.name}</strong></h5></Card.Title>
                <Card.Text>
                  <p>Cuisinetype&nbsp;:&nbsp;&nbsp;<strong>{restdata.cuisine_type}</strong></p>
                  <p>Neighborhood&nbsp;:&nbsp;&nbsp;<strong>{restdata.neighborhood}</strong></p>
                </Card.Text>
                
              </Card.Body>
            </Card>
   </Link>
</>
  )
}

export default Restcard