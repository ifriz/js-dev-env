import {getUsers} from "./api/userApi";

getUsers().then(results => {
  let userBody = "";

  results.forEach(user => {
    // language=HTML
    userBody += `<tr>
  <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
  <td>${user.id}</td>
  <td>${user.firstname}</td>
  <td>${user.lastname}</td>
  <td>${user.email}</td>
</tr>`
  });
  global.document.getElementById('users').innerHTML = userBody;
});
