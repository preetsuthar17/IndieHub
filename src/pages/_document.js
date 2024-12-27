import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="preetsuthar"
          data-description="Support me on Buy me a coffee!"
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
        <script
          data-goatcounter="https://preett.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
