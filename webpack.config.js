var path=require("path");
var htmlwebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:{
		main:"./src/script/main.js",
		bundle:"./src/script/bundle.js",
		app:"./src/app.js"
	},
	output:{
		path:path.join(__dirname,"dist","js"),
		filename:"[name]-[hash].js"
	},
	module:{
		loaders:[
          {
          	test:/\.css$/,
          	loader:"style-loader!css-loader"
          },  
          {
          	test:/\.(jpg|png|gif)$/,
          	loader:"file-loader",
          },
		]
	},
	plugins:[
	new htmlwebpackPlugin({
		filename:"index.html",
		template:"index.html",
		// inject:"body"
	}) 
	]
}