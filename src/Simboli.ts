import moji from 'randmoji';

export const Simboli1: Array<any> = []

for(let i  = 0; i < 4; i++) {
    Simboli1.push(moji(1));
}

export const Simboli2: Array<any> = [...Simboli1];
export const Simboli3: Array<any> = [...Simboli1];