import styled from 'styled-components';

const OutterContainer = styled.div`
    position: relative;
    left: 0;
    top: 96px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        top: 80px;
    }
`;

const BackgroundBanner = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100vw;
    height: 33vh;
    max-height: 300px;
    background: linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%);

    @media (max-width: 360px) {
        height: 44vh;
        max-height: initial;
    }
`;

const BackButton = styled.div`
    position: absolute;
    top: 20px;
    left: 15px;
    width: 1.4em;
    height: 1.4em;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    z-index: 3;
    cursor: pointer;

    @media (max-width: 760px) {
        display: none;
    }
`;

const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    padding: 35px 45px;
    width: 100vw;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 760px) {
        width: 95%;
        padding: 25px 0 0 12px;
    }
`;

const Presentation = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 45px;

    h1 {
        margin-bottom: 12px;
        font-size: 37px;
        font-weight: 700;
    }

    p {
        font-size: 21px;
        font-weight: 400;
        color: #383838;
    }
`;

const CourseStatus = styled.div`
    width: 100%;
    max-width: 900px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11vh 3.8vw 11vh 4.8vw;

    @media (max-width: 760px) {
        flex-direction: column;
        padding: 5vh 4vw 3vh 6vw;
    }
`;

const Progress = styled.div`
    display: flex;
    justify-content: space-between;

    .avatar {
        background: #46A7D4;
        width: 4.5em;
        height: 4.5em;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        p {
            font-size: 1.85em;
            color: white;
        }
    }

    .progress {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 15px;
        padding: 0.6rem 0;
        
        p {
            font-size: 1.18rem;
            font-weight: 400;
        }

        @media (max-width: 760px) {
            flex-grow: 1;
        }
    }

    .progress-bar {
        background: #EAEAEA;
        border-radius: 0.7rem;
        display: flex;
        justify-content: flex-start;
    }

    .progress-value {
        ${props => props.progress ? `width: ${props.progress}%;` : ''}
        min-width: fit-content;
        border-radius: 0.7rem;
        padding: 0.15rem 0.5rem;
        background: #76DF93;
        color: white;
        
        p {
            font-size: 0.87rem;
            width: fit-content;
        }
    }

    @media (max-width: 760px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;

const CourseButton = styled.button`
    background: ${ (props) => (props.disabled ? '#a6d9f1' : '#46A7D4') };
    border-radius: 0.5rem;
    outline: 0;
    border: 0;
    padding: 1rem 2.1rem;
    font-weight: bold;
    font-size: 1rem;
    color: #FFFFFF;
    cursor: pointer;
`;

const Accordeon = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 3.5rem 0;
    width: 100%;
    max-width: 900px;

    h2 {
        font-size: 32px;
        margin-bottom: 1.6rem;
    }
`;

const ChaptersContainer =  styled.div`
    background: #FFFFFF;
    width: 100%;
    max-width: 900px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;

    & > :last-child {
       border-bottom-left-radius: 15px;
       border-bottom-right-radius: 15px; 
    }
`;

export {
    OutterContainer,
    BackgroundBanner,
    BackButton,
    MainContainer,
    Presentation,
    CourseStatus,
    Progress,
    CourseButton,
    Accordeon,
    ChaptersContainer
};
