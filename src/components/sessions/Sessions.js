import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

function Session({ weekday, date, showtimes }) {
    return (
        <>
            <Data>
                <p>{`${weekday} - ${date}`}</p>
            </Data>
            <Hours>
                <Session showtimes={showtimes} />
            </Hours>

            {showtimes.map(showtime =>
                <Hour>
                    <p>{showtime.name}</p>
                </Hour>
            )}
        </>
    )
}

export default function Sessions() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState([]);
    const [movies, setMovies] = useState({});
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => {
            setSessions(response.data.days);
            setMovies(response.data)
        });
    }, [])
    console.log(sessions)

    return (
        <>
            <Link to={"/"}>
                <div className="header">
                    <h1>CINEFLEX</h1>
                </div>
            </Link>
            <div className="select">
                <h3>Selecione o horário</h3>
            </div>
            <Container>
                {
                    sessions.map((session, index) =>
                        <Session key={index} weekday={session.weekday} date={session.date} showtimes={session.showtimes} />
                    )
                }
            </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
height: 350px;
`

const Data = styled.div`
width: 100%;
height: 35px;
font-family: 'Roboto';
font-weight: 400;
font-size: 20px;
margin-left: 25px;
`
const Hours = styled.div`
margin-left: 25px;
display: flex;
`
const Hour = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: #E8833A;
width: 83px;
height: 43px;
margin-right: 8px;
`