import React from 'react'
import styled from 'styled-components'

export default function Explore() {
  return (
    <Container>
        <h3>
            <strong>Showing At The Cinema</strong>
        </h3>
        <Wrap>
            <Inner>
                <img src="/Assets/images/Viewers-pixar.png" alt="" />
            </Inner>
        </Wrap>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h3{
        color: #fff;
        font-size: 1.5rem;
    }
`;

const Wrap = styled.div`
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 20px;

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

    }

`;
const Inner = styled.div`
    height: 200px;
    width: 100%;
    border-radius: 5px;

    :hover{
        border: 2px solid #fff;
        transition: all 500ms;
        transform: scale(1.05);
        cursor: pointer;
    }

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`;
