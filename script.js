
let title = document.querySelector('ul');


fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {

            title.insertAdjacentHTML('beforeend', `<li><a href="${post.link}">${post.title} </a> </li>`)

        });
    });

