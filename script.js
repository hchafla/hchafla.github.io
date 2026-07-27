const container = document.getElementById("projects");

projects.forEach(project => {

    container.innerHTML += `

    <a class="card" href="${project.url}" target="_blank">

        <h2>${project.title}</h2>

        <p>${project.description}</p>

    </a>

    `;

});
