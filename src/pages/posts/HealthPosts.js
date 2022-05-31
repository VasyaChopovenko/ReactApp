import {Col} from "react-bootstrap";
import React from "react";

export default <Col md="9">
    <a href="/posts/7" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/55/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Vivamus accumsan metus odio, sed ullamcorper urna scelerisque et.</h5>
            <p>
                Morbi nec placerat massa. In viverra in est at posuere. Vestibulum et tortor nisi.
            </p>
        </div>
    </a>

    <a href="/posts/8" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/67/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Phasellus eget ultrices lorem. Phasellus varius neque orci.</h5>
            <p>
                Aenean et velit hendrerit, pretium felis in, efficitur nibh. Aenean consectetur nulla eget sapien
                maximus, sit amet molestie eros sodales.
            </p>
        </div>
    </a>

    <a href="/posts/9" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/89/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Sed volutpat lobortis sollicitudin.</h5>
            <p>
                Aenean lobortis non massa at dapibus. In hac habitasse platea dictumst. Suspendisse potenti. Proin
                tincidunt id ante lobortis tempor.
            </p>
        </div>
    </a>
</Col>;
