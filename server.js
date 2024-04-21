const express = require('express');
const path = require('path')
// const port = 3500;

const app = express();

app.use(express.json());
app.use(express.static('public'));


app.get('', (req, res) => {

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

app.get('/resume-download', (req, res) => {

    const resume_path = 'public/files/Kartik Dixit Resume.pdf';    
    res.download(resume_path, (err) => {
        if (err) {
            res.send(`An unknown Error occured, Please try again later! - ${err}`);
        }
});

})

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
//     console.log(`Link to application - http://localhost:${port}/`)
// });

module.exports = app;
