import axios from 'axios';
// console.log(process.env.REACT_APP_GITHUB_API_KEY);

export async function fetchUserData(user, location, repo) {

    const query = `${user} ${location ? `+location:${location}` : ''} ${repo ? `+repos:>=${repo}` : ''}`.trim();
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

    