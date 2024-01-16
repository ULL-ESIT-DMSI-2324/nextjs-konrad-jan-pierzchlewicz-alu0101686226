import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>The page you are looking for is no longer existing.</p>
            <p>Go back to the main page:</p>
            <Link href="/">
                <a>Main page</a>
            </Link>
        </div>
    );
};

export default NotFoundPage;