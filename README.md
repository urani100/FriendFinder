# FriendFinder App

# Friend Finder - Node and Express Servers

### Overview

In this project, is compatibility-based "FriendFinder" application, a dating app. This full-stack site takes in results from your users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Express was is leveraged to handle routing and the app was deployed on Heroku.

1. The #FriendFinder App survey contains 10 questions and each answer ranges from 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages `express` and `path`.

3. The `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`, which is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`, which is used to handle incoming survey results. This route is also used to handle the compatibility logic.


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

