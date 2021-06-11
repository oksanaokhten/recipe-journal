# **Recipe Journal App**
[View the live project here.](https://recipe-journal-project.herokuapp.com/)

This is a community app for sharing recipes and for owner to promote a e-commerce website with kitchen tools for sale.

![Recipe Journal](static/images/recipe-journal.png)
## **User Experience (UX)**
* ### **User stories**
    * **First Time Visitor Goals**
        * As a new visitor, I want to easily understand the purpose of website and see an image, which represents it.
        * As a new visitor to the website, I want to easily navigate throughout the site to find the content.
        * As a new visitor, I want to register on site and be a member of community.
        * As a new visitor, I'd like to be able to add and share recipes.

    * **Returning Visitor Goals**
        * As a returning visitor, I wish to correct my recipes and delete them.
        * As a returning visitor, I wish to search for certain recipes.
        * As a returning visitor, I wish to find some tips about cooking tools.

       
* ### **Design**
    * **Colour Scheme**
        - Two colours used for the site- primary colour is teal, secondary is dark-orange.
        
    * **Typography**
        - The Lato and Architects Daughter fonts were used at website with Sans Serif and cursive as the fallback fonts accordingly, in case chosen fonds are not imported correctly. The Lato is the main font, Architects Daughter was used for the headingHero image text. Both of chosen fonts look attractive and easy to read.
    * **Imagery**
        - The large warm background image is designed to catch the user's eye.

* ### **Wireframes**
    * **Home Page** 
    ![Recipe Journal](static/images/home-no-user.png)

    * **All Recipes Page** 
    ![Recipe Journal](static/images/all-recipes-user.png)

    * **Add Recipe Page** 
    ![Recipe Journal](static/images/add-recipe-page.png)

    * **Recipe Detail Page** 
    ![Recipe Journal](static/images/recipe-detail-page.png)
## **Features**
* **Responsive on all device sizes**
* **Interactive elements**
* **Notification system**
* **Document Management System: CRUD**
* **Security**
* **Search options**
* **Simplicity**
* **Good image resolution**
* **Speed**
* **Flexibility**

## **Technologies Used**
### **Languages Used**
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
* [Python](https://wiki.python.org/moin/)
### **Frameworks, Libraries & Programs Used**
1. [Balsamiq](https://balsamiq.com/)
    - Balsamiq was used to design wireframes.
2. [Materialize](https://materializecss.com/)
    - Materialize was used to create responsive, stylish website and to navigate it easly.
3. [Google Fonts](https://fonts.google.com/)
    - Google Fonts were used to import chosen fonts into css file.
4. [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to import vector and social icons for style and identification purposes.
5. [Git](https://git-scm.com/)
    - Git was used as a version-control system for coding, tracking changes, commit to Git and push to GitHub.
6. [GitHub](https://github.com/)
    - GitHub was used to store all project code with everyday changes.
7. [jQuery](https://jquery.com/)
    - jQuery was used with Materialize to make the navbar and other components responsive but was also used for the smooth scroll function in JavaScript.
7. [Heroku](https://heroku.com/)
    - Heroku platform was used to deploy, run, and operate app entirely in the cloud.
7. [MongoDB](https://www.mongodb.com/)
    - MongoDB was used to keep the project data with easily CRUD access.
## **Testing**
- W3C Markup Validator

![html-checker](static/images/html-validator.png)
- W3C CSS Validator

![css-checker](static/images/css-validator.png)

- Lighthouse report

![lighthouse-report](static/images/lighthouse-home.png)


### **Testing User Stories from User Experience (UX) Section**
* **First Time Visitor Goals**
    * As a new visitor, I want to easily understand the purpose of a website and see an image, which represents it.
        - Upon entering the site, a new visitor greeted with a Journal name and an easily readable navigation bar with the links to other pages. Underneath there is a large Hero Image with a text that represents what a site is offer. Under the image, a new visitor can find some resently added recipes.
    * As a new visitor to the website, I want to easily navigate throughout the site to find the content.
        - A new visitor can observe, on the top of the page, a navigation bar with the links, which clearly describe the content of the pages.
        - Every recipe looks as a card with an image and some text. Click on, and a full recipe will be shown.
        - Footer also have the links to other pages.
    * As a new visitor, I want to register on the app and be a member of community.
        - Registration is straight forward. A new visitor could go to Register page, fill the form with username and password, and submit it.

        ![Register](static/images/register-user.png)

    * As a new visitor, I'd like to be able to add and share recipes.
        - To add a recipe, a registered user should go to New Recipe page, fill the form and submit it.

        ![Add](static/images/add-recipe.png)

* **Returning Visitor Goals**
    * As a returning visitor, I wish to correct my recipes and delete them.
        - To edit a recipe, returning visitor should go to a full recipe page. Then click on Edit button, fill/edit/correct the form and submit it.

        ![Edit](static/images/edit-recipe.png)

        - To delete a recipe, returning visitor should press a Delete button on a full recipe page. The modal popup will ask one more time if the recipe should be deleted. Press No if don't or YES if delete the recipe.

        ![Delete](static/images/delete-recipe.png)

    * As a returning visitor, I wish to search for certain recipes.
        - Search bar can be found on Recipes page under navigation bar. The search could be done by recipe name, food category and ingredients.

        ![Search](static/images/search.png)

    * As a returning visitor, I wish to find some tips about cooking tools. 
        - All recipes created by Admin have some tips and advertisement for cooking tools.

        ![Cooking Tools](static/images/cooking-tools.png)

### **Further Testing**
### **Known Bugs**
## **Deployment**
### **Heroku**

## **Credits**
### **Code**
- My project based on Task Management Tutorial. Python, JavaScript, CSS and HTML code was taken from it and changed for my app needs.
- Materialize HTML, CSS and JavaScript code was used for a modern responsive front-end.
- A modal popup HTML, CSS and JavaScript code was taken from [W3schools](https://www.w3schools.com/howto/howto_css_modals.asp) and change a bit. 

### **Content**
- Quote "Eat what makes you happy" were taken from [web card](https://media-cdn.tripadvisor.com/media/photo-s/0f/70/ac/84/eat-what-makes-you-happy.jpg).
- Footer text from [here](https://www.dvo.com/newsletter/weekly/2018/9-28-369/cooknart10.html) and [here](https://www.saymmm.com/sharemmm.php).
### **Media**
- The Front Page Image were obtained from [Unsplash.com](https://unsplash.com/photos/Orz90t6o0e4).
### **Acknowledgements**
- My Mentor for continuous helpful feedback, ideas and support.
- Tutor support at Code Institute for their support.
