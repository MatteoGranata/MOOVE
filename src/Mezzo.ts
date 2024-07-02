import { IUtente } from './Utente';
interface IMezzo {
  tipo: string; // "bici", "scooter", "monopattino"
  idUnico: number;
  stato: string; // "disponibile", "in uso"
  assegnaUtente(utente: IUtente): void;
}

class Mezzo implements IMezzo {
  tipo: string;
  idUnico: number;
  stato: string;

  constructor(tipo: string, idUnico: number) {
    this.tipo = tipo;
    this.idUnico = idUnico;
    this.stato = "disponibile";
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato === "disponibile") {
      this.stato = "in uso";
      console.log(`Mezzo ${this.tipo} con ID ${this.idUnico} assegnato a ${utente.nome} ${utente.cognome}`);
    } else {
      console.log(`Mezzo ${this.tipo} con ID ${this.idUnico} non disponibile`);
    }
  }
}

export { IMezzo, Mezzo };
