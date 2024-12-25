import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
