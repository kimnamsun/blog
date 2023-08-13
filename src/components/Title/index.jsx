import React from "react"
import styled from "styled-components"

const Wrapper = styled.h1`
  margin-bottom: 10px;
  font-size: ${props => props.size};
  font-weight: 700;
  line-height: 1.2;
  color: ${props => props.theme.colors.text};
  word-break: break-all;

  & > a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s;
  }

  & > a:hover {
    color: ${props => props.theme.colors.secondaryText};
  }
`

const Title = ({ size, children }) => {
  const sizes = {
    sm: "12.2px",
    md: "18.6px",
    bg: "26.6px",
  }

  return <Wrapper size={sizes[size]}> {children} </Wrapper>
}

export default Title
