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

router.get('/notes', withAuth, async (req, res) => {
    try {
        
        const gameData = await Note.findOne({ where: { id: req.session.user_id } });
       
        res.status(200).json( gameData.dataValues.flux);
        

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
        console.log(flux);
        res.status(200).json(flux);
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;