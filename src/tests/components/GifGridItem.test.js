import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en el componenete <GifGridItem />', () => {
    
    const title = 'Titulo Gif';
    const url = 'http://localhost/logo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe de mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener el parrafo con el title', () => { 
        
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe( title );
    })

    test('Debe tener la imagen con el url igual al url y el alt igual al title', () => {

        const img = wrapper.find('img');
        // console.log( img.prop('alt'));
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('Debe de tener la clase animate__zoomInUp', () => {

        const div = wrapper.find('div');
        // const className = div.prop('className'); ------->>>> metodo marcos (funciona)
        // expect( className.endsWith('animate__zoomInU', className.length - 1)).toBe(true);
        const className = div.prop('className');
        expect(className.includes('animate__zoomInUp')).toBe(true);
    })
}); 
