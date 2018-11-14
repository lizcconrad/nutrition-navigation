This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Working on the project

### Things to install
1. (Optional): [choco for Windows](https://chocolatey.org/install) or [homebrew for OSX](https://brew.sh/)
2. [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [Sass](https://sass-lang.com/install)
4. (Optional): [VSCode](https://code.visualstudio.com/download)

### Launching the project
```bash
# install necessary packagees of project
yarn or yarn install

# add new package
yarn add [package]

# remove a package
yarn remove [package]

# launch project
yarn start
```

### Work with SASS

When adding/updating a component, work with SCSS for styling. SCSS is just like CSS but better and smarter. Just add the SCSS file for your component in the `/sass` folder, and be sure to run the `watch` command and Sass will take care of the rest. Sass guide [here](https://sass-lang.com/guide)

```bash
# run this command so sass updates as needed
sass --watch src/sass:src/styles
```


### Version management
```bash
# pull the current version of the repo
git pull

# start a new branch
git checkout -b [name-of-branch]

# change working branch
git checkout [name-of-branch]

# add all files in working directory to commit
git add .

# add specific files
git add [file]

# commit changes
git commit -m "Message about changes!"

# switch back to master then merge changes
git branch master
git merge [branch-to-merge]

# push to github
git push
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
