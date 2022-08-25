![Subskill](https://user-images.githubusercontent.com/55931217/186774951-b94f2b17-c3ba-47bb-94c2-65de4f9bbf4a.png)

# Subskill - Transport Society

## Table of contents

- [About](#about)
- [Overview](#overview)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [What I can improve](#what-i-can-improve)

- [Me!](#me)

## About

This is a web integration exercise that I realized from a desktop model which was provided to me by the company Subskill; it's a technical test that have for goal to validate my knowledge from a front-end point of view (precise integration, respect of the creation, animation, …).
<br/><br/>
I had to integrate and respect the design as closely as possible and imagine and then make the page fully responsive without a model provided beforehand

## Overview

### Links

- Figma model : https://www.figma.com/file/JHpfKTPTi4VyQvBjIbAvYf/TEST-INTE?node-id=0%3A1
- Live Site URL : https://transport-society-yvelchrome.netlify.app
  <br/>
  [![Netlify Status](https://api.netlify.com/api/v1/badges/558bb020-fe2e-4d19-a0dd-978910221adb/deploy-status)](https://app.netlify.com/sites/transport-society-yvelchrome/deploys)

### Screenshots

![Desktop ver.](https://user-images.githubusercontent.com/55931217/186775240-470a3642-b5a6-4336-883d-58957527c0df.png)

## My process

### Built with

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFD700?style=for-the-badge&logo=javascript&logoColor=black)

### What I learned

- It's the first time I made a landing page, by that I mean a page with multiple different sections; they were all requiring a different approach, it was a really great exercise that improved my skills by A LOT, especially in terms of responsiveness, I'll try to list some tips and tricks I learned :

  - Setting a width according to a number of defined characters (here 60) thanks to the `ch` unit :
    ```css
    max-width: 60ch;
    ```
  - Setting a width or height of a grid element to it's `max-content` :

    ```css
    grid-template: max-content/repeat(3, max-content);
    ```

    I kept using pixels or percentages to try to find the best width or height for each element but this is a way better solution; the element can take the space it needs without having to shrink or make its container take too much empty space. (since it doesn't adapt to the screen width however, it's needed to pay attention for it to not overflow.)

  - Using the `clamp` function to resize a length, a width or a font-size dynamically according to the screen width :

    ```css
    font-size: clamp(0.5rem, 3.8vw, 0.9375rem);
    ||
    width: clamp(30ch, 60%, 44ch);

    /* If using a preprocessor like sass/scss, you can use the following syntax since those functions
    (min / max / clamp ) are not recognized when compiling as written above */

    font-size: #{"clamp(0.5rem, 3.8vw, 0.9375rem)"};
    ||
    width: #{"clamp(30ch, 60%, 44ch)"};

    ```

    This function takes 3 parameters, the minimum value, a default value and the maximum value. It's a really great way to make elements resize dynamically without having to use media queries.

  - This one is not about a specific function or unit but I learned a lot about media queries, I used them a lot in this project to make the page fully responsive (or at least the best as I could 😅); I think it's also a good part of my responsive learnings.

  - It's also the first time I made use of an API, I used here the Google map API to display a map and markers on the page.

### To-do list

- Change the image of the hero header and the third section automatically based on a timer.
- Make the map interactive (zooming on the locations when clicking on the markers or their corresponding “buttons”).
- Make the dropdown menu work for both the desktop and mobile navbar.

## Me!

- LinkedIn - [@Steven Godin](https://www.linkedin.com/in/steven-godin/)

Some more of my front-end development projects here :

- Frontend Mentor - [@yvelchrome](https://www.frontendmentor.io/profile/yvelchrome)
