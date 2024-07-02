
# Sistema di Prenotazione di Mezzi di Trasporto

Benvenuto nel progetto di Sistema di Prenotazione di Mezzi di Trasporto. Questo progetto è sviluppato in TypeScript e consente di gestire la prenotazione di vari mezzi di trasporto come biciclette, scooter e monopattini in una città.

## Indice

- [Descrizione del Progetto](#descrizione-del-progetto)
- [Caratteristiche](#caratteristiche)
- [Installazione](#installazione)
- [Struttura del Progetto](#struttura-del-progetto)
- [Utilizzo](#utilizzo)

## Descrizione del Progetto

Il sistema permette agli utenti di prenotare mezzi di trasporto disponibili in una città. Ogni mezzo ha un tipo (bici, scooter, monopattino), un ID unico e uno stato (disponibile, in uso). Gli utenti possono prenotare i mezzi disponibili e il sistema aggiornerà lo stato del mezzo a "in uso".

## Caratteristiche

- **Interfacce e Classi**: Definizione di interfacce per mezzi, utenti e città.
- **Prenotazione**: Gli utenti possono prenotare mezzi disponibili.
- **Gestione della Disponibilità**: Stato del mezzo aggiornato in base alla prenotazione.
- **Aggiunta di Mezzi**: Possibilità di aggiungere nuovi mezzi alla città.

## Installazione

1. **Clona il Repository**

```bash
   git clone https://github.com/MatteoGranata/MOOVE.git
   cd MOOVE
```

2. ### Installa le Dipendenze

 **Assicurati di avere Node.js e npm installati. Poi esegui:**

```bash
npm install
```
## Utilizzo
**Esegui il seguente comando per avviare il progetto:**

```bash
npm build
npm start
```

 # Struttura del Progetto
 La struttura del progetto è la seguente:

- **src/index.ts: Punto di ingresso del progetto.**
- **src/Mezzo.ts: Definizione della classe Mezzo.**
- **src/Utente.ts: Definizione della classe Utente.**
- **src/Citta.ts: Definizione della classe Citta.**

## Authors

- [@MatteoGranata](https://www.github.com/MatteoGranata)

