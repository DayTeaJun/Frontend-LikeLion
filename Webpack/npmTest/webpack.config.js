const path = require("path"); // 운영체제별로 상이한 경로 문법을 해결해 절대 경로로 반환하는 역할을 합니다.
const webpack = require("webpack");
const childProcess = require("child_process");
const htmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",

  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    // 여기서부터 로더를 추가할 수 있습니다.
    rules: [
      // {
      //     test: path.resolve('./src/app.js'),
      //     use: [
      //         path.resolve('./myLoader.js')
      //     ]
      // }
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
            Commit Version : ${childProcess.execSync(
              "git rev-parse --short HEAD"
            )}
            Committer : ${childProcess.execSync("git config user.name")}
            Commit Date : 마지막 빌드 시간은 ${new Date().toLocaleString()} 입니다.
            `,
    }),
    new webpack.DefinePlugin({
      dev: JSON.stringify(process.env.DEV_API),
      pro: JSON.stringify(process.env.PRO_API),
    }),
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    // 웹팩의 최적화 활성화 옵션
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        // ? 앞의 e라는 문자가 있어도되고 없어도되는 정규표현식 문법
        test: /\.(png|jpe?g|gif|svg)$/,
        minimizer: {
          // 최적화를 진행할 객체가 무엇인가를 지정함
          implementation: ImageMinimizerPlugin.imageminMinify,
          // png최적화 강도 https://www.npmjs.com/package/imagemin-optipng
          options: {
            plugins: [["imagemin-optipng", { optimization: 1 }]],
          },
        },
      }),
    ],
  },
};
