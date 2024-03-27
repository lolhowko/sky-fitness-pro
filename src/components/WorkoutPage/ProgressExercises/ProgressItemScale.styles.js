import styled from 'styled-components';

export const ProgressFrame = styled.div `
    width: 278px;
`

export const ProgressBar = styled.div `
    width: 100%;
    height: 36px;
    border: 1px solid ${props => props.color}; 
    background-color: ${props => props.backgroundColor}; 
    border-radius: 18px; 
    overflow: hidden; 
    color: rgb(255, 255, 255);
    font-family: StratosSkyeng;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0%;
    text-align: left;
`

export const Progress = styled.div `
    height: 100%;
    background-color: ${props => props.color || 'rgb(86, 94, 239)'}; 
    width: ${props => props.scale + "%" || '50%'};
    position: relative
    `

export const ProgressValue = styled.span `
    position: absolute;
    top: 0;
    right: 0;
`