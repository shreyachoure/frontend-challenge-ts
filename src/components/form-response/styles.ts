import styled from 'styled-components'

export const FormSuccess = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`
export const FormSuccessContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    width: 90%;

    @media (max-width: 768px) {
        flex-direction: column; 
        width: 100%; 
        margin: 5px auto;
    }
`
export const SuccessContent = styled.p`
    background-color: #7B876D;
    opacity: 0.7;
    border: 2px solid #7B876D;  
    border-radius: 10px;
    color: white;
    margin: 20px;
    padding: 5px 18px;

    @media (max-width: 768px) {
        padding: 20px 30px;
        opacity: 0.8;
        margin: 30px;
    }
`
