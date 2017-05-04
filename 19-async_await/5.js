const fetch = require("node-fetch");

async function fetchFromGithub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}


async function showUserAndRepos(handle) {
    const userPromise = fetchFromGithub(`/users/${handle}`); // both endpoints are called at the same time
    const reposPromise = fetchFromGithub(`/users/${handle}/repos`); // both endpoints are called at the same time

    const user = await userPromise; 
    const repos = await reposPromise;

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

showUserAndRepos('dannypule');