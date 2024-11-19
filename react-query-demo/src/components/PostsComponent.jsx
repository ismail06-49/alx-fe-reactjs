import { useQuery } from 'react-query';

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

export default function PostsComponent() {

    const { data, error, isLoading, refetch } = useQuery('fetchData', fetchData);
    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (error) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div>
            <button onClick={refetch}>Refetch Data</button>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
}