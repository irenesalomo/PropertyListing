About this application:
PropertyListing allows you to view list of property based on JSON file. 
There are 2 property lists: Result Property and Saved Property.

You can save any result property into the Saved Property list or remove any property from Saved list. 

If you already save a property, then accidentally try to save it again, it won't allow you to do so, until you remove it from the Saved list

================================
Development stack:
I'm using Vanilla JS + jQuery to implement this Property Listing features.
RequireJS is used as module loader, while Handlebars is used for Javascript Templating. 

================================
To run this project:
1. copy the entire PropertyListing folder into the  directory where your web server looks for files to serve on your domain, e.g. /htdocs/
2. Open index.html from your browser
3. To view the testing report, open /tests/SpecRunner.html

================================
To set up project for development mode:
1. Make sure npm is installed on your machine
2. Run this on the project folder:
npm install gulp gulp-rename gulp-less gulp-clean-css gulp-concat gulp-uglify-es gulp-replace --save-dev
3. Enjoy