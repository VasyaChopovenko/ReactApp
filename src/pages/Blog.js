import React, {Component, useState} from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";
import "./Blog.css"
import TravelPosts from "./posts/TravelPosts";
import HealthPosts from "./posts/HealthPosts";
import LifeStylePosts from "./posts/LifeStylePosts";
import ItPosts from "./posts/ItPosts";

export default function Blog() {
    const postsByCategories = [TravelPosts, ItPosts, LifeStylePosts, HealthPosts];

    const [categoryId, setCategoryId] = useState(0);

    const onCategoryClicked = (categoryId) => {
        setCategoryId(categoryId);
    };

    return (
        <Container>
            <Row>
                {postsByCategories[categoryId]}
                <Col md="3">
                    <h5 className="text-center mt-5">Категорії</h5>

                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item active={categoryId === 0} action
                                            onClick={() => onCategoryClicked(0)}>Travel</ListGroup.Item>
                            <ListGroup.Item active={categoryId === 1} action
                                            onClick={() => onCategoryClicked(1)}>It</ListGroup.Item>
                            <ListGroup.Item active={categoryId === 2} action onClick={() => onCategoryClicked(2)}>Life
                                style</ListGroup.Item>
                            <ListGroup.Item active={categoryId === 3} action
                                            onClick={() => onCategoryClicked(3)}>Health</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                {/*<Card className="mt-3 bg-light">*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Slide widget</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            Lorem*/}
                {/*        </Card.Text>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
            </Row>
        </Container>
    );
}
