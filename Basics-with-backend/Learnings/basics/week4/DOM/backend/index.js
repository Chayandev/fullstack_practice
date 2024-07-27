const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors());

function sum(a, b) {
    return a + b;
}

function sip(p, r, t) {
    let i = (p * r * t) / 100;
    let tamount = i + p;

    return {
        total: tamount,
        interest: i
    }
}
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = sum(a, b);

    res.send(result.toString());
});


app.get('/simpleinterest', (req, res) => {
    const p = parseFloat(req.query.p);
    const r = parseFloat(req.query.r);
    const t = parseInt(req.query.t);

    const ans = sip(p, r, t);

    res.send(ans)
})

app.listen(3000, () => {
    console.log('port 3000 is listening.');
});

