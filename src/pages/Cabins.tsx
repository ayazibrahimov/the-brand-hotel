// import { useEffect } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import {getCabins} from '../services/apiCabins.js';

function Cabins() {

//   console.log("VITE_SUPABASE_API_URL:", import.meta.env.VITE_SUPABASE_API_URL);
// console.log("VITE_SUPABASE_API_KEY:", import.meta.env.VITE_SUPABASE_API_KEY);

  return (
    <>
      <Row type="horizontal">
       <Heading as="h1">All cabins</Heading>
       <p>Filter / Sort</p>   
      </Row>
      
      <Row type="horizontal">
        <CabinTable />
      </Row>
    </>
  ); 
}

export default Cabins;
