Notes

What type of ReactJS tool kit to go for?

1. For learing/creating a new react app or SPA you can create it through nodejs create react plugin
    run the command  to create an app

    npx create-react-app hellow-react --use-npm

2. For Building Pages which are rendered from server use Next.js

3. For building Static Html use Gatby

4. For Creating Native App go for React Native with Expo (I am not sure what is native app)




UseState function:

React provides a useState function which is a hook for maintining state in a function. Normally react has a state 
varialble only for components and not for functions

useEffect Function:

use effect function is used to execute any operation which are not a part of rendering ui, this includes
giving an alert message or console.log or it can also be used to making backend call to retreive data


useReduced Function: 

this is used to toggle the value of input field


Fragment:

    The DOM elements which are passed to any of the React compoennts or funcitons for rendering
    must have a single Parent  which wrapps the entire all the other element . Tha parent can be a div
    or it can be fragment . that is <fragment></fragment> or a simple <> child content </> 