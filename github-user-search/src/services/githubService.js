
// console.log(process.env.REACT_APP_GITHUB_API_KEY);

export async function fetchUserData(term) {
    try {
        const response = await fetch(`https://api.github.com/users/${term}`);

        if (!response.ok) {
        throw new Error('Network response was not ok');
        }

        const data = await response.json(); 
        console.log('Success:', data); 
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}