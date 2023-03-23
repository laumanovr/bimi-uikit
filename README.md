# uikit

## Storybook
```
yarn install
yarn storybook
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Deploy storybook and package (master)

### Find highest version in tags
```
git tag --list
```

### Push changes

v0.0.1 - example. If highest version will be v0.0.4, you put v0.0.5

```
git push -u origin master
git tag v0.0.1
git push -u origin --tags
```
