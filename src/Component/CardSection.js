import React from 'react'
import {Card, Button, Col} from 'react-bootstrap';
import cardInfo from './CardSectionInfo/cardInfo'

const CardSetion = () => {
    let mapCardInfo = cardInfo.map(
        (info) => (
            <Col lg={3} xs={12}>
                <Card>
                    <Card.Img variant="top" src={info.image} />

                    <Card.Body>
                        <Card.Title>{info.title}</Card.Title>

                        <Card.Text>{info.text}</Card.Text>

                        <Button variant="primary">{info.location}</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    )

    return mapCardInfo
}

export default CardSetion;