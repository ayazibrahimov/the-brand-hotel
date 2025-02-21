import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from '../ui/Button'

function Cabins() {

 const [showForm,setShowForm] = useState<boolean | null>()


  return (
    <>
      <Row type="horizontal">
       <Heading as="h1">All cabins</Heading>
       <p>Filter / Sort</p>   
      </Row>
      
      <Row type="normal">
        <CabinTable />
        <Button variation="secondary" size="medium" onClick={()=>setShowForm(show=>!show)} >Add new cabin</Button>
        { showForm && <CreateCabinForm />}
      </Row>
    </>
  ); 
}

export default Cabins;
