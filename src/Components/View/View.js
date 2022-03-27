import React from 'react'
import styled from 'styled-components'

export default function View() {
  return (
      <Wall>
        <Container>
            <Holder>
                <img src="/Assets/images/Viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/Assets/videos/star-wars.mp4" />
                </video>
            </Holder>
            <Holder>
                <img src="/Assets/images/Viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/Assets/videos/national-geographic.mp4" />
                </video>
            </Holder>
            <Holder>
                <img src="/Assets/images/Viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/Assets/videos/marvel.mp4" />
                </video>
            </Holder>
            <Holder>
                <img src="/Assets/images/Viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/Assets/videos/pixar.mp4" />
                </video>
            </Holder>
            <Holder>
                <img src="/Assets/images/Viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                    <source src="/Assets/videos/disney.mp4" />
                </video>
            </Holder>
        </Container>
      </Wall>

  )
}

const Wall = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    /* align-items: center; */
`;
const Container = styled.div`
    margin-top: 30px;
    width: 95%;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;
const Holder = styled.div`
    border-radius: 10px;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: solid 3px #fff;
    position: relative;
    cursor: pointer;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: 1;
        /* position: absolute; */
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        object-fit: cover;
        top: 0;
    }

    :hover{
        video{
            opacity: 1;
        }
    }
`;