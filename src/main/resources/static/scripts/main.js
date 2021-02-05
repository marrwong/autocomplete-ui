const inputField = document.getElementById('inputField');
const resetButton = document.getElementById('resetButton');
const resultSetHtml = document.querySelector('#resultSet');

document.addEventListener('DOMContentLoaded', () => {

       inputField.addEventListener('input', () => {
              if(inputField.value.length >= 3){
                     updateView(inputField.value);
              }
              else{
                     resetView();
              }
       });

       inputField.addEventListener('focusin', () => {
              if(inputField.value.length >= 3){
                     updateView(inputField.value);
              }
       });

       inputField.addEventListener('focusout', () => {
              resetView();
       });

       resetButton.addEventListener('click', () => {
              inputField.value = '';
              resetView();
       });

});

function updateView(searchParam) {

       var validResults = async function (searchParam) {

              await fetch('./api/users/' + searchParam)
              .then(response => response.json())
              .then(data => {
                     var view = data.items.map(element => 
                            `<a href="#" class="list-group-item list-group-item-action">@${element.login}</a>`);
                            resultSetHtml.innerHTML = view.join('');
                     })
              .catch(console.error);

       }(searchParam);

}

function resetView() {
       resultSetHtml.innerHTML = '';
}
