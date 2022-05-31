import {Col} from "react-bootstrap";
import React from "react";

export default <Col md="9">
    <a href="/posts/4" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/927/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Maecenas ornare lacinia quam nec dapibus. Morbi vel interdum enim.</h5>
            <p>
                Cras id metus id lacus lacinia cursus id at arcu. Cras fringilla at lorem id ullamcorper.
            </p>
        </div>
    </a>

    <a href="/posts/5" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/1072/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Sed efficitur lorem ut ex interdum porttitor quis sed magna. </h5>
            <p>
                Curabitur convallis facilisis tellus. Duis eget enim ullamcorper dolor iaculis dignissim ac vel lorem.
            </p>
        </div>
    </a>

    <a href="/posts/6" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/266/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Pellentesque sed tempus eros.</h5>
            <p>
                Sed et egestas arcu, non vehicula quam. Nunc ligula mauris, pharetra sit amet interdum vel, posuere vel leo.
            </p>
        </div>
    </a>
</Col>;
