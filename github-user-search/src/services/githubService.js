import axios from 'axios';
// console.log(process.env.REACT_APP_GITHUB_API_KEY);

export async function fetchUserData(term) {

    const options = {
        method: 'get',
        url: `https://api.github.com/users/${term}`,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

    