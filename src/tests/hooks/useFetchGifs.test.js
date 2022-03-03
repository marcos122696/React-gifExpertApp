import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Los Angles'))
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async () => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Los Angles'))
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe( 12 );
        expect( loading ).toBe( false );

    });

});