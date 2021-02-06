import react from 'react'
import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from './checkbox'
test('Selecting checkbox',()=>{

    const { getByLabelText } = render(<Checkbox />);
    const checkbox= getByLabelText(/not checked/);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);


});

test('check input value',()=>{
    const { getByPlaceholderText }= render (<Checkbox/>);

    const elem = getByPlaceholderText(/entersome/);
    fireEvent.focus(elem);
    fireEvent.change(elem,{target:{value:23}});

    fireEvent.change(elem,{target:{value:23}});
    expect(elem.value).toBe('K');
})