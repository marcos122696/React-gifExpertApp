import React from 'react';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';


describe('Pruebas en <GifExpertApp.js />', () => {

    const wrapper = shallow(<GifExpertApp  />);

    test('Debe de mostrar el componente <GifExpertApp /> correctamente', () => { 
        expect(wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {

        const categories = ['los simpons', 'dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        expect(wrapper ).toMatchSnapshot();
        expect( wrapper .find('GifGrid').length ).toBe( categories.length );
    });


});