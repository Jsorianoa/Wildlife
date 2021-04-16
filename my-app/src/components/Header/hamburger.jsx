import styled from 'styled-components';

const StyledHamburger = styled.div`
    
    display:none;

    @media(max-width: 768px) {
        width: 2rem;
        height: 2rem;
        position: fixed;
        top: 15px;
        right: 20px;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        
        

        div{
            width: 2rem;
            height: 0.25rem;
            background-color: ${props => (props.open ? '#aaa':'#000')};
            border-radius: 10px;
            transition: all 0.3s linear;
            

            &:nth-child(1){
                transform: ${props => (props.open ? 'translateX(10rem)':'translateX(0)')};
                opacity: ${props => (props.open ? 0 : 1)};
            }

            &:nth-child(3){
                transform: ${props => (props.open ? 'translate(10rem)':'translate(0)')};
                opacity: ${props => (props.open ? 0 : 1)};
            }
        }
    }
   

`

 const Hamburger = ({ open, handleClick }) => {
    
    return (
        <>
        <StyledHamburger open={open} onClick={handleClick}>
            <div/>
            <div/>
            <div/>
        </StyledHamburger>
    </>
    )
}

export default Hamburger;