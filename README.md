![](https://img.shields.io/badge/MovieSpot-green)

# MovieSpot

> MovieSpot is your favorite spot for the latest and favorite TV shows, shipped with a really cool infinite scroll feature!. You can view the details of the show, "like" a show, and even comment. You can also see other comments which might give you a general idea about what people think about the show.
> It is built with HTML, CSS and JavaScript with data from the TvMaze API(tv show data) and the Involvement API(likes and comments)


## Video Presentation
[Presentation Link](https://www.veed.io/view/eb1a75de-f380-49c5-aca7-f7546f984e26)

## Mini Demo

![screenshot](./src/images/presentation.gif)


Additional description about the project and its features.

## Built With

- Major languages (HTML, CSS, JavaScript)

- Frameworks 
    ``` bash
        Bootstrap css framework
    ```

- Technologies used 
  
  ``` bash
  - Webpack(Code Bundlng et al)
  - Jest(for testing)
  - Git(version control)
  - ESLint(JavaScript linting)
  - WebHint(linting tool)
  - Stylelint(style linting)
  ```

## Live Demo

[Website Link](https://clintonjosephs.github.io/MovieSpot/)


## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
 - A text editor(preferably Visual Studio Code)

### Install
  -  [Git](https://git-scm.com/downloads)
  -  [Node](https://nodejs.org/en/download/)
### Usage
#### Clone this repository

```bash
$ git@github.com:clintonjosephs/MovieSpot.git
$ cd MovieSpot
```
#### Run project

```bash
$ npm install
$ npm run start # this will make webpack watching for your changes in code
$ npm run test #This is to run the tests on the count method
```

#### Open page in browser
```bash
$ open dist/index.html
```

## Interaction with the TvMaze API
- Each new query for TV shows is done with the GET method using the BASEURL
    ```bash
      https://api.tvmaze.com/
    
    ```
 To get all shows that the title begin with 'a', GET request will be made to the below URL

  ```bash
    https://api.tvmaze.com/search/shows?q=a

  ```
  
## Interaction with the Involvement API
- Each new query for Involvement API is done using the below as the BASEURL
    ```bash

      https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/
    
    ```
- To create a new app, a POST request is made to the API using the endpoint
    ```bash
      /apps/
    ```
  This returns the appID

  ```bash
    abc234
  ```
  ### Likes
- A POST request is made to the API when a user clicks on the like button using this endpoint:
  #### Endpoint
  ```bash
    /apps/:app_id/likes/
  ```
  
  body parameters
  ```bash
  { 
	  "item_id": "item1"
  }
  ```
  Return value for POST action: 201 status (created)


- The GET request returns data in JSON format like this:

  ```bash
  [
    {
        "likes": 5,
        "item_id": "item1"
    },
    {
        "likes": 10,
        "item_id": "item2"
    }
  ]
  ```

### Comments
- A POST request is made to the API when a user clicks on the like button using this endpoint:
  #### Endpoint
  ```bash
    /apps/:app_id/comment/
  ```
  
  body parameters
  ```bash
  {
    "item_id": "item1",
    "username": "Jane",
    "comment": "Hello"
  }
  ```
  Return value for POST action: 201 status (created)


- The GET request returns data in JSON format like this:
    #### Endpoint
  ```bash
    /apps/abc234/comments?item_id=item1
  ```
  It returns
  ```bash
  [
    {
        "comment": "This is nice!",
        "creation_date": "2021-01-10",
        "username": "John"
    },
    {
        "comment": "Great content!",
        "creation_date": "2021-02-10",
        "username": "Jane"
    }
  ]
  ```
  <br>
## Authors

👤 **Clinton Mbonu**

- GitHub: [@clintonjosephs](https://github.com/clintonjosephs)
- LinkedIn: [LinkedIn](https://linkedin.com/in/clinton-mbonu)

👤 **Ahmed Tawfik**

- GitHub: [github](https://github.com/ahmedta)
- Twitter: [Twitter](https://twitter.com/_ahmedta)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/clintonjosephs/MovieSpot/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
