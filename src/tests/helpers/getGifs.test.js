import {  getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs Fetch', () => {

    test('Debe de traer 12 elementos', async () => {

        const gifs = await getGifs('Los Simpons');
        expect(gifs.length).toBe( 12 );
    });

    test('Debe de traer 0 elementos si se manda un string vacio', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe( 0 );
    });
     
});