# News Explorer Frontend

This is a node.js news application powered by Express that provides the function to find and save the latest articles on any topic!
![ScreenshotOfSearchResultsHome](/src/images/neHomePage.png)

### Domain

- Front end: [https://news-explorer.okzk.com/](https://news-explorer.okzk.com/)
- Back end: [https://api.news-explorer.okzk.com/](https://api.news-explorer.okzk.com/)

## General info

This project allows for users to search for news articles published from the day of the search up to fourteen days before. Users can seamlessly create an account in order to save any articles that may peak their interest.

## Technologies

Project is created with:

- React: 18.2.0
- Node.js: 18.15.0
- Express: 4.18.2

### Features

- Explore news articles published up to fourteen days from the time of search
- Create an account and sign in to your account
- Bookmark articles to access them in your "Saved Articles" directory
- Remove bookmarked articles from your "Saved Articles" directory

## Usage

After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `npm start` to start the application. You will then be able to access it at localhost:3000

## Screenshots

The applications offers a user-friendly, aesthetically-pleasing user interface that makes it easy for anyone to "pick up" my app and maneuver their way through the application.

### Home Page When Not Signed In

![ScreenshotOfHomePageWhenNotSignedIn](/src/images/neNliHome.png)

When first coming in to the website, you will be welcomed by a header with a modern design. A search bar will appear in front of the user, with an visually appealing background warmly inviting the user to search for news artciles.

### Aricles When Not Signed In

![ScreenshotOfArticlesWhenNotSignIn](/src/images/neNliBookmarkHover.png)

Articles related to what the user searches for will appear in groups of three. If the user wishes to see three more articles, clicking on the button labeled "Show more" will make three additional cards appear. When the user hovers over the bookmark button on an article, two things happen. Firstly, the bookmark icon becomes black. Secondly, a message appears beside the bookmark button advising the user to log in if the user wishes to bookmark an article.

### Home Page When Signed In
