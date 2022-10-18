const router = require('express').Router();
const {Achievement, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) =>{
    res.redirect('/game');
})

router.get('/game', withAuth, async(req,res) =>{
    // User will only be able to play if they are logged in. Will redirect the user to the login page if they are not logged in.
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    const gameData = await User.findOne({ where: { id: req.session.user_id } });
 
    
    console.log(gameData);

    const game = gameData.get({ plain: true });

    res.render('game', {
        game,
        logged_in: req.session.logged_in,
    });
})

router.get('/login', (req, res) => {
    // If user is already signed in, then it will redirect user to the gamepage.
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


router.post('/logout', (req, res) => {
    // When user logs out, it will destroy user's session.
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;