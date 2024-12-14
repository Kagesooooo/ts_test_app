import { createClient } from '@supabase/supabase-js';

// 環境変数からSupabaseのURLとキーを取得
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseServerClient = createClient(supabaseUrl, supabaseKey);
