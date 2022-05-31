import {Container} from "react-bootstrap";
import React from "react";
import {useParams} from "react-router-dom";
import team1 from "../assets/team_1.jpg"
import team2 from "../assets/team_2.jpg"
import team3 from "../assets/team_3.jpg"
import {Image} from "react-bootstrap"

export default function AboutTeam() {
    const teamId = useParams().teamId;

    const teamData = {
        1: {
            title: 'Developers',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining ' +
                'essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ' +
                'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
                'including versions of Lorem Ipsum.',
            imgPath: team1
        },
        2: {
            title: 'Природознавці',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining ' +
                'essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ' +
                'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
                'including versions of Lorem Ipsum.',
            imgPath: team2
        },
        3: {
            title: 'Маркетологи',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
                'It has survived not only five centuries, but also the leap into electronic typesetting, remaining ' +
                'essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ' +
                'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker ' +
                'including versions of Lorem Ipsum.',
            imgPath: team3
        },
    };

    return (
        <Container>
            <div className="d-flex flex-column align-items-center mt-2">
                <Image style={{width: '30rem'}} className="rounded-2" src={teamData[teamId].imgPath}/>
                <h1>{teamData[teamId].title}</h1>
                <article>{teamData[teamId].description}</article>
            </div>
        </Container>
    );
}
