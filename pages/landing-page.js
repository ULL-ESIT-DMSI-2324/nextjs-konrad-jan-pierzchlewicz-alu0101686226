import Head from 'next/head';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Description of your landing page" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>

      <div className="landing-content">
        <h1 className="landing-title">Welcome to Our Landing Page</h1>
        <p className="landing-paragraph">
          Discover amazing content and explore the possibilities.
        </p>
        <p className="landing-paragraph">Engage with our community and stay informed.</p>
      </div>

      <style jsx>{`
        .landing-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          text-align: center;
          font-family: 'Roboto', sans-serif;
        }

        .landing-title {
          font-size: 2.5em;
          color: #333;
          margin-bottom: 20px;
        }

        .landing-paragraph {
          font-size: 1.2em;
          color: #555;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
