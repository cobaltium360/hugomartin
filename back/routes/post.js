const express = require('express');

const router = express.Router();

const controllers = require('../controllers/post');

const multer = require('../middlewares/multer');
const auth = require('../middlewares/auth');


router.post('/newpost', auth, multer, controllers.createPost);
// router.delete('/:id/:delete', auth, controllers.deletePost);
router.get('/post',  controllers.getAllPost);
// router.get('/:id', auth, controllers.getOnePost );
// router.put('/:id',auth, joi, controllers.updatePost);


module.exports = router;