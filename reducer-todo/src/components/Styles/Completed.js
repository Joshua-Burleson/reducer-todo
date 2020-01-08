import styled from 'styled-components';

export default styled.div`
    border: 1px solid green;
    width: 15vw;
    span {
        background: green;
        color: white;
        text-decoration: line-through;

        &:hover {
            cursor: pointer;
        }
    }
    p {
        font-size: 0.75rem;
    }
`;