import {Link, useLocation } from 'react-router-dom';
export function Home(){
    return (
    <>
        <h1>Home</h1>
        <Link to='aboutus'> AboutUs</Link>
        <Link to='events'> Events</Link>
        <Link to='contactus'> ContactUs</Link>
    </>
    )
};

export function AboutUs(){
    return (
        <h1>AboutUs</h1>
    )
};

export function Events(){
    return (
        <h1>Events</h1>
    )
};

export function ContactUs(){
    return (
        <h1>ContactUs</h1>
    )
};

export function Oops(){
    let loca=useLocation();
    return (
    <h1>Resource not foudn at {loca.pathname}</h1>
    )
};