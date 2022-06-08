export class Osoba {
    imie: string;
    wiek: number; // ? - określa opcjonalność zmiennej
    czyStudent: boolean;
    nrAlbumu: number;


    constructor(imie?: string, wiek?: number, czyStudent?: boolean, nrAlbumu?: number)
    {
        this.imie = imie;
        this.wiek = wiek;
        this.czyStudent = czyStudent;
        this.nrAlbumu = nrAlbumu;
    }

   }
