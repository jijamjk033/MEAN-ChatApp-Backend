import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => { res.redirect(`${process.env.Frontend_URL}/home`); }
);

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) console.log(err);
        res.redirect(process.env.Frontend_URL || '/');
    });
});


export default router;