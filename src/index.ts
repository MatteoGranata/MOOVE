import { Mezzo } from './Mezzo';
import { Utente } from './Utente';
import { Citta } from './Citta';

// Creazione di mezzi di trasporto
const bici1 = new Mezzo("bici", 1);
const scooter1 = new Mezzo("scooter", 2);
const monopattino1 = new Mezzo("monopattino", 3);

// Creazione di utenti
const utente1 = new Utente("Mario", "Rossi", "mariorossi@email.com", "carta di credito");
const utente2 = new Utente("Anna", "Bianchi", "annabianchi@email.com", "PayPal");

// Creazione di una città
const milano = new Citta("Milano");

// Aggiunta di mezzi alla città
milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(monopattino1);

// Prenotazione di mezzi
utente1.prenotaMezzo(bici1); // Mezzo prenotato con successo
utente2.prenotaMezzo(monopattino1); // Mezzo prenotato con successo
utente2.prenotaMezzo(scooter1); // Mezzo non disponibile

// Aggiunta di un nuovo mezzo alla città
const monopattino2 = new Mezzo("monopattino", 4);
milano.aggiungiMezzo(monopattino2);

// Prenotazione del nuovo mezzo
utente1.prenotaMezzo(monopattino2); // Mezzo prenotato con successo
