import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cuootgzqedsvzdbypocc.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1b290Z3pxZWRzdnpkYnlwb2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMTYzODUsImV4cCI6MjA3MDY5MjM4NX0.C8KZPNIyccufRExwadGMEOYu8_dZwPXHxzYZfRlW_3g'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);