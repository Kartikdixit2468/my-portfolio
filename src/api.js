const express = require('express');
const path = require('path')
const serverless = require('serverless-http')
// const port = 80;

const app = express();

app.use(express.static('public'));

const router = express.Router();

router.get('/', (req, res) => {

    const options = {
        root: path.join(__dirname)
    };
    const fileName = 'views/index.html';
    
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Files rendered Successfully:', fileName);
        }
    });

});

router.get('/resume-download', (req, res) => {

    const resume_path = 'public/files/Kartik Dixit Resume.pdf';    
    res.download(resume_path, (err) => {
        if (err) {
            res.send(`An unknown Error occured, Please try again later! - ${err}`);
        }
});

})

app.use('/.netlify/functions/api', router)

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
//     console.log(`Link to application - http://localhost:${port}/`)
// });

module.exports.handler = serverless(app);
