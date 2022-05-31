import {Col} from "react-bootstrap";
import React from "react";

export default <Col md="9">
    <a href="/posts/7" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/22/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Vivamus mollis enim elit, ut dignissim libero posuere aliquam. </h5>
            <p>
                Ut fringilla felis elit, id maximus metus consequat vitae. Aliquam nec elit posuere, commodo nisl a, mattis justo.
            </p>
        </div>
    </a>

    <a href="/posts/8" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/24/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Curabitur vel risus sed lectus cursus lobortis vel vitae mauris. </h5>
            <p>
                Nam consectetur, arcu sed laoreet ultrices, ligula orci malesuada massa, ac rhoncus urna ex at eros.
            </p>
        </div>
    </a>

    <a href="/posts/9" className="d-flex align-items-center m-2 blog-post">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3 p-3"
                src="https://picsum.photos/id/26/300/300"
                alt="photo"/>
        </div>
        <div className="flex-grow-1">
            <h5>Suspendisse tincidunt tellus vitae odio tristique.</h5>
            <p>
                Donec pretium dolor urna. Pellentesque erat purus, vulputate ut venenatis eget, vestibulum maximus leo.
            </p>
        </div>
    </a>
</Col>;
