const { createClient } = require('@supabase/supabase-js');


const supabaseUrl = 'https://aibrwsnxbuklshdpwvzv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpYnJ3c254YnVrbHNoZHB3dnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2Mzc1NTQsImV4cCI6MjAxNTIxMzU1NH0.dIHvOVjRuvG_ja4SgVrLQFDQPrKAjs4g5w0mKue3dlA';


const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction getUsers pour récupérer les utilisateurs depuis la base de données Supabase
async function getUsers(req, res) {
  const { data, error } = await supabase
    .from('user')
    .select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

module.exports = { getUsers };
