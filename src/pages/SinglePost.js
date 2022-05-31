import Container from "react-bootstrap/Container";
import React from "react";
import {useParams} from "react-router-dom";
import Image from "react-bootstrap/Image";

export default function SinglePost() {
    const postId = useParams().postId;

    const postData = {
        1: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/110/400/400'
        },
        2: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/109/400/400'
        },
        3: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/107/400/400'
        },
        4: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/106/400/400'
        },
        5: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/108/400/400'
        },
        6: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/104/400/400'
        },
        7: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/103/400/400'
        },
        8: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/101/400/400'
        },
        9: {
            description: 'Cras ut tincidunt arcu. Phasellus nisi tortor, mattis eu tortor sed, interdum pellentesque ' +
                'lorem. Curabitur semper congue arcu ac consequat. ' +
                'Nulla sollicitudin massa eu convallis porttitor. Integer sed imperdiet orci. ' +
                'Vivamus maximus non purus tempus porttitor. Curabitur egestas molestie arcu vel iaculis. Class ' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer mi ' +
                'massa, feugiat rutrum tellus nec, consectetur iaculis lectus. Donec a nulla aliquet, tempus magna nec, ' +
                'vehicula sem. Curabitur nec venenatis orci, ut vestibulum diam. Maecenas venenatis justo at sem tristique, ' +
                'non facilisis nunc iaculis. Nunc consequat porttitor massa, in faucibus justo convallis eget. Vestibulum ' +
                'volutpat orci nec sem faucibus, sed pretium urna ultrices.',
            src: 'https://picsum.photos/id/100/400/400'
        },
    };

    return (
        <Container>
            <div className="mt-5">
                <Image style={{minWidth: '25%'}} src={postData[postId].src} rounded className="float-end"/>
                <article>
                    {postData[postId].description}
                </article>
            </div>
        </Container>
    );
}
