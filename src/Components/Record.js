import { useEffect, useState } from "react"
import { CloseCircleOutline } from "react-ionicons";
import styled from "styled-components"

export default function Record({record}) {
    const [valueColor, setValueColor] = useState("#03AC00")

    useEffect(() => {
        if (record.status === "output") {
            setValueColor("#C70000")
        }
      }, []);

    return (
        <Container>
            <RecordContainer>
            <DateAndDescription>
            <Date>{record.date}</Date>
            <Description>{record.description}</Description>
            </DateAndDescription>
            <Value valueColor={valueColor}>{record.value}</Value>
            </RecordContainer>
            <CloseCircleOutline color="#C6C6C6" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100%;
    margin-bottom: 5px;
`

const RecordContainer = styled.div`
width: 100%;
    display: flex;
    justify-content: space-between;
`

const DateAndDescription = styled.div`
    display: flex;
`

const Date = styled.span`
    color: #C6C6C6;
    font-size: 16px;
    font-family: "Raleway", sans-serif;
    margin-right: 5px;
`
const Description = styled.span`
    color: black;
    font-size: 16px;
    font-family: "Raleway", sans-serif;
`
const Value = styled.span`
    color: ${props => props.valueColor};
    font-size: 16px;
    font-family: "Raleway", sans-serif;
    margin-right: 5px;
`