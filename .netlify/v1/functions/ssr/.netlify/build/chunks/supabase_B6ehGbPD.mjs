import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://bxvnnzgtqwgkhfcrftpx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4dm5uemd0cXdna2hmY3JmdHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NTI0NzMsImV4cCI6MjA0NTQyODQ3M30.swskdbEkXuEdaTntu2NP9a3NeK6XOrkB2cZva5PIM28";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as s };
