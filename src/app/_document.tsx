import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;

    // Step 2: Retrieve styles from components in the page
    const page = originalRenderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
      <Head>
        <title>UGMK</title>
        {/* Step 5: Output the styles in the head  */}
        {this.props.styleTags}
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
}
