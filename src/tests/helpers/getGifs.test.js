import {  getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs Fectch', () => {

    test('Debe de traer 12 elementos', async () => {

        const gifs = await getGifs('Los Simpons');
        expect(gifs.length).toBe( 12 );
     })
});