### 本地开发启动
node 16
1 npm start  (启动webpack server 前端页面)
2 npm run start-electron （启动electron框架）

### 打包成应用程序
- 配置package.json中的version 和files
- nvm use 16
- npm run build (打包前端的静态资源在build文件夹下) 
- npm run build-mac（利用electron-builder对electron进行打包，静态资源通过package.json的files字段配置，打包到app.asar中）

### package.json配置说明
```javascript
const pkg = {
  "name": "wsx-react-ts-electron",
  "version": "1.0.0", // 1 - 打包应用程序版本
  "main": "main.js", // 2 - 应用程序入口文件
  "private": true,
  "homepage": ".",
  "DEV": false,
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node s/Users/wangsixue/Desktop/wsx/electron-playground/README.mdcripts/test.js",
    "start-electron": "electron .",
    "build-mac": "electron-builder  --mac",
    "build-win": "electron-builder  --win"
  },
  "build": { // 3 - electron-builder的打包配置
    "productName": "wsxElectronApp", // 4 - 应用程序的名字
    "appId": "wsx.example.app", // 5 - 应用程序的id，通过来更新版本
    "directories": {
      "output": "dist" // 6 - 打包输出路径
    }, 
    "files": [ // 7 - 需要一起打包进应用程序app.asar中的文件
        "build/**/*",
        "main.js",
        "package.json"
    ],
    "dmg": {
      "backgroundColor": "#fff"
    },
    "mac": {
      "target": [
        "dmg"
      ]
    }
  }
}
```



###问题
1 若electron node install卡住
vim ~/.npmrc
```
 registry=xxx
 electron_mirror="https://npm.taobao.org/mirrors/electron/"
 ```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
