// https://webpack.js.org/guides/webpack-and-typescript/

declare module "*.svg" {
  const content: any;
  export default content;
}