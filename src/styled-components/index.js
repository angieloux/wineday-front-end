import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from 'styled-components'

export const CardDeck = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 0.75rem;
    column-gap: 0.75rem;

    @media (min-width: 768px) {
        width: 95%
    }

    @media (max-width: 480px) {
    flex-direction: column;
    flex-wrap: nowrap;
    }
`

export const Card = styled.div`
    flex: 0 1 24%;
    background-color: white;
    box-sizing: border-box;
    padding: 0.25rem;
    border: 1px solid black;
    border-radius: 10px;
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2)
    }
    @media (max-width: 768px) {
        flex: 0 1 49%
    }
    @media (max-width: 480px) {
        flex: 0 1 80%
    }
`

export const Label = styled.label`
    font-size: 1.2em;
`

export const TextArea = styled.textarea`
    height: 200px;
    margin: .5em;
    width: 70vw;
`

export const Input = styled.input`
    width: 60vw;
    margin: .5em;
`

export const Block = styled.div`
    display: grid;
    width: 100vw;
`

export const Select = styled.select`
    border: ${props => props.error ? "1px solid red" : "1px solid #dddddd"};
    font-size: 1.2em;
    width: 60vw;
`

export const Option = styled.option`
    font-size: 1.2em;
`
export const TextField = styled.option`
    width: 70vw;
`