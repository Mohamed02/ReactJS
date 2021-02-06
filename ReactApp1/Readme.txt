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

    const status= useState("");

    the above expression stores and array of two elements in the status . the first array element holds the element whose
    state to be maintined and the sencod array element is the function which can be invoked to set state value of the varialble

         it can also be writtern as destructured array

         const [data,setStatus]= useState("");

        we can also pass initial value of the variable whose state has to be maintained as
         
         const [data,setStatus]= useState("Orange");



useEffect Function:

use effect function is used to execute any operation which are not a part of rendering ui, this includes
giving an alert message or console.log or it can also be used to making backend call to retreive data

   By Default useEffect watches for any changes in state and it executes . If we want to specific state varaible then 
    useeffect can be used to watch any variable and do some non-UI operations


     useEffect(()=>{
                        console.log(`the value is ${val2}`);
                    })

                    /* the above code snippet watch for all the Sate variable and gets executed when there is a change */

     useEffect(()=>{
                        console.log(`the value is ${val2}`);
                    },[val2])

                    /* the above code snippet watch for the variable val2 and execut the content inside this*/


     useEffect(()=>{
                        console.log(`the value is ${val2}`);
                    },[])

/* the above code will executed only once during the initial rendering, as the watch array is empty. it doesnt
react to any change in value of any of the variable */

useReducer Function: 

useReducer function is similar to use useState. The difference is 
    1. The function (which is returned by useState) for setting state takes teh value of the state variable
    as a parameter and sets it on the State
    2. The function (which is returned by useReducer) for settign state doesnt take any input parameter 
    rather it calculate the new value of the state variable based on the logic fed to it.

for e.g  (useState)

 const [status, setStatus]= useState("Open");   

    the above experession stores the function returned by useState to the setStatus and when setStatus is called
    with parameter "Closed". Its sets teh value to state variable
 
for e.g  (useReducer)

const [checked,toggle]= useReducer((checked)=>!checked,false);

 the above expression stores teh function returned by usereducer to the toggle . Here when toggle is called,
 it calculate the new state value of variable- checked and stores into it.


Fragment:

    The DOM elements which are passed to any of the React compoennts or funcitons for rendering
    must have a single Parent  which wrapps the entire all the other element . Tha parent can be a div
    or it can be fragment . that is <fragment></fragment> or a simple <> child content </> 


Testing With React:

    Test Driven Development can be done with React with the help of JEST. 
    Refer to the project -ReactTestScripts files  1- checkbox.test.js & checkbox.js  and 2. App.test.js and App.js for examples

