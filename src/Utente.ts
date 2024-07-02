import { IMezzo } from './Mezzo';

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: string;

  constructor(nome: string, cognome: string, email: string, metodoPagamentoPreferito: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamentoPreferito = metodoPagamentoPreferito;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === "disponibile") {
      mezzo.assegnaUtente(this);
      console.log(`${this.nome} ${this.cognome} ha prenotato il mezzo ${mezzo.tipo} con ID ${mezzo.idUnico}`);
    } else {
      console.log(`Mezzo ${mezzo.tipo} con ID ${mezzo.idUnico} non disponibile`);
    }
  }
}

export { IUtente, Utente };
