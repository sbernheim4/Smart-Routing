const express = require(`express`);
const app = express();
const path = require(`path`);

const port = 1337 || process.env.PORT;

app.all(`/*`, (req, res, next) => {
	console.log(`req for ` + req.path);
	next();
});

app.get(`/*`, (req, res) => {
	res.sendFile(fileFinder(req.path));
});

app.listen(port, () => {
	console.log(`listening on port: ${port}`);
});

function fileFinder (urlPath) {
	if (urlPath === '/'){
		return path.resolve(`public/home.html`);
	} else {
		urlPath = urlPath.substring(1, urlPath.length);
		return path.resolve(`public/${urlPath}.html`);
	}
};
