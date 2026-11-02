// Conexión con Supabase - Guía Turística Rivadavia

const SUPABASE_URL = "https://txvomgdrksafaouhdglk.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_MAwZb6ANX5TCkKz5a6qlA_GTud_JcI";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("Conexión con Supabase preparada");
