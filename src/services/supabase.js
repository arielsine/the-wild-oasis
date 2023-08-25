import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pydmnrvsctwvygljyung.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZG1ucnZzY3R3dnlnbGp5dW5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MzAyNzksImV4cCI6MjAwODMwNjI3OX0.aqEVOt1cgOp9zHXmFVfi_5RiDwPDcbSCKpGkmcXKsic";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
