const router = require('express').Router();
const { GameData, User } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/flux', withAuth, async (req, res) => {
//     try {
        
//         const gameData = await User.findByPk(req.session.user_id, {
//             include: [{
//                 model: User
//         }]
//         });
       
//         const flux = gameData.get({ plain: true });

//         res.render('game', {
//             flux,
//             logged_in: req.session.user_id
//         })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;