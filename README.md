# FriendFinder App

This app is compatibility based "FriendFinder", a dating application. This full-stack app takes in results from a user in a form of a survey. It then compares the user's answers with those from other users and decides who the user is best suited to be friends with. 

The Express framework is leveraged to handle routing of the app, which is deployed on [Heroku](https://quiet-caverns-82196.herokuapp.com).

#Functionality

1. The #FriendFinder App survey contains 10 questions and each answer ranges from 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages `express`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`, which is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`, which is used to handle incoming survey results. This route is also used to handle the compatibility logic.

# App Logic
To determine the user's most compatible friend the following logic was used:

   * The results for each user is converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * A comparison is made between the current user and all other users  
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Note: the absolute value is used to calculate the differences to avoid negative values, (`5-3` and `3-5` equate to `2`)
   * The closest match will be the user with the least amount of difference.

Once a match is established the current user's most compatible friend, display the result as a modal pop-up. The modal displays both the name and picture of the closest match.



