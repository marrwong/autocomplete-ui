# Autocomplete UI
This simple webpage allows you to view the implementation of a user interface with autocomplete functionality.

## Pre-Requisites
The instructions in _'Local Setup'_ assume that **Node.js** (and the bundled application **npm - Node Package Manager**) OR **Python** (versions 3.0 and above) have already been installed. Please follow the instructions in this section first if Node.js has not been installed yet.

Download the latest LTS version [from the Node website](https://nodejs.org/en/download/) for your operating system, and run the installer.

After Node is installed, open the command prompt and run the following:
```
node -v
```
You will see the version of Node.js installed if it has been installed properly.

For Python, you may download them from [here](https://www.python.org/downloads/)

## Local Setup (Node.js)
1) Run the following command. This command installs the http-server package on your machine:
```
npm install -g http-server
```
2) Next, change to the root directory where the project's files are stored:
```
cd <insert-directiory-path-here>
```
3) Then, start the http server:
```
http-server
```
4) Finally, open your internet browser(Chrome/Firefox/Edge/Safari) and enter this URL:
```
http://localhost:8000/index.html
```
The website should be up and running.

## Local Setup (Python)
1) Change to the root directory where the project's files are stored:
```
cd <insert-directiory-path-here>
```
2) Start the http server:
```
python -m http.server
```
3) Finally, open your internet browser(Chrome/Firefox/Edge/Safari) and enter this URL:
```
http://localhost:8000/index.html
```

The website should be up and running.

## Stack
* Bootstrap

* Jquery

* Octokit core.js

## Other Tools Used
* Visual Studio Code

* Node.js, npm

## Design Decisions Made
* Responsive - Multi-device, multi-browser compatible

* User-friendly - Clean and uncluttered layout with clear description (e.g textbox description) and functionality (e.g clear textbox)

* Modern - Opted to use flat design elements, eschewing the skeumorphic style,

* Fast - Opted to use minified files where possible

## Possible Areas for Further Extension
* Add validation to the input, based on GitHub's allowed characters for usernames

* Packaging of resources (webpack)

* Addition of header and footer

* Fallback for external resources

* Aria implementation

* Dropdown box to allow user to choose what to search

* Use of tooltips/popovers to inform that no such user exists
