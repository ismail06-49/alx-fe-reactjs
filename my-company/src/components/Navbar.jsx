import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav style={{
            width: '800px',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <Link style={{textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'}} to='/'>Home</Link>
            <Link style={{textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'}} to='about'>Home</Link>
            <Link style={{textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'}} to='contact'>Home</Link>
            <Link style={{textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'}} to='services'>Home</Link>
        </nav>
    )
}