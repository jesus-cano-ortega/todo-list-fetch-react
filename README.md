# <img src="https://github.com/jesus-cano-ortega/js-introduction-exercises/blob/main/assets/resources/img/face.png" width="45" alt="Personal Logo"> To-Do List with React (Fetch)

<p>
  <a href="https://silver-zebra-yvuvil9a.ws-eu17.gitpod.io/"><img src="https://raw.githubusercontent.com/4GeeksAcademy/react-hello/master/open-in-gitpod.svg?sanitize=true" />
  </a>
</p>

The objective of this project is to display a To-Do List with React and using Fetch to communicate wiht an API. The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. 

To put it more simply; Fetch is an interface for fetching resources.

### Instructions

- Make your to-do list sync with the backend API every time a task is added or deleted.
- Add a clean all tasks button that will delete the entire list from the server and update the empty list on the front-end.

There are 3 critical moments in the application timeline (a.k.a. The runtime) to focus on your integration:

- After the list loads empty for the first time (componentDidMount): you should fetch (GET) the data from the API and update the tasks when the information finally arrives.
- When a new task is added: You should PUT the new list on the server.
- When a task is deleted: You should PUT the new list on the server.

##### REMEMBER: 

Once the progress and flow of the project is finished, you must commit and push the repository remotely, using the following command:

```
$ git add . 
$ git commit -m "Message"
$ git push origin repo-remote
```

This template is similar to create-react-app but it's meant for 4Geeks Academy students.

##### and install the npm package:
```
$ npm install
```
## Start coding!

For Windows, Mac, Linux or Gitpod, start the webpack server with live reload:
```
$ npm run start
```

You can update the `styles/index.scss` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.