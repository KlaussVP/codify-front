import styled from 'styled-components';

const styledHome = styled.div`
    width: 100%;
    margin-top: 96px;
    font-family: 'Roboto', sans-serif;

    .banner{
        background: #46A7D4;
        font-size: 1.25em;
        color: #FFFFFF;
        padding: 1em 1.5em;
    }

    .name{
        text-transform: capitalize;
    }

    .container{
        width: 85%;
        margin: 0 auto;
        
        ul{
            margin: 3em 0 0 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media (max-width: 800px) {
        margin-top: 80px;
    }
`;

export default styledHome;
