import React from 'react'
import { getThemeData  } from '../data/getThemeData';
import { html } from '../utilities/html';
import { ReactComponent } from '../components/ReactComponent'
import ReactDOMServer from 'react-dom/server';

export async function landing(req: any, res: any) {
    const [ themeData ] = await Promise.all([
      getThemeData(),
    ]);

    const appHtml = ReactDOMServer.renderToString(<ReactComponent/>)

    res.send(html(
      `
      <style>.header{background:red;}</style>
      `,
      `
      <div class="header">
        ${appHtml}
        <div>landing</div>
        <div>theme:</div>
        <code>${JSON.stringify(themeData, null, 2)}</code>
      </div>
      `
    ));
}