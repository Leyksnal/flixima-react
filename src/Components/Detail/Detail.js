import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {ImMakeGroup} from 'react-icons/im'
import {IoMdAdd} from 'react-icons/io'
import {BsPlay, BsPlayFill} from 'react-icons/bs'
import {FaReply} from 'react-icons/fa'
import data from '../Data.json'
import { Link, useParams } from 'react-router-dom'


export default function Detail() {

    const { id } = useParams()
    const [getData, setGetData] = useState({})

    const fetchData = ()=>{
        setGetData(data[id - 1])
    }

    useEffect(() =>{
        fetchData()
    }, [])

  return (
    <Container>
        <Bg>
            <img src={getData.cardImg} alt="" />
            <Action>
                <Play><BsPlayFill size={'30px'}/>Play</Play>
                <Trailer><BsPlay size={'30px'} />Trailer</Trailer>
                <Whilist><IoMdAdd size={'30px'}/></Whilist>
                <Group><ImMakeGroup size={'20px'}/></Group>
                <Back to={"/"}><FaReply size={'25px'}/></Back>
            </Action>
            <Subtitle>2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure</Subtitle>
            <Info>While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.</Info>
        </Bg>
    </Container>
  )
}


const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    background-image: ();
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
`;

const Bg = styled.div`

    /* background-color: darkcyan; */
    width: 450px;
    height: 250px;
    margin-left: 50px;
    margin-top: -400px;

    :hover{
    }
    img{
        width: 90%;
        height: 100%;
        margin-left: 100px;
        border-radius: 10px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
`;

const Action = styled.div`
    /* background-color: red; */
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 30px;
`;
const Play = styled.div`
    background-color: #fff;
    color: black;
    width: 110px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: all 500ms;

    :hover{
        cursor: pointer;
        transform: scale(1.09);
        background-color: #DE5B18;
        color: #fff;
    }
`;
const Trailer = styled.div`
    width: 130px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: solid 3px #fff;
    transition: all 350ms;

    :hover{
        cursor: pointer;
        transform: scale(1.09);
    }
`;
const Whilist = styled.div`
    width: 35px;
    height: 35px;
    border: solid 3px #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms;


    :hover{
        cursor: pointer;
        transform: scale(1.09);
    }
`;
const Group = styled.div`
    width: 35px;
    height: 35px;
    border: solid 3px #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms;

    :hover{
        cursor: pointer;
        transform: scale(1.09);
    }

`;
const Subtitle = styled.div`
    margin-top: 30px;
    width: max-content;
    font-size: 1.2rem;
    font-weight: 500;
`;
const Info = styled.div`
    margin-top: 35px;
    width: 650px;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.8rem;
`;
const Back = styled(Link)`
    text-decoration: none;
    color: #fff;
    width: 35px;
    height: 35px;
    border: solid 3px #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms;

    :hover{
        cursor: pointer;
        transform: scale(1.09);
        color: #DE5B18;
        background-color: #000000b2;
        opacity: 0.5;
    }

`;