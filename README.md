# ReactRenderLab
React Typescript with Next.js lab, to show common sharing data problems and solutions

## How to run this repository

Visit the [rubenmora.com/apps/react-sharing-data-lab](https://rubenmora.com/apps/react-sharing-data-lab) website to see an example in action.

Clone this repository:

```bash 
git clone https://github.com/RubenMoraVargas/ReactSharingLab.git
```

and run next command to install all dependencies.

```bash
yarn install 
```

Then run the next command to start the development server.

```bash
yarn dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to build the project, run `yarn build`.
```bash
yarn build 
```

If you want to run the project with turbo and tailwind css use
```bash
yarn dev-turbo 
```

## little explanation of code
This code is a simple Next.js 13 application, and this repository is a lab to show some sharing data between components problems and solutions. 

This code uses all the code in the src folder, now, Next.js 13 uses the app directory, and all page.tsx has its own component directory with all components used; in this case, the project has only one page. 
The directory for components, has three directories: 
- Atomic directory with atomic components.
- Layout directory with the Navbar component.
- Samples directory with the principal samples components.
 
The sharing data components have a fake representation of components like BLockchain and to sources Wallet with itself account and Exchange with the respective account, only for didactic purposes, and easy segregate concepts and functionality. Please navigate between the components to see the different solutions and see the code in the components.

## Technologies used
- Next.js 13
- React.js 18
- Typescript
- Tailwind CSS
- Turbo
- Eslint
- Prettier 

## More information in the blog rubenmora.com/blog
[Article to discuss common data sharing in components issues and solutions in react ](https://rubenmora.com/blog/react-sharing-data-lab)
