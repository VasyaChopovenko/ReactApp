import React, {Component} from 'react';
import {Container, Tab} from 'react-bootstrap'
import {Col, Row, Nav} from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Program</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Library</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img className="d-block w-50 float-start m-2"
                                         src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                         alt="picture one"/>
                                    <p className="m-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet porta
                                        mauris a congue. Curabitur consectetur felis est, et egestas sem convallis id.
                                        Ut odio nisi, facilisis eu tortor non, rhoncus pharetra massa. Vestibulum eget
                                        feugiat neque. Ut auctor finibus sagittis. Nunc sit amet sapien semper leo
                                        sollicitudin dapibus eget venenatis diam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="d-block w-75 m-auto mt-2"
                                         src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                         alt="picture two"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet porta
                                        mauris a congue. Curabitur consectetur felis est, et egestas sem convallis id.
                                        Ut odio nisi, facilisis eu tortor non, rhoncus pharetra massa. Vestibulum eget
                                        feugiat neque. Ut auctor finibus sagittis. Nunc sit amet sapien semper leo
                                        sollicitudin dapibus eget venenatis diam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet porta
                                        mauris a congue. Curabitur consectetur felis est, et egestas sem convallis id.
                                        Ut odio nisi, facilisis eu tortor non, rhoncus pharetra massa. Vestibulum eget
                                        feugiat neque. Ut auctor finibus sagittis. Nunc sit amet sapien semper leo
                                        sollicitudin dapibus eget venenatis diam.
                                    </p>
                                    <img className="d-block w-75 m-auto mt-2"
                                         src="https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                                         alt="picture three"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img className="d-block w-75 mt-2"
                                         src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJhbWV3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                         alt="picture fourth"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet porta
                                        mauris a congue. Curabitur consectetur felis est, et egestas sem convallis id.
                                        Ut odio nisi, facilisis eu tortor non, rhoncus pharetra massa. Vestibulum eget
                                        feugiat neque. Ut auctor finibus sagittis. Nunc sit amet sapien semper leo
                                        sollicitudin dapibus eget venenatis diam.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img className="d-block w-50 float-end mt-2"
                                         src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                         alt="picture fifth"/>
                                    <p className="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet porta
                                        mauris a congue. Curabitur consectetur felis est, et egestas sem convallis id.
                                        Ut odio nisi, facilisis eu tortor non, rhoncus pharetra massa. Vestibulum eget
                                        feugiat neque. Ut auctor finibus sagittis. Nunc sit amet sapien semper leo
                                        sollicitudin dapibus eget venenatis diam.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
