import React, { Component } from 'react';
import styled from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:90vh;
    width:100%;
    background-color: white;
    /* border: 1px solid blue; */
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <NameReveal text="Kintu Alex Ladwong" fontFam="Valencia" timeDelay={500} />
        <br />
        <TitleReveal text="UI/UX Designer | Web Dev. | Cyber Security | Networking" fontFam="AvenirRoman" timeDelay={1200} />
      </Container>
    );
  }
}

export default NameAndJobTitle;
