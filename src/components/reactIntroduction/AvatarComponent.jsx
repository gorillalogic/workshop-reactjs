import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  border: 2px solid #aaa;
  border-radius: 5px;
  color: #666;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 192px;
  width: 192px;
`;

const Image = styled.img`
  height: 160px;
  width: 160px;
`;

const HorizontalRule = styled.hr`
  width: 100%;
  margin: 0.2em 0;
`;

function AvatarComponent(props) {
    return (
        <AvatarWrapper>
            <Image src={props.profilePicture} alt={props.fullName} />
            <HorizontalRule/>
            <span>{props.fullName}</span>
        </AvatarWrapper>
    );
}

export default AvatarComponent;