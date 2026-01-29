import { createClient } from '@supabase/supabase-js';

// Access environment variables using import.meta.env for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create a client even with placeholder values to prevent errors
// The actual Supabase features won't work without real credentials
export const supabase = createClient(supabaseUrl, supabaseKey);