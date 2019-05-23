# yarn-workspaces
React Native &amp; yarn workspaces


## Things to remember when using workspaces

- Flow runs in each package not on the whole workspace
- apply nohoist to all modules that contain native code (ios & android code)
  - Avoids ios and android build directory clashes
  - More likely to work with react-native link
  - Pure JS libraries work fine without nohoist
- Always `yarn install` at the root not in a `package/rider` directory

## Links

- https://yarnpkg.com/lang/en/docs/workspaces/
- https://github.com/lerna/lerna
- https://yarnpkg.com/blog/2018/02/15/nohoist/

## Blogs

- https://medium.com/viewsdx/how-to-use-yarn-workspaces-with-create-react-app-and-create-react-native-app-expo-to-share-common-ea27bc4bad62

## Examples

- https://github.com/connectdotz/yarn-nohoist-examples
- http://www.benjiegillam.com/2017/08/switching-graphile-to-yarn-workspaces/
