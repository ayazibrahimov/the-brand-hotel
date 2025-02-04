import styled from "styled-components";


const Heading = styled.h1<{isSmal?:boolean,color?:string}> `
  font-size: ${props => (props.isSmal ? '10px' : '20px')};
  font-weight: 600;

`;

export default Heading;