# Autocomplete UI
This simple webpage allows you to view the implementation of a user interface with autocomplete functionality.

As the user types in a search query, the client will query the [GitHub REST API](https://docs.github.com/en/rest/reference/)search#search-users (via a Spring Boot proxy application) and populate a list of users matching the search term.

## Pre-Requisites
The instructions in _'Local Setup'_ assume that **Java 8** and **Maven** have been installed.

* [Steps to Install Java - refer to this page](https://www3.ntu.edu.sg/home/ehchua/programming/howto/JDK_Howto.html#zz-1)
* [Steps to Install Maven - refer to this page](https://maven.apache.org/install.html)
* [Cloning repository - reference](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Run locally (on Windows)
1) Open the command prompt from the Windows Start Menu.

2) Change to the root directory where the project's files are stored locally.
(The root directory is the directory with the pom.xml file.)
```
cd <insert-directiory-path-here>
```
3) Build the application using the following command:
(This step resolves the dependencies for the project, compiles, tests and packages the code into a Web Archive (.war) file that can be deployed easily with Spring Boot.
```
mvn install
```
4) Start the application via Maven:
```
mvn spring-boot:run
```
5) Finally, open your internet browser(Chrome/Firefox/Edge/Safari) and enter this URL:
```
http://localhost:8080/index.html
```
The website should be up and running.

## Key Frameworks used
* Client-side: Bootstrap, JQuery

* Server-side: Spring Boot

## Other Tools Used
* Visual Studio Code IDE

* Maven

* Node.js, npm, Python (prototyping)

## Design Decisions Made
* **Responsive** - Multi-device, multi-browser compatible

* **User-friendly** - Clean and uncluttered layout with clear description (e.g textbox description) and functionality (e.g clear textbox)

* **Modern** - Opted to use flat design elements instead of a skeumorphic design style

* **Fast** - Opted to use minified files where possible

## Possible Areas for Further Extension
* Add validation to the input, based on GitHub's allowed characters for usernames

* Addition of header and footer to the webpage

* Exception handling if GitHub API returns anything other than _Http Status Code 200_

* Use of tooltips/popovers to inform that no such user exists

* Fallback for external resources

* Aria implementation
