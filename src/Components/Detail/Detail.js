import React from 'react'
import styled from 'styled-components'

export default function Detail() {
  return (
    <Container>
        <Bg>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
        </Bg>
        <h1>Hello</h1>
    </Container>
  )
}


const Container = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
`;

const Bg = styled.div`
    img{
        width: 100%;
        height: 100%;
    }
`;