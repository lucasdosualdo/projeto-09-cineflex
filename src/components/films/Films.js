import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

export default function Films() {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then(response => {
            setFilms([...response.data])
        });

    }, [])
    return (
        <Container>
            {
                films.map(film => <Film id={film.id} title={film.title} posterURL={film.posterURL} overview={film.overview} releaseDate={film.releaseDate} />)
            }
        </Container>
    )
}

function Film({ id, title, posterURL, overview, releaseDate }) {
    return (
        <Poster>
            <img src={posterURL} />
        </Poster>
    )
}

const Container = styled.div `
display: flex;
flex-wrap: wrap;
padding: 0 25px;
justify-content: center;
`

const Poster = styled.div `
width: 145px;
height: 209px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
padding: 8px;
margin: 7px 15px 7px 15px;
display: flex;
justify-content: center;
`

/*films.map(film => <Film id = {film.id}, title = {film.title}, posterURL = {film.posterURL}, overview = {film.overview}, releaseDate = {film.releaseDate} />)*/