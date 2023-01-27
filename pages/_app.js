import Head from "next/head";
import { useRouter } from "next/router";
import config from "../config";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const description = `${
    config.name
  } is a discord bot with features like ${config.Features.map(
    (data) => data.name
  )}`;
  const title = config.name;
  const router = useRouter();
  const siteUrl = process.env.https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdiscord-icon&psig=AOvVaw2LR9wjibKGqHjxCw8WkweP&ust=1674933376878000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIip4Zm76PwCFQAAAAAdAAAAABAE + router.asPath;
  return (
    <div className="overflow-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <!-- Schema.org markup for Google+ --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content="/logo.png" />

        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="/logo.png" />
        <meta name="twitter:site" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
        <meta name="twitter:image:src" content="/logo.png" />

        {/* <!-- Open Graph data --> */}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
