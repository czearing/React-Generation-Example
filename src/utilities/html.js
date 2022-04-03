export function html(head, body) {
  return `
  <!doctype html>
  <html>
    <head>${head}</head>
    <body>${body}</body>
  </html>
  `;
}