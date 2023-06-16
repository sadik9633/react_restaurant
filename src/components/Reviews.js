import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Reviews({ reviewData }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            
                <Button id='bt' 
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    style={{backgroundColor:"white"}}
                    className='text-info'
                >
                    Reviews
                </Button>
            
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                       { 
                       reviewData.map(item=>(
                       <Card body style={{ width: '100%' }}>
                        <h4><strong>{item.name}</strong></h4>
                        <h6>{item.date}</h6>  
                        <p style={{fontFamily:'Courier New'}}>{item.comments}</p> 
                        </Card>
                       ))
                       }
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default Reviews