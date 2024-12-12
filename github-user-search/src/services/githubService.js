import axios from 'axios';

// process.env.REACT_APP_GITHUB_API_KEY

export async function fetchUserData(user, location, minRepos) {

    const query = `${user} ${location ? `+location:${location}` : ''} ${minRepos ? `+repos:>=${minRepos}` : ''}`.trim();
    const options = {
        method: 'get',
        url: `https://api.github.com/search/users?q=${query}`,
    };

    // const options = {
    //     method: 'get',
    //     url: `https://api.github.com/users/${term}`,
    // };

    try {
        const response = await axios.request(options);
        return response.data.items;
    } catch (error) {
        console.error(error);
    }
}

    