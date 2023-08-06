const express = require('express');
const app = express();

let option1Votes = 0;
let option2Votes = 0;

app.use(express.json());

// 投票結果
app.get('/api/votes', (req, res) => {
    res.json({ option1Votes, option2Votes });
});

// 投票
app.post('/api/vote/:option', (req, res) => {
    const option = parseInt(req.params.option);
    if (option === 1) {
        option1Votes++;
    } else if (option === 2) {
        option2Votes++;
    }

    res.json({ option1Votes, option2Votes });
});