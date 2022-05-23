import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import Footer from "../footer/Footer";

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

            {
                sessions.map((session, index) =>
                    <>
                        <Data>
                            <p>{`${session.weekday} - ${session.date}`}</p>
                        </Data>
                        <Hours>
                            {session.showtimes.map(showtime =>

                                <Link to={`/assentos/${session.id}`} key={session.id}>
                                    <Hour>
                                        <p>{showtime.name}</p>
                                    </Hour>

                                </Link>
                            )}
                        </Hours>
                        <Margin></Margin>
                    </>
                )
            }
<Space></Space>
            <Footer>
                {
                    movies.length !== 0 && <ContentsFooter key={movies.id}>
                        <div>
                            <img src={movies.posterURL} alt="" />
                        </div>
                        {movies.title}
                    </ContentsFooter>
                }
            </Footer>

        </>
    )
}


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

const Margin = styled.div`
margin-bottom:  50px;
`

const Space = styled.div`
height: 200px;
margin-bottom:  200px;
`


const ContentsFooter = styled.div`
    display: flex;
    align-items: center;
     
    div {
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin: 14px 10px 14px 14px;
        width: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    img {
        height: 89px;
        width: 64px;
        margin: 8px;
    }
`