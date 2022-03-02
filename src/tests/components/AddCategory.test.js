import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componenete <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    })

    test('Debe de mostar el componente correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value }});
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop( "value" )).toBe( 'Hola Mundo' );
    });

    test('No debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCaetegories y limpiar la caja de texto', () => {

        // 1. Simular el imputChange.
        const input = wrapper.find('input');
        const value = 'Hola Mundo2';
        input.simulate('change', { target: { value }});
        // 1. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3. setCategories se debe de haber llamado.
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));
        // 4. El valor del input debe de estar ''.
        expect( input.prop('value') ).toBe('');
    });

});