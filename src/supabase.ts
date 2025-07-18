import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_URL;
const supabaseAnonKey = import.meta.env.VITE_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
