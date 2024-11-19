import { useParams } from "react-router-dom";

export default function BlogPost() {
    const { postId } = useParams();

    const blogPosts = {
        1: { title: "First Post", content: "This is the content of the first post." },
        2: { title: "Second Post", content: "This is the content of the second post." },
    };

    const post = blogPosts[postId];

    if (!post) {
        return <h2>Post not found!</h2>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}