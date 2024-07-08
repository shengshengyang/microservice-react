const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const {type, data} = req.body;

    console.log('Received Event', type);

    if (type === 'CommentCreated') {
        // this is a simple logic to determine the status of the comment
        // can change with LLM
        const status = data.content.includes('orange') ? 'rejected' : 'approved';

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        });
    }

    res.send({
        status: 'OK'
    })
});

app.listen(4003,  () => {
    console.log('Listening on 4003');
})