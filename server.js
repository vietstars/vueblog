const express = require("express");
const mongoose = require("mongoose");

const app = express();

//mongodb
mongoose.connect("mongodb://localhost:27017/blog",{ userNewUrlParser:true });
mongoose.connection.on("connected",err=>{
	if(err)throw err;
	console.log("Connected to database...");
})

const PostSchema = mongoose.Schema({
	title: String,
	content: String,
	author: String,
	timestamp: String
})

const PostModel = mongoose.model("post",PostSchema);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// API Routes
app.get("/api/post/list",(req,res)=>{
	PostModel.find((msg,data)=>{
		if(msg)res.send({success: false, msg});
		res.send({success: true, data});
	});
})

app.post("/api/post/new",(req,res)=>{
	let payload = {
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
		timestamp: new Date().getTime() * 1000
	}
	let newPost = new PostModel(payload);
	newPost.save((msg,data)=>{
		if(msg)res.send({success: false, msg});
		res.send({success: true, data});
	});
})

app.post("/api/post/update",(req,res)=>{
	let id = req.body._id;
	let payload = req.body;
	PostModel.findByIdAndUpdate(id, payload, (msg,data)=>{
		if(msg)res.send({success: false, msg});
		res.send({success: true, data});
	});
})

app.post("/api/post/remove",(req,res)=>{
	let id = req.body._id;
	PostModel.findById(id).remove((msg,data)=>{
		if(msg)res.send({success: false, msg});
		res.send({success: true, data});
	});
})



app.listen(process.env.PORT || 3000,err=>{
	if(err)console.error(err);
	console.log("server has started on port %s", process.env.PORT || 3000);
})