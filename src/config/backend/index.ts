import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL as string;
const anon = process.env.SUPABASE_ANON as string;

const supabase = createClient(url, anon);

export default supabase;
