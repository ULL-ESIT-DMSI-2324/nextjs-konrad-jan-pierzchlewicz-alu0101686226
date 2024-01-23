import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: '#ff4500' }}>Oops! Error 404</h1>
            <p style={{ fontSize: '18px' }}>Looks like you've hit a page that doesn't exist.</p>
            <p style={{ fontSize: '18px' }}>Let's go back to the main page:</p>
            <Link href="/">
                <a style={{ fontSize: '20px', color: '#1e90ff' }}>Main page</a>
            </Link>
            <style jsx>{`
                body {
                    background-color: #f4f4f4;
                    font-family: 'Arial', sans-serif;
                }
                div {
                    max-width: 400px;
                    margin: 0 auto;
                }
            `}</style>
        </div>
    );
};

export default NotFoundPage;
