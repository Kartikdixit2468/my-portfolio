const express = require('express');
const port = 3500;

const app = express();

app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {

        res.send("App Running successfully!")

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
