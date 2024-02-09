const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);


const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fmwjoeisxodqrjyrlwsx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd2pvZWlzeG9kcXJqeXJsd3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNzg4NTIsImV4cCI6MTk5Mzk1NDg1Mn0.gaYaCq2CMilnhB2OPYQLQbdSVjzlBw-DiKyl8RfJ1KI';

const supabase = createClient(supabaseUrl, supabaseKey);
const { getUsers } = require('./controllers/userController'); // Importez la fonction getUsers depuis votre contrôleur


// Exemple d'utilisation dans un contrôleur
app.get('/api/users', getUsers);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
