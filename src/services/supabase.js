import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kxfefhulwbcrhmbwppxn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZmVmaHVsd2JjcmhtYndwcHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MzM5NjQsImV4cCI6MjAxMTMwOTk2NH0.5P0aPACndHbNshZZtjhD9oIL7xp4lkoCqoDnB69c3T0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
