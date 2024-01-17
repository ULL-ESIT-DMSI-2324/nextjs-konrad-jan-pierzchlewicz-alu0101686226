import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Go back to the main page:</p>
            <Link href="/404">
                <a>Main page</a>
            </Link>
        </div>
    );
};
// something

export default NotFoundPage;