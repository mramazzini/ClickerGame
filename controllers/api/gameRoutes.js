const router = require('express').Router();
const { GameData, User, Note } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/flux', withAuth, async (req, res) => {
    try {
        
        const gameData = await User.findOne({ where: { id: req.session.user_id } });
       
        res.status(200).json( gameData.dataValues.flux);
        

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/notes', withAuth, async (req, res) => {
    try {
        // Add a note to the User 
        const newNote = await Note.create({
            time: req.body.time,
            note_val: req.body.note_val,
            user_id: req.session.user_id,
        });
        res.status(200).json({ message: "You have added a note to your acc", newNote});
    } catch (err) {
        res.status(400).json({ message: "An error occured: ", err})
    }
});

router.get('/notes', withAuth, async (req, res) => {
    try {
        
        const noteData = await Note.findAll({ where: { user_id: req.session.user_id } });
       
        res.status(200).json(noteData);
        

    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/flux', withAuth, async (req,res) => {
    try {
        const flux = await User.update(
            {
                flux: req.body.flux
            },
            {
                where: {
                    id: req.session.user_id,
                },
            }
            
        );

        res.status(200).json(flux);
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;