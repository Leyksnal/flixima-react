import React from 'react'
import styled from 'styled-components'

export default function Detail() {
  return (
    <Container>
        <Bg>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78" alt="" />
        </Bg>
        <h1>Hello</h1>
    </Container>
  )
}


const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
    background-image: url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Bg = styled.div`
    img{
        width: 100%;
        height: 100%;
    }
`;