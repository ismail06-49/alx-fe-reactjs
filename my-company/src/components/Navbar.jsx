import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav style={{
            width: '800px',
            backgroundColor: '#c4c4c4',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <Link style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'
            }} to='/'>Home</Link>
            <Link style={{textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'}} to='about'>About</Link>
            <Link style={{textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'}} to='contact'>Contact</Link>
            <Link style={{textDecoration: 'none',
                color: 'black',
                fontSize: '28px',
                fontWeight: 'bold'}} to='services'>Services</Link>
        </nav>
    )
}