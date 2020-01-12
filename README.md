# TODO WEB APPLICATION

The TODO single page web application uses JavaScript to dynamically update the content of our HTML page after the page loads. The application page is a fluid user interface that allows users to rapidly add tasks to the to-do list or indicate tasks have been completed with a line across the task.  


![Nomster main page](/app/assets/images/todomainpagescreenshot.png)


## Tools used during the Application Development include

Ruby on Rails. Ruby version 2.5.3 and rails version 5.2.3

Sublime Text Editor

PuTTY

AJAX 

RESTful API 

jQuery

rspec and FactoryBot

JSON 

HTML and CSS

Git 

GitHub

Heroku



## Creating and Running the application

Set up the initial project structure by creating a new rails web application that uses Postgresql and create an initial, empty database by running rake db:create to have a place to store information. Start the server. Construct the web development pipeline: git, github and heroku. This will save and run the application code in the development and production environment. 

To develop a static page that contains the HTML of our single-page to-do app we set up a model and database, build the infrastructure which includes controllers, routes tables and view files. 

FactoryBot and rspec features are implemented using TDD (Test Driven Development) in the Rails app to set up a standard testing environment for the application. The tests are a way to verify that the code indeed performs as expected without having to refresh the application page. The tests ensure that errors that would potentially cause the application to malfunction are detected and rendered in the terminal window. FactoryBot contains a template of the dummy data we want to quickly be able to add to our database and is not usable on production (Heroku).  

Tasks in the database are initially loaded into the database through the rails console and represented in a JSON format when a HTTP request is made to the web application. A JSON API is a web application that responds with JSON rather than HTML. Its intended user is a computer program rather than a user who is pointing and clicking

The tasks stored in our database are then pulled into our todo application by doing an AJAX request, with the jQuery.get method. AJAX facilitates the ability to do a jQuery HTTP get request that pulls data from an external source. The items in the to-do list are loaded from the JSON API and the data  is used to build HTML for the page. The next step is to execute JavaScript code after the page fully loads to start dynamically adding HTML list elements to the unordered to-do list.

Code is developed to indicate the task completion status in the list item. This is to change the way completed tasks are displayed so that they look different from tasks that are not completed.The ability to update or delete a task is also added through a RESTful JSON API. 

Style the pages using HTML and CSS.

Save the code by pushing it to GitHub and showcase the application in production by pushing it Heroku.


## View the application in the link provided below

[TODO](https://todoster-dessy-owiti.herokuapp.com/)


