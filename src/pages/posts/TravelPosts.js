import {Col} from "react-bootstrap";
import React from "react";

export default <Col md="9">
    <a href="/posts/1" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/447/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Class aptent taciti sociosqu.</h5>
            <p>
                Curabitur a diam ligula. Ut hendrerit id ante ac bibendum. Vivamus imperdiet suscipit neque quis finibus.
            </p>
        </div>
    </a>

    <a href="/posts/2" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/991/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Etiam auctor lacinia sollicitudin.</h5>
            <p>
                Quisque eget dolor sit amet lacus maximus lobortis nec vitae elit. Phasellus sed elementum lorem, et sodales nulla.
            </p>
        </div>
    </a>

    <a href="/posts/3" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/927/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Phasellus lobortis gravida ullamcorper.</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum porttitor eros, et venenatis quam pretium id.
            </p>
        </div>
    </a>
</Col>;
