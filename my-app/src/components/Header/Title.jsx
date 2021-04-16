import styled from "styled-components";

const Ti = styled.div`
 h1 {
    text-align: center;
    margin-top: 6rem;
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
    -webkit-text-stroke: 1px rgb(14, 23, 43);
  }
  @media (max-width: 768px){
    h1 {
      font-size: 2rem;
      margin-top: ${props => (props.open ? '17rem' : '6rem' )};
      transition: all 0.3s linear;
    }
  }
`


const Title = ({open}) => {
    return (

        <Ti open={open}>
            <h1>
                Wildlife Management México A.C.
            </h1>
        </Ti>
    )
}

export default Title;