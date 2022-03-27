import React, { useState } from 'react'
import styled from 'styled-components'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Header() {

    const [toggleBars, setToggleBars] = useState(false)

    const changeToggle = ()=>{
        setToggleBars(!toggleBars)
    }
  return (
    <div>
    <Container>
      <Wrapper>
        <LogoDiv>
          <Logo src="/Assets/images/logo.svg" alt="" />
        </LogoDiv>

        <Navigation>
          <Navs>
            <Nav>
              <Icon src="/Assets/images/home-icon.svg" alt="" />
              <span>Home</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/search-icon.svg" alt="" />
              <span>Search</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/watchlist-icon.svg" alt="" />
              <span>Watchlist</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/original-icon.svg" alt="" />
              <span>Original</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/movie-icon.svg" alt="" />
              <span>Movies</span>
            </Nav>
            <Nav>
              <Icon src="/Assets/images/series-icon.svg" alt="" />
              <span>Series</span>
            </Nav>
          </Navs>
          <Avatar>
            <Pix />
          </Avatar>
        </Navigation>
        <Bars>
            { toggleBars ? (<FaBars onClick={changeToggle} color={'#fff'} size={'25px'}/> ) : (<FaTimes onClick={changeToggle} color={'#fff'} size={'25px'}/>)}
        </Bars>
      </Wrapper>
    </Container>
    </div>
  )
}


const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navigation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;
const LogoDiv = styled.div`
  margin-right: 40px;
`;
const Logo = styled.img`
  width: 100px;
`;


const Navs = styled.div`
  display: flex;
  width: 580px;
  justify-content: space-between;
`;
const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 15px;
    margin-left: 3px;
    color: #fff;
    cursor: pointer;
    position: relative;

    ::after{
      position: absolute;
      content: "";
      background-color: #fff;
      height: 2px;
      bottom: -7px;
      right: 0;
      left: 0;
      opacity: 0;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
    }

    :hover{
      transform: scale(1.1);
      ::after{
        opacity: 1;
      }
    }
  }
`;
const Icon = styled.img`
  width: 25px;
`;
const Pix = styled.img``;
const Avatar = styled.div`
  height: 55px;
  width: 55px;
  background-color: darkcyan;
  border-radius: 50%;
`;

const Bars = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;