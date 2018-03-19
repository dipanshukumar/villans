import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {

        const villans = [
            { id: 1, name: 'Magneto' },
            { id: 2, name: 'Joker' },
            { id: 3, name: 'General Zod' },
            { id: 4, name: 'DoomsDay' },
            { id: 5, name: 'Sandman' },
            { id: 6, name: 'Madara Uchiha' },
            { id: 7, name: 'Ultron' },
            { id: 8, name: 'Loki' },
            { id: 9, name: 'Lex Luther' },
            { id: 10, name: 'DeathStroke' },
        ];
       return{villans};
     }
    }
