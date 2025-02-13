import express from 'express';
import expressOasGenerator from 'express-oas-generator';
import router from './router'; // Adjust the path as necessary

const app = express();
expressOasGenerator.init(app, {})
const PORT = process.env.PORT || 3000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 