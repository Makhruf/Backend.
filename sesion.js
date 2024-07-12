const express = require('express');
const session = require('express-session');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false, 
}));

const authenticate = (req, res, next) => {
    if (req?.session?.isAuthenticated) {
        next();
    } else {
        res.status(401).send('Tidak Terautentikasi');
    }
};

// Route login
app.post('/login', (req,res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
            req.session.isAuthenticated = true;
        res.send('Login sukses');
    } else {
        res.status(401).send('Kredensial Tidak Valid');
    }
});

// Route logout
app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error saat logout');
        } else {
            res.send('Logout sukses');
        }
    });
});

// Protected GET route
app.get('/protected', authenticate, (req, res) => {
    res.send('Anda masuk pada route terproteksi (GET)');
});

// Protected POST route
app.post('/protected', authenticate, (req, res) => {
    res.send('Route terproteksi (POST)');
});

// Protected PUT route
app.put('/protected', authenticate, (req, res) => {
    res.send('Route terproteksi (PUT)');
});

// Protected DELETE route
app.delete('/protected', authenticate, (req, res) => {
    res.send('Route terproteksi (DELETE)');
});

app.listen(port, () => {
    console.log(`Servis berjalan pada port ${port}`);
});