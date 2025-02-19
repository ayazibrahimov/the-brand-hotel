import React from 'react'
import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { MdDelete } from "react-icons/md";
import { deleteCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from '@tanstack/react-query';

// import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const DeleteButton = styled.span`
  background-color: transparent;
  text-align: center;
  transition: all .4s;

  & svg{
    height: 20px;
    width: 20px;
  }


  & svg:hover{
     color: var(--color-red-700);
     cursor: pointer;
  }
  
`



interface CabinType {
  create_at?: string;
  description?: string;
  discount?: number;
  id?: number;
  image: string;
  maxCapacity?: number | string;
  name?: string;
  regularPrice?: number;
  user_id_uuid:string | null | number
}

interface CabinRowProps {
  cabin: CabinType;
}





const CabinRow:React.FC<CabinRowProps> = ({cabin}) => {


  const {name, maxCapacity,regularPrice, discount, image,user_id_uuid:cabinId} = cabin


  const queryClient =  useQueryClient()
  const {mutate} =useMutation({
    mutationFn:deleteCabin,
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:["cabins"]
      })
    }
  })


  function deleteHandle(){
    const isConfirmed = window.confirm("Do you want to delete ?");
    if (isConfirmed) {
      mutate(cabinId as string | number); 
    }
  }



  return (
    <TableRow>
      <Img src={image}  alt={cabin.name || "Cabin"}/>
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price> 
      <Discount>{formatCurrency(discount)}</Discount>
      <DeleteButton  onClick={deleteHandle}>
  <MdDelete />
</DeleteButton>

    </TableRow>
  )
}

export default CabinRow;