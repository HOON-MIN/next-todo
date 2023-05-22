import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
    padding : 20px;
`

const index: NextPage = () => {
    return (
        <Container>
            <h1> hello typescript</h1>
            <h2> hello typescript</h2>
            <p>hello typescript</p>
            <ul>
                <li>
                hello typescript
                </li>
            </ul>
            <a> hello typescript</a>
            <span>hello typescript</span>
        </Container>);
};

export default index;