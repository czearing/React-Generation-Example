import { getThemeData  } from '../data/getThemeData.js';
import { getUserShoppingCart } from '../data/getUserShoppingCart.js';
import { html } from '../utilities/html.js';

export async function purchase(req, res) {
    const [ themeData, userShoppingCart ] = await Promise.all([
      getThemeData(),
      getUserShoppingCart()
    ]);

    res.send(html(
      `
      <style>.header{background:blue;}</style>
      `,
      `
      <div class="header">
        <div>purchase</div>
        <div>theme:</div>
        <code>${JSON.stringify(themeData, null, 2)}</code>
        <div>shoppingcart:</div.
        <code>${JSON.stringify(userShoppingCart, null, 2)}</code>
      </div>
      `
    ));
}