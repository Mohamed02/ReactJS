import { useReducer } from "react"

export function Checkbox(){
const [checked,setChecked]=useReducer((checked)=>!checked,false)
const [status,setStatus]=useReducer((status)=>++status,12)

    return (
        <>
        <label htmlFor='checkbox'>
        {checked?'checked':'not checked'}
        </label>
        <input id='checkbox' type='checkbox' value={checked} onChange={setChecked}/>
        <input type='text' value={status} placeholder='entersome'  onChange={setStatus}/>
        </>
    )
}