import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


function Table() {
    return (
            <Container style={{ height: '90vh' }} fluid>
                <Row className="h-50">
                    <Col className="text-white bg-info m-1">1</Col>
                    <Col className="text-white bg-info m-1">2</Col>
                </Row>
                <Row className="h-50">
                    <Col className="text-white bg-info m-1">3</Col>
                    <Col className="text-white bg-info m-1">4</Col>
                </Row>
            </Container>
    )
}
export default Table;