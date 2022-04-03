import { getThemeData  } from '../data/getThemeData.js';
import { html } from '../utilities/html.js';

export async function landing(req, res) {
    const [ themeData ] = await Promise.all([
      getThemeData(),
    ]);

    res.send(html(
      `
      <style>.header{background:red;}</style>
      `,
      `
      <div class="header">
        <div>landing</div>
        <div>theme:</div>
        <code>${JSON.stringify(themeData, null, 2)}</code>
      </div>
      `
    ));
}