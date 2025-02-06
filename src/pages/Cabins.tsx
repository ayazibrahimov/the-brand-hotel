import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {getCabins} from '../services/apiCabins.js';

function Cabins() {

  useEffect(()=>{
    getCabins().then(data=>console.log(data))
  },[])


//   console.log("VITE_SUPABASE_API_URL:", import.meta.env.VITE_SUPABASE_API_URL);
// console.log("VITE_SUPABASE_API_KEY:", import.meta.env.VITE_SUPABASE_API_KEY);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://vzllmaevtgcgxqvjqcgl.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" 
      alt="cabin_1" />
    </Row>
  ); 
}

export default Cabins;
