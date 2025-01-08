const express = require('express');
const cors = require('cors'); // Importa cors
const app = express();

app.use(cors()); // Habilita CORS para todas las rutas

app.get('/professional', (req, res) => {
    res.json({
        professionalName: "Jane Doe",
        base64Image: "base64_encoded_image_here",
        nameLink: { firstName: "Jane", url: "https://example.com" },
        primaryDescription: "Software Engineer",
        workDescription1: "Building awesome web applications.",
        workDescription2: "Passionate about backend development.",
        linkTitleText: "Find me online:",
        linkedInLink: { text: "LinkedIn", link: "https://linkedin.com/in/janedoe" },
        githubLink: { text: "GitHub", link: "https://github.com/janedoe" }
    });
});

app.listen(8080, () => console.log('Server is running on port 8080'));
