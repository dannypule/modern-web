const fetch = require("node-fetch");

async function fetchGithubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body
}


async function showGithubUser(handle) {
    try {
        const user = await fetchGithubUser(handle);
        console.log(user.name);
    } catch (err) {
        console.error(err.message)
    }
}

showGithubUser('dannypule');