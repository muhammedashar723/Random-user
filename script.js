async function getUsers() {
    let count = document.getElementById("count").value;

    if (count == "" || count < 1) {
        alert("Enter number of users");
        return;
    }

    try {
        let response = await fetch(`https://randomuser.me/api/?results=${count}`);
        let data = await response.json();

        let output = "";

        data.results.forEach(user => {
            output += `
            <div class="col-md-4">
            <div class="card p-3 mb-3 text-center">
            <img src="${user.picture.large}" width="120" class="rounded-circle mx-auto">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.email}</p>
            <p>${user.location.city}, ${user.location.country}</p>
            <p>${user.phone}</p>
            </div>
            </div>`;
        });

        document.getElementById("output").innerHTML = output;

    } catch (error) {
        alert("Error fetching users");
    }
}