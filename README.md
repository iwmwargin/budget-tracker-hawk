
  ![License](https://img.shields.io/badge/License-MIT-yellow.svg)
  # PWA Budget Tracking App
  ## Table of Contents
  * [Description](#description)
  * [User Story](#user-story)
  * [Languages](#languages)
  * [Link to URL](#live-url-link)
  * [Testing](#testing)
  * [Photos](#photos)
  * [Contributors](#contributors)
  * [License](#license)
  

  ## Description
  This is a budget tracking app that allows the user to add and subtract funds so they can track their expenses.  It is designed as a PWA
  so that it can be used when the user has no internet service and still retain the data that will be added when they have service again.
  
  ## User Story
  ``` md
  AS AN avid traveler
  I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
  SO THAT my account balance is accurate when I am traveling 
  ```
  
  ## Acceptance Criteria
  ``` md
  GIVEN a budget tracker without an internet connection
  WHEN the user inputs an expense or deposit
  THEN they will receive a notification that they have added an expense or deposit
  WHEN the user reestablishes an internet connection
  THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
  Mock-Up
  ```
  
  
  ## Languages
   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
   <br>
    ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
   <br>
    ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
   <br>
    ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
   <br>

  ## Live URL Link
  https://shrouded-brook-41588.herokuapp.com/
  
  ## Testing
  
  To test the offline functionality of the app:
  ``` md
  * Go to live url link.
  * Open DevTools and go to Network tab.
  * Click No throttling and select offline.
  * Add a transaction.  
  * Return to DevTools and select no throttling in Network tab again.
  * A modal will pop up to let you know that saved transactions have been submitted.
  * Refresh the page and the transaction added offline will still be available.
  ```
  
  
  ## Photos
  **_Image of Site_**:
  <br>
  <img src="https://github.com/iwmwargin/budget-tracker-hawk/blob/main/images/Budget%20Hawk.png">
  <br>
 
  
  ## Contributors
  ||
  [Eric's Github](https://github.com/iwmwargin) || Eric's Email - iwmwargin@gmail.com


  ## License
  This project is licensed under the MIT. Please see https://opensource.org/licenses/MIT for more details.  



