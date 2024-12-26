import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout/Layout";

import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <NextSeo
          title="IndieHub - The only Hub made for Indie Hackers"
          description="All the resources you need to build and grow your next project."
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
