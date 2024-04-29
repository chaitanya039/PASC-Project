const express =  require("express");
const Blog = require("../Models/Blogs");

// Now create the router for our application
const router = express.Router();

router.get("/", async (req, res) => {
    try
    {
        const blogs = await Blog.find();
        
        res.json({ blogs });
    }
    catch(error)
    {       
        res.json({
            Error : error
        });
    }
});

router.patch("/incrementLikes/:id", async (req, res) => {
    try
    {
        const blog = await Blog.findById(req.params.id);
        
        // Now Update the upVotes of the post means likes of the post
        blog.upVotes += 1;
        
        const response = await blog.save();
        
        res.json(response);
    }
    catch(error)
    {       
        res.json({
            Error : error
        });
    }
});


router.patch("/decrementLikes/:id", async (req, res) => {
    try
    {
        const blog = await Blog.findById(req.params.id);
        
        // Now Update the upVotes of the post means likes of the post
        blog.upVotes > 0 ? blog.upVotes -= 1 : null;
        
        const response = await blog.save();
        
        res.json(response);
    }
    catch(error)
    {       
        res.json({
            Error : error
        });
    }
});


router.post("/", async (req, res) => {
    try
    {
        const { title, content, author, description, imgUrl, upVotes, date } = req.body;
        
        const blog = new Blog({ title, content, author, description, imgUrl, upVotes, date });
        
        const response = await blog.save();
        
        res.json(response);
    }
    catch(error)
    {
        console.log(error);
        res.json({
            Error : error
        });
    }
})

module.exports = router;