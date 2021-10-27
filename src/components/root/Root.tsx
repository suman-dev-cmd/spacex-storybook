import React from 'react'
import styled from 'styled-components';
const DivCOntainer=styled.div`
    font-family:Mukta, sans-serif;
    display:grid;
    justify-content:center;
    align-items:center;
    background-color: #cdc5c5;
`;
const Root = ({children}:any) => {
    return (
        <DivCOntainer>
            {children}
        </DivCOntainer>
    )
}

export default Root
