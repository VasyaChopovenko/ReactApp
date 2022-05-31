import React, {useState} from 'react';
import {Container, Col, Row, Card, ListGroup, FormControl} from "react-bootstrap";
import "./Blog.css"
import PostList from "../components/UI/input/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

export default function Blog() {
    const categories = [{name: 'Travel', id: 0}, {name: 'It', id: 1}, {name: 'Life Style', id: 2}, {
        name: 'Health',
        id: 3
    }];
    const [categoryId, setCategoryId] = useState(0);
    const [posts, setPosts] = useState(
        [
            {id: 1, title: 'JavaScript', body: 'Description', categoryId: 0},
            {id: 2, title: 'JavaScript', body: 'Description', categoryId: 0}
        ]
    );

    const [post, setPost] = useState({title: '', body: '', categoryId: 0});

    const onCategoryClicked = (categoryId) => {
        setCategoryId(categoryId);
    };

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: '', categoryId: 0});
    };

    const categorySelectOptions = categories.map(category => (
        <option key={category.id} value={category.id}>{category.name}</option>));

    const categoryOptions = categories.map(category =>
        (<ListGroup.Item key={category.id} active={categoryId === category.id} action
                         onClick={() => onCategoryClicked(category.id)}>{category.name}</ListGroup.Item>)
    );

    return (
        <Container>
            <Row>
                <Col>
                    <form>
                        {/*Керований компонент*/}
                        <MyInput
                            value={post.title}
                            onChange={e => setPost({...post, title: e.target.value})}
                            type="text"
                            placeholder="Назва поста"/>
                        <MyInput
                            value={post.body}
                            onChange={e => setPost({...post, body: e.target.value})}
                            type="text"
                            placeholder="Опис поста"/>
                        <div className="mb-1">
                            <select onChange={e => setPost({...post, categoryId: +e.target.value})} id="category-select"
                                    className="select" aria-label="Default select example">
                                {categorySelectOptions}
                            </select>
                        </div>
                        <MyButton onClick={addNewPost}>Створити пост</MyButton>
                    </form>
                    <PostList posts={posts.filter(post => post.categoryId === categoryId)}
                              title={categories[categoryId].name + ' Posts'}/>
                </Col>
                <Col md="3">
                    <h5 className="text-center mt-5">Категорії</h5>
                    <Card>
                        <ListGroup variant="flush">
                            {categoryOptions}
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
