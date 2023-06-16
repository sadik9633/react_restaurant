
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingTime({timeData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button id='bt' variant="info" onClick={handleShow}>
                Operating Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className='text-info'><strong>OPENING HOURS</strong></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {timeData.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {timeData.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday : {timeData.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {timeData.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {timeData.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {timeData.Saturday}</ListGroup.Item>
                        <ListGroup.Item>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {timeData.Sunday}</ListGroup.Item>
                    </ListGroup>
                  </Modal.Body>

            </Modal>
        </>
    )
}

export default OperatingTime