import "@/styles/globals.css";

import Head from "next/head";
import Link from "next/link";

import Layout from "@/components/layout/Layout";

import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IndieHub - The only Hub made for Indie Hackers</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="All the resources you need to build and grow your next project."
        />
        <meta name="theme-color" content="#fffffff" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta
          property="og:title"
          content="IndieHub - The only Hub made for Indie Hackers"
        />
        <meta
          property="og:description"
          content="All the resources you need to build and grow your next project."
        />
        <meta property="og:url" content="https://indiehub.hextastudio.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/H3iGAHs.png" />
        <meta
          name="keywords"
          content="IndieHub - The only Hub made for Indie Hackers, SaaS Creator, Portfolio, Blog, web development, preet, front end development, SaaS Creator"
        />
        <meta
          name="author"
          content="IndieHub - The only Hub made for Indie Hackers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="twitter:title"
          content="IndieHub - The only Hub made for Indie Hackers"
        />
        <meta
          name="twitter:description"
          content="All the resources you need to build and grow your next project."
        />{" "}
        <meta name="subject" content="web development" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "website",
            name: "IndieHub - The only Hub made for Indie Hackers",
            url: "https://indiehub.hextastudio.in",
            image: "https://indiehub.hextastudio.in/logo.png",
            sameAs: [
              "https://preetsuthar.me",
              "https://www.linkedin.com/in/preetsuthar17/",
              "https://github.com/preetsuthar17",
              "https://x.com/nott_preet",
              "https://indiehub.hextastudio.in",
              "https://discord.com/users/741549223127941170",
            ],
            jobTitle: "SaaS Creator",
          })}
        </script>
      </Head>
      <Layout>
        <Link
          href="#main-content"
          className="sr-only focus:not-sr-only text-sm"
        >
          Skip to main content
        </Link>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-TJH93ZZT" />
        <GoogleAnalytics gaId="G-KJBEV1B49F" />
      </Layout>
    </>
  );
}
