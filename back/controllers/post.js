const db = require('../model')
const postModel = db.post;
const commentModel = db.comment;
const userModel = db.user;
exports.getAllPost = (req, res, next) =>{
    async function getAllPost(){
        postModel.findAll({include: [{model :commentModel}] ,order: [  ['createdAt', 'DESC'] , [commentModel, 'createdAt', 'DESC']]})
            .then((data) => res.send(data))
            .catch((error) => res.status(500).send(error))
    }
    getAllPost(); 
}

exports.createPost = (req, res, next) =>{
    async function post(){
        auth = req.auth
        

        const user = await userModel.findByPk(auth)
        
        if(req.file){
            const post = await postModel.build({
                imageUrl: `${req.protocol}://${req.get("host")}/api/images/${req.file.filename}`,
                text: req.body.text
            });
            post.save()
            .then(() => res.status(200).json({ message: 'post crée !'}))
            .catch(error => res.status(400).json({ error }));
        }
    }
    post(); 
} 