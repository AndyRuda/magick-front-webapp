"use client"
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Sidebar(): JSX.Element {
    return (
        <>
            <Container className="px-0" style={{ height: '90vh' }} fluid>
                <Row className="h-100 w-100 mx-0">
                    <Col className="text-white bg-info m-1 pe-0">
                        <h1>hola</h1>
                    </Col>
                </Row>
            </Container>

        </>
    )
}