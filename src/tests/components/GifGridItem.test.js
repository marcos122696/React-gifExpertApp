import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en el componenete <GifGridItem />', () => {
    
    test('Debe de mostrar <GifGridItem /> correctamente', () => {

        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    })
}) 
