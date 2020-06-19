# 05-Homework-JoseBurgos

Here is a link to the deployed webpage https://joseburgos1993.github.io/05-Homework-JoseBurgos/Develop/.

This is my github repository https://github.com/JoseBurgos1993/05-Homework-JoseBurgos.

This is a screenshot of my webpage: <img width="955" alt="screenshot" src="https://user-images.githubusercontent.com/57579330/85183274-21601580-b259-11ea-8a6f-5d21af09ec38.png">


For this assignment, I made an hourly planner. On startup, the page will display the header, which includes today's date via moment.js. Below that is the planner itself, setup as a series of rows with three columns each.
The left column contains a time from 8am to 6pm, one row for each hour. The middle column contains a text field where the user can input some activity or event. The right column contains a button which when pressed, will save the data from the middle text field of that row to local storage. Upon reloading the page, any data in local storage will automatically be read and then written into the text fields. The text fields will also change color. If the text field is from an hour already past, it becomes gray. If it is the current hour, it turns red. If it is in the future, it turns green.

To do this project, I first wrote it all in javascript. While it did work, I realized that I didn't use the style.css file provided at all. On top of that, the code was very messy. I redid it, this time filling out the index.html file with my rows and columns. This made it much easier for me to write my javascript/jquery code. Once everything was beautiful and worked, I decided to re-convert the html back to javascript. This time, with all the html written out for me, I was able to write much more coherent javascript.