// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kxfefhulwbcrhmbwppxn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZmVmaHVsd2JjcmhtYndwcHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MzM5NjQsImV4cCI6MjAxMTMwOTk2NH0.5P0aPACndHbNshZZtjhD9oIL7xp4lkoCqoDnB69c3T0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
