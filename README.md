5th, April 2023


![MoviesZoneLogo](https://github.com/manosakpujiha/movies-zone/assets/70998471/1c361136-0f5d-4c43-9185-0a1aaffebb88)

* Your one-stop destination for the latest movie trailers and teasers.

# Project Proposal

---

---

Title: Movies Zone

Tag Line: Your one-stop destination for the latest movie trailers and teasers.

Type of Application: A Video Trailer Streaming Website.

## Introduction

The Movies Zone is a web application designed to be a one-stop destination for users who want to watch the latest movie trailers and teasers. With an extensive library of trailers from various movie genres, users can explore the latest movies, watch trailers, and stay up to date with what's new in the film industry. The application provides a user-friendly interface that allows users to search for trailers based on specific movie genres and watch them seamlessly. The aim of the Movies Zone is to provide a convenient platform for movie enthusiasts to discover new movies, watch trailers, and decide which movies to watch in the cinema or on streaming platforms. In the following sections, we will discuss the team, technologies, challenges, risks, and infrastructure of the Movies Zone project.

## Team:

I will be working alone on this project and my name is Manos Akpujiha. As a solo developer, I will have to complete all aspects of the project including design, development, testing, and deployment. I chose to work alone on this project to ensure that a very well-coupled project is achieved at the end of the day.

## Technologies:

### Front-End:

HTML, CSS and Javascript: three essential technologies, used to provide, structure, style and functionality to websites,  which form the foundation of modern web development.

ReactJS: a JavaScript library for building user interfaces.

React-Youtube: a third-party React component that allows developers to easily embed YouTube videos in their React applications. It provides a simple, lightweight wrapper around the YouTube iframe API, making it easy to create and control YouTube players within a React application.

Movie-trailer: a Node.js package that allows you to easily search for and retrieve the trailer of a movie from YouTube using its title or ID. Movie-trailer would be used to dynamically fetch and display the trailer of a selected movie based on its title or ID.

### Back-end:

Node.js: a JavaScript runtime environment that allows for server-side scripting.

Firebase: a mobile and web application development platform that offers a suite of backend services to help developers build high-quality applications.

Firebase offers a variety of the services below which I would be using:

* Realtime Database: a NoSQL database that allows developers to store and sync data in real time between clients and servers.
* Firestore: a fully managed NoSQL document database that offers more powerful querying and scaling capabilities than the Realtime Database.
* Authentication: a service that allows developers to easily add user authentication to their applications.
* Cloud Storage: a service that allows developers to store and serve user-generated content, such as images and videos, in the cloud.
* Cloud Functions: a serverless compute platform that allows developers to run backend code in response to events triggered by Firebase services and HTTP requests.
* Hosting: a service that allows developers to deploy and serve their web applications on Firebase's global content delivery network.
* Analytics: a service that allows developers to track user engagement and app performance.

Firebase is known for its ease of use, quick setup, and integration with popular development frameworks such as Angular, React, and Vue. It is a popular choice for startups, small businesses, and individual developers who want to build high-quality applications quickly and easily.

### Alternative Technologies:

An alternate technology option for ReactJS could be AngularJS. While AngularJS is a popular and powerful framework for building web applications, it has a steeper learning curve than ReactJS. I chose ReactJS because of its simplicity and the fact that it is widely used in the industry. Similarly, on the backend, an alternative to using Firebase and its accompanying technologies could be MySQL for the database, and Php for the server and its accompanying frameworks, this is also popular, However considering the time frame for the project, I chose, Firebase, due to its simplicity, ease of use and quick deployment options.

## Challenge:

The problem that Movies Zone is intended to solve is to provide users with a platform to easily access the latest movie trailers and teasers. The platform will help movie enthusiasts and casual viewers alike stay updated with the latest movie releases and make informed decisions on which movies to watch.

Movies Zone will not solve the problem of streaming full-length movies or TV shows. The platform is solely focused on providing users with access to movie trailers and teasers.

The target audience for Movies Zone includes movie enthusiasts, casual movie viewers, and anyone looking to stay up-to-date with the latest movie releases. The platform will not be dependent on a specific locale and will be accessible globally.

## Risks:

Technical risks include potential server downtime or data loss due to unforeseen errors or attacks. To safeguard against these risks, I plan to implement regular backups, use secure authentication methods, and monitor server performance.

Non-technical risks include a lack of interest from potential users or a crowded market space. To prevent these negative outcomes, I plan to conduct market research and implement effective marketing strategies to promote the platform.

## Infrastructure:

I will be using GitHub Flow for branching and merging in my repository. For continuous development and deployment, I plan to use cloud-based platforms such as Firebase, Netlify etc. I will populate the app with data from available sources such as “the movie database API”, ([https://www.themoviedb.org/](https://www.themoviedb.org/)) and then use this data to scrape movie trailers and teasers data from other publicly available sources such as Youtube, Netflix, Amazon Prime, etc.

Branching and Merging: I will use the GitHub flow process for branching and merging, creating a new branch for each feature or bug fix and merging into the main branch once it has been fixed and reviewed. In the future when I might have other team members, maintaining the application, we would also make use of pull requests to facilitate code reviews and ensure that only high-quality code is merged into the main branch.

Deployment Strategy: For deployment, I will make use of a continuous integration and deployment (CI/CD) pipeline. The application will be automatically deployed to a staging environment after each successful push to the main branch. Once I am satisfied with the changes in the staging environment, I will push the changes to the production environment. I will also make use of containerization technologies like Docker to ensure that the application runs consistently across different environments.

Data Population: To populate our app with data, I will make use of a combination of manual data entry and automated data scraping using tools like React-Youtube and Movie-trailer libraries. I will manually enter data for the movie trailers, ratings, and other relevant information while using web scraping tools to gather additional data such as cast and crew information. I will also use Firebase Firestore to store the data in a scalable and easily accessible way. The end user would also be able to vote to improve or reduce the ratings and add their reviews and comments.

Testing Tools: For testing, I will make use of automated testing tools like React Testing Library. I will write unit tests for each component in the application to ensure that they are functioning correctly. I will also make use of end-to-end testing tools like Cypress to simulate user interactions and ensure that the application is working as expected. Additionally, I will perform manual testing to ensure that the user experience is optimal and that the application is accessible to all users.

## Existing Solutions:

Similar products or solutions that currently exist include YouTube and IMDb. However, Movies Zone differs in that it is solely focused on providing access to movie trailers and teasers, whereas YouTube and IMDb offer a wider range of video content. Additionally, Movies Zone aims to provide users with a more curated and user-friendly experience specifically tailored to movie trailers and teasers.

I have chosen to reimplement this idea based on my own specifications as I believe that there is room in the market for a more focused and user-friendly movie trailer streaming platforms.

## Conclusion:

The Movies Zone project proposal outlines a plan for developing a video trailer streaming website that offers a seamless experience to users seeking the latest movie trailers and teasers. The proposed technologies and infrastructure provide a strong foundation for a robust and scalable application, while the risk assessment highlights potential challenges and safeguards that will ensure the successful completion of the project. With careful planning and execution, I am confident that Movies Zone will be a valuable addition to the world of online movie streaming.

**
