import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON);

export default supabaseClient;
