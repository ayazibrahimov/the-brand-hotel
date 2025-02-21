import supabase from "./supabase";


//for getting cabin from database (supabase)
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error('Cabins could"t be loaded ');
  }

  return data;
}




//for deleting cabin from database (supabase)
export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("user_id_uuid", id);

  if (error) {
    throw new Error('Cabins could"t be deleted');
  }

  console.log("Silme Sonucu:", id);
  return data;
}






//for creating cabins on database (supabase)
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    throw new Error('Cabins could"t be created');
  }

  return data;
}
