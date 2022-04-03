export function html(head: any, body: any) {
  return `
  <!doctype html>
  <html>
    <head>${head}</head>
    <body>${body}</body>
  </html>
  `;
}