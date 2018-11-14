This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Working on the project

### Things to install
1. (Optional): [choco for Windows](https://chocolatey.org/install) or [homebrew for OSX](https://brew.sh/)
2. [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [Sass](https://sass-lang.com/install)
4. (Optional): [VSCode](https://code.visualstudio.com/download)

### Useful Links
1. [React Guide](https://reactjs.org/docs/hello-world.html)
2. [react-md](https://react-md.mlaursen.com/) (VERY useful for styling, try to use these components if possible). 
3. [react-md grid system](https://react-md.mlaursen.com/components/grids) (use this to understand react-md's grid layout, try to think about your components in grids)

### Launching the project
```bash
# install necessary packagees of project
yarn or yarn install

# add new package
yarn add [package]

# remove a package
yarn remove [package]

# launch project
# this will also watch sass files
# if the page shows up blank, just refresh
yarn start
```

### Adding a new component

First run the command below, then add an associated SCSS file in the Sass folder (you don't have to add the SCSS file if you don't edit any styles).

```bash
react-create component [component-name]
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

## Learn More About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
