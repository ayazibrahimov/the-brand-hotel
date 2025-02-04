import styled,{css} from "styled-components";


const Row = styled.div<{type:string | null}>`
 display: flex;
 
 ${(props)=>props.type === 'horizontal' && css`
    justify-content: space-between;
    align-items: center;
 `};

 ${(props)=>props.type === 'vertical' && css`
    flex-direction: column;
    gap: 16px;
 `}


`


export default Row