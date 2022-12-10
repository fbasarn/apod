# Capstone Project

Feyza Basaran

040924173

Project: Astronomy Picture of the Day Search

Design Desicions
 - I prefered a dark background concept to have a feeling of the space for the astronomy pictures.
 - I have a minimal, plain design to let user focus on the pictures and the information on the website.
 - There are three main screens the user will see, the firs one is the landing screen where user needs to log in and enter a date.
 - Next, the astronomy picture of the date will show up on the page with the explanation. The little heart icon at the right bottom will let user to add the picture to their favorites. 
 - If user wants to see their favorite pictures, they will click on the favorites link on the left menu.
 - Clicking the heart for the second time will delete the picture from the favorites.


 Part-3 Steps and Challanges
 - I made the login page first. The hardest part was putting the background image in a position that I wanted. I had to decide if it's better to put the img in html or css.
 - I made the content section with the nav bar for user to see the content they asked for. Then on another pop up screen I made the favorites section for user to stock the images they choose.
 - I have never done a vertical navigation before, so I had to look it up from youtube to have an idea about how to achieve it.
 - Since I don't how much of an idea about how to use Javascript in my website for now, I had to make everything static. I may need to change some html later to add a dynamic Javascript instead.
 

 Part-4 Resources, Steps and Challanges

 - Resources: Nasa APOD API
              Font Awesome fonts
              Background Image: Nasa Jupiter Image - Enhanced image by Kevin M. Gill (CC-BY) based on images provided courtesy of NASA/JPL-Caltech/SwRI/MSSS.

- Steps:
- Javascript file is created, and necessary html elements stored into the vairables.
- An empty array created to hold the selected favorite images and an empty object created to hold the API content that will be displayed when user enters a date.
- A 'submit' event listener added to the form that fetches the API JSON Object and then calls the showContent(contents) function.
- The showContent(contents) function is created to display the JSON Object on the page. The function pushes the html structure into the empty array. Then with the innerHTML property and join method everything is stored inside the $contents variable, which is the div element that's supposed to show the content in the html page.
- A 'click' event Listener added to the $contents variable witch has three conditions: clicking on the image, the heart icon or the back button.
        - Clicking on the image changes the innerHTML of the $contents variable so the page only displays the hd version of the image that's clicked.
        - Clicking on the heart icon pushing the data of the JSON Object into the empty favorites array. And storing these information in the local storage.
        - Clicking on the back icon runs the showContent(contents) function so the page will display the actual content again.
- A 'click' event listener added to the $favorites variable which holds the favorites list item with an heart icon in the index.html page. The event listener runs the showFav() function
- The showFav() function is created to display the stored images in the page. First, the function gets the stored data from localstorage. If there is any data, and we turn them back to an array from string with the JSON.parse method. The empty html array is created inside the function. First I pushed the title into the array, then with iterating over the items in the favorites array the html structure is pushed into the html array. Then, all the html structure is stored into the $favs variable with join() method. $fav variable holds the div that is to display favorite images on the html page. Finally, I changed the innerHTML of the $content variable with an empty string. So, only the div that holds the favorite images will be displayed on the page.
- Next step, I changed the innerHTML with an empty string for the favorites button when the date form is submitted as well. Because when the user changes the date, I only wanted to show the content and not the favorited images.
- Finally, a 'click' event listener added to the trash icon, that appears when displaying the favorite images. First I stored the url dataset of the icon (which is the url of the image) into the 'url' variable. Then I used the findIndex() method to find the index of the object which has the same url, and stored that index number in the 'index' variable. Then with the splice() method 
