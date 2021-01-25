const resultSet = "#resultSet";

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
              document.querySelector(resultSet).innerHTML = "";
       });

       document.getElementById("resetButton").addEventListener("click", (event) => {
              document.getElementById("inputField").value = "";
              document.querySelector(resultSet).innerHTML = "";
       });

});

function updateView(searchParam) {

       if (searchParam.length >= 3) {

              var validResults = async function (searchParam) {

                     await fetch("./api/users/" + searchParam)
                     .then(response => response.json())
                     .then(data => {
                            var view = data.items.map(element => 
                                   `<a href="#" class="list-group-item list-group-item-action">@${element.login}</a>`);
                            document.querySelector(resultSet).innerHTML = view.join("");
                            })
                     .catch(console.error);

              }(searchParam);
       }

       else {
              document.querySelector(resultSet).innerHTML = "";
       }

}
