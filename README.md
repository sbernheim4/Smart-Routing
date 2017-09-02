# Smart-Routing


## About
Quick example of how page routes can be set up automatically without having to write a sepearate function for each url like so `app.get('about' () => {res.send('<h1>About</h1>')})`. It has a function that looks at the url path and finds the file in the public folder with that same name and returns the path to that file as a string. This way simple routes can be easily maintained. 
