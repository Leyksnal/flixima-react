import React from 'react'
import styled from 'styled-components'
import Explore from '../Exolore/Explore';
import Slide from '../Slide/Slide'
import View from '../View/View';

export default function Home() {
  return (
    <Container>
        <Slide/>
        <View/>
        <Explore/>
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
    height: 100%;

    ::before{
        position: absolute;
        content: '';
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        background-image: url("/Assets/images/home-background.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: -1;
    }
`;