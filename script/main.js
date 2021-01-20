const userListFromApi = "";
var searchParam = "";
var validResults = {};
var validResultsFormatted = {};
var selector = "ul";

async function getUsers() {
       try {
              userListFromApi = await request('GET /search/users', {
                     baseUrl: "https://github-enterprise.acme-inc.com/api/v3",
                     headers: {
                            accept: "application/vnd.github.v3+json",
                            "user-agent": "octokit-rest.js/17.0.0 octokit-core.js/2.4.2 Node.js/13.6.0 (Windows 10; x64)",
                            authorization: "token 31575f3024ccec08660f7e34c234fffbf5b89595",
                            "content-type": "application/json; charset=utf-8"
                     },
                     q: 'q=',
                     order: "50",
              });

              console.log(`${userListFromApi.data.length} results found.`);
       }

       catch (rejectedValue) {
              console.log("Some error occurred");
              console.log(rejectedValue);
       }
}


document.addEventListener("DOMContentLoaded", (event) => {

       document.getElementById("inputField").addEventListener("input", (event) => {
              searchParam = event.target.value;
              updateView(searchParam);
       });

       document.getElementById("inputField").addEventListener("focusin", (event) => {
              searchParam = event.target.value;
              updateView(searchParam);
       });

       document.getElementById("inputField").addEventListener("focusout", (event) => {
              updateViewFocusOut();
       });

       document.getElementById("resetButton").addEventListener("click", (event) => {
              document.getElementById("inputField").value = "";
       });

});

function updateView() {

       let userListFromApi = ['mad', 'matt', 'met', 'matty', 'matthew', 'matthias', 'andy', 'lau', 'marcus'];
       //let userListFromApi = getUsers(`q=${searchParam}`);

       if (searchParam.length >= 3) {

              validResults = function (searchParam, userListFromApi) {
                     return userListFromApi.filter(eachResult => eachResult.toLowerCase().includes(searchParam.toLowerCase()));
              }(searchParam, userListFromApi);

              validResultsFormatted = function (validResults) {
                     return validResults.map(result => `<li class="list-group-item">${result}</li>`);
              }(validResults);

              let innerHtml = validResultsFormatted.join("");
              document.querySelector(selector).innerHTML = innerHtml;

       }

       else {

              validResultsFormatted = {};
              document.querySelector(selector).innerHTML = "";

       }
}

function updateViewFocusOut() {
       document.querySelector(selector).innerHTML = "";
}
