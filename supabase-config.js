// Fill these in from your Supabase dashboard: Project Settings -> API.
// The anon key is designed to be public — it is safe to commit and ship to the browser.
// Never put the `service_role` key here.
export const SUPABASE_URL = 'YOUR_SUPABASE_URL';
export const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

export const isConfigured =
  !SUPABASE_URL.startsWith('YOUR_') && !SUPABASE_ANON_KEY.startsWith('YOUR_');
