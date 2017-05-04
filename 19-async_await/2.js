const fetch = require("node-fetch");

async function showGithubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
}

showGithubUser('dannypule')
    .then(user => {
        console.log(user.name);
        console.log(user.location);
    });