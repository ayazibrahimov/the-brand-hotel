import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error('Cabins could"t be loaded ');
  }

  return data;
}

export async function deleteCabin(id) {
  const {data, error } = await supabase.from("cabins")
  .delete()
  .eq("user_id_uuid", id);


  if (error) {
    console.error(error);
    throw new Error('Cabins could"t be deleted');
  }

  console.log("Silme Sonucu:", data);
  return data;
}

// export async function deleteCabin(id) {
//   const { data, error } = await supabase
//     .from("cabins")
//     .delete()
//     .eq("user_id_uuid", id); // ✅ Burada iki alt çizgi değil, tek alt çizgi var

//   if (error) {
//     console.error("Supabase Hatası:", error);
//     throw new Error('Cabins couldn\'t be deleted');
//   }

//   console.log("Silme Başarılı:", data);
//   return data;
// }

