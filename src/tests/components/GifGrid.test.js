import React from 'react'
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el componenete <GifGrid />', () => {
    
    const category = 'Los Angeles';
    // const wrapper = shallow(<GifGrid category={category}/>);

    test('Debe de mostrar <GifGrid /> correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        const h3 = wrapper.find('h3');
        expect(wrapper).toMatchSnapshot();
        expect( h3.text() ).toBe( `Resultados de: ${ category }` );
    });

    test('Debe de mostrar items cuando se cargan imagenes', () => { 

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/gif.jpg',
            title:'titulo gif',
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>); 
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
}); 
