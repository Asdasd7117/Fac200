// supabase-config.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://wwwdjpphvsdftfipwowa.supabase.co",  // رابط Supabase الخاص بك
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."     // مفتاح Supabase (anon key)
);
