// middleware/injectUser.js
export default function(req, res, next) {
    if (req.user) {
        res.locals.user = req.user;
    }
    next();
};
