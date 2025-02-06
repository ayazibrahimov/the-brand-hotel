
import { createClient } from '@supabase/supabase-js'



const supabaseUrl = 'https://vzllmaevtgcgxqvjqcgl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bGxtYWV2dGdjZ3hxdmpxY2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3Nzg0MzQsImV4cCI6MjA1NDM1NDQzNH0.kSe83-UthdapBXhCnr2B9C17sxcdjuxVjTrCRol9gkE'
const supabase = createClient(supabaseUrl, supabaseKey)





export default supabase;