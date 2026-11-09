# Changelog - Hair&Barber Revolution

## 9 novembre 2026 (terzo passaggio) - Tutte le sottopagine e Buono regalo interattivo

### Home

- **Tolto il nastro scorrevole dei servizi** sotto l'hero (markup, stili e script).

### Base comune delle sottopagine

- File nuovo **`hbr-sub.js`**, incluso in Buoni, Promozioni, Novità, Recensioni, Privacy e 404. Senza librerie: titolo della testata che entra parola per parola, contenuti che compaiono allo scroll, luce che segue il mouse sulle card.
- Nuova **testata** uguale per tutte: nera, allineata a sinistra, titolo molto grande, riga sottile che si disegna sotto.
- **Finestre** (promozioni, novità, recensioni, conferma buono): sfondo sfocato, riquadro che sale, X che ruota al passaggio del mouse.
- Bottoni social e bottoni delle sottopagine con lo stesso riempimento animato della home.

### Buoni regalo (rifatta)

- **Il buono si compone dal vivo** mentre si compila: nero con il palo da barbiere a strisce che scorre, logo, regalo scelto, "Per" e "Da" che si riempiono con una riga che si disegna.
- **Si gira**: scrivendo la dedica il buono ruota e la mostra sul retro, firmata da chi regala. C'è anche il bottone "Gira il buono".
- **Si inclina seguendo il mouse**, con un riflesso di luce (solo computer, spento con "riduci movimento").
- Modulo diviso in quattro parti (Chi regala, Chi lo riceve, Il regalo, La dedica), ognuna con la spunta quando è completa, e un indicatore di avanzamento sotto il buono.
- **Trattamenti come pillole selezionabili** al posto dei menu a tendina; **importi rapidi** (€25, €50, €75, €100, €150) o importo libero, con il numero che conta fino al valore sul buono.
- Quando è tutto pronto compare il timbro "Pronto da regalare"; finché manca qualcosa, sotto il bottone c'è scritto cosa.
- I trattamenti ora arrivano da `SERVIZI_DONNA.js` / `SERVIZI_UOMO.js`, gli stessi della home. **Prima la pagina usava un elenco scritto a mano con prezzi diversi dal listino** (es. "Taglio capelli donna €25"), che compariva se i file `.json` non si caricavano: è stato tolto.
- Il messaggio WhatsApp inviato al salone è **identico a prima**.
- Etichetta cambiata: "Nome di chi regala il buono" ora si chiama "Nome sul buono" (stesso campo, stesso id `b-mittente`). "Sesso" ora si chiama "Reparto" ed è scelto con due tessere Donna / Uomo.

### Promozioni

- Selettore Donna / Uomo con cursore scorrevole, allineato a sinistra.
- Card che entrano allo scroll, si alzano al passaggio del mouse, foto con zoom lento, anello che pulsa attorno al tasto play dei video.

### Novità

- **Il post più recente è in evidenza**, grande, con foto a sinistra e testo a destra; gli altri post vanno sotto in "Altre novità".
- In fondo, invito a seguire i social.

### Recensioni (rifatta)

- **Media in grande** (calcolata dalle recensioni presenti nella pagina) con le stelle che compaiono una alla volta.
- **Recensione in evidenza che cambia ogni 7 secondi**, con barra del tempo, frecce avanti/indietro; si ferma al passaggio del mouse, con la tastiera, fuori schermo e con "riduci movimento".
- Al posto del carosello orizzontale, **tutte le recensioni in una griglia a colonne** che compaiono allo scroll. I testi lunghi si aprono con "Leggi tutto".
- Corretto: le tre recensioni senza testo (Francesca R., Stefano R., Gina C.) prima comparivano come card vuote; ora non vengono mostrate nella griglia ma contano nella media.
- Bottoni della testata accorciati: "Recensisci su Google" e "Recensisci su Facebook".

### Privacy

- **Indice laterale** su computer che evidenzia la sezione che si sta leggendo.
- Testo più grande e leggibile, sezioni che compaiono allo scroll.
- Tolti i trattini lunghi dal testo visibile (sostituiti con due punti o virgole, senza cambiare il contenuto).

### 404

- Grande "404" con lo zero a contorno e le cifre che scendono una dopo l'altra, bottoni del sito, collegamenti rapidi anche a Novità e Buoni regalo.

### Controlli

- Pagine aperte nel browser a 1440px: Buoni, Promozioni, Novità, Recensioni, Privacy, 404. A 390px: Buoni e Recensioni. Nessun errore in console e nessuno scorrimento orizzontale.
- Provati sul Buono: compilazione, scelta trattamenti, importo, rotazione con la dedica, timbro finale.
- Non provati: i 768px, Promozioni / Novità / Privacy / 404 su telefono, l'invio vero su WhatsApp e "riduci movimento" attivo.

---

## 9 novembre 2026 (secondo passaggio) - Solo bianco e nero, più movimento

### Colore

- **Tolto il rosso ovunque.** Il sito ora è solo bianco e nero: palo da barbiere a strisce nere e bianche, voce attiva del menu in bianco, giorno di oggi negli orari in bianco, contorno di focus nel colore del testo, messaggio di errore del modulo in nero con bordo.
- Il pallino "Aperto ora / Chiuso ora" non è più verde, giallo o rosso: pieno e pulsante quando il salone è aperto, vuoto quando è chiuso.

### Nuove animazioni (tutte in CSS, nessuna libreria aggiunta)

1. **Nastro scorrevole dei servizi** sotto l'hero (Taglio, Colore, Piega, Schiariture, Barba, Keratina, Extension, Armocromia), con parole piene e a contorno alternate e un piccolo palo a strisce come separatore. Si ferma quando esce dallo schermo.
2. **Titoli di sezione** che entrano parola per parola da dietro una maschera.
3. **Frase di "Chi siamo"** in grande: le parole si accendono man mano che si scorre.
4. **Foto del team** e prima foto della galleria che scorrono leggermente dentro la cornice durante lo scroll.
5. **Testo dell'hero** che si allontana e sfuma mentre si scende.
6. **Barra di avanzamento** sottile sotto la navbar, che si riempie con lo scroll.
7. **Fascia finale "Prenota un appuntamento"**: scritta molto grande che al passaggio del mouse si riempie di nero dal basso, con la freccia che ruota.

Le animazioni 3, 4, 5 e 6 seguono lo scroll e funzionano nei browser che supportano `animation-timeline` (Chrome, Edge e i più recenti). Negli altri l'elemento resta semplicemente fermo nel suo stato finale, senza errori.

### Sezioni ripassate

- **Hero**: al posto del divisore a strisce c'è il nastro dei servizi.
- **Chi siamo**: la presentazione è diventata una frase grande in Cormorant, più larga, al posto del paragrafo piccolo.
- **Listino**: su computer titolo, selettore Donna / Uomo, nota sui prezzi e bottone restano fermi a sinistra mentre l'elenco scorre a destra, su una sola colonna più leggibile. Al passaggio del mouse la riga di puntini si accende.
- **Prenotazione**: titolo, testo e passaggi entrano uno dopo l'altro.
- **Contatti**: indicatore di apertura in bianco e nero.
- **Prima del footer**: nuova fascia bianca con l'invito a prenotare.

### Controlli

- Con "riduci movimento" attivo nastro, parallax e scorrimenti restano fermi; il nastro diventa scorribile a mano.
- Guardato in browser a 1440px e 390px; nessuno scorrimento orizzontale, nessun errore in console.

---

## 9 novembre 2026 - Restyling grafico, animazioni e caricamento iniziale

> Nota: il rosso d'accento citato qui sotto è stato rimosso nel secondo passaggio (vedi sopra).

Obiettivo: rendere il sito più moderno e professionale senza cambiare il brand
(bianco e nero, Cormorant Garamond, forme squadrate), i contenuti, gli indirizzi
delle pagine e le ancore (`#about`, `#services`, `#gallery`, `#booking`, `#contact`).

### File nuovi

| File | A cosa serve |
|---|---|
| `hbr.css` | Foglio di stile condiviso da tutte le pagine: colori, bottoni, navbar, menu mobile, animazioni, sezioni della home. |
| `logo-small.png`, `logo-white-small.png` | Logo ritagliato e ridotto (51 KB e 39 KB al posto di 467 KB e 588 KB). |
| `IMMAGINI_GENERALI/banner.jpg` | Immagine dell'hero in JPEG 1920px (94 KB al posto di 4,3 MB). |
| `IMMAGINI_NOI/veruska.jpg`, `max.jpg`, `gaia.jpg` | Foto del team in JPEG 900px (da 2,4-3,2 MB a 100-220 KB l'una). |
| `CHANGELOG.md` | Questo file. |
| `.claude/` | Solo per l'anteprima locale (server di prova). Non serve online, si può non caricare. |

I file originali (`logo.png`, `logo-white.png`, `banner.png`, foto `.png` del team) non sono stati toccati né cancellati.

### Caricamento iniziale (home)

- **Prima**: schermata con forbici, palo e pettine che durava sempre 2,8 secondi, anche a pagina già pronta. Il sito sotto era bloccato a `height:100vh` e senza JavaScript restava inutilizzabile. Il video da 16 MB partiva subito con `preload="auto"` insieme a un banner da 4,3 MB.
- **Adesso**:
  - schermata con il logo e un piccolo palo da barbiere a strisce in movimento;
  - dura quanto serve davvero (font + immagine dell'hero): minimo 1,2 s, massimo 3,5 s;
  - compare una sola volta per sessione: tornando in home da un'altra pagina non si rivede;
  - viene saltata con link ad ancora (es. `index.html#booking`) e con "riduci movimento" attivo;
  - esce scorrendo verso l'alto come un telo, e in quel momento entra il titolo dell'hero;
  - il CSS della schermata è in linea nella pagina, quindi compare subito senza sfarfallio;
  - senza JavaScript la schermata non appare e la pagina si legge tutta;
  - l'immagine dell'hero è precaricata; il video viene richiesto solo a pagina pronta, e non viene scaricato con risparmio dati o movimento ridotto;
  - il banner cookie arriva dopo l'uscita della schermata (prima era legato a un timer fisso di 3,6 s).

### Grafica (tutte le pagine)

- Nuovo carattere per i testi: **Jost** (geometrico, vicino allo stile del logo) al posto di Segoe UI. I titoli restano in Cormorant Garamond.
- Nero e bianco ammorbiditi (`#0d0d0d` e `#fafafa`) al posto di `#000` e `#fff` puri.
- Un solo colore d'accento: il **rosso del palo da barbiere** (`#b3312a`), usato per il divisore a strisce, la voce attiva del menu, il giorno di oggi negli orari, il focus da tastiera e i messaggi di errore.
- Navbar: logo più grande e leggibile, sottolineatura animata al passaggio del mouse, sfondo sfocato quando si scorre. Il menu orizzontale ora compare da 1280px in su: prima a 768-1280px le voci andavano a capo e si sovrapponevano.
- Menu mobile: le voci entrano una dopo l'altra.
- Bottoni: riempimento che sale dal basso al passaggio del mouse e leggera pressione al click.
- Contorno di focus visibile quando si naviga da tastiera (prima era disattivato).
- Passaggio morbido tra una pagina e l'altra nei browser che lo supportano.

### Home, sezione per sezione

- **Hero**: alta quanto lo schermo, titolo grande su due righe in basso a sinistra (prima era centrato e alto il 65%). Aggiunto il secondo bottone "Vedi il listino". Tolta la scritta "Scorri". Leggero effetto parallax sull'immagine.
- **Divisore a palo da barbiere** animato sotto l'hero.
- **Chi siamo**: titolo e testo allineati a sinistra; foto del team più grandi, in formato verticale, in bianco e nero (tornano a colori al passaggio del mouse) con comparsa "a tendina". Su telefono foto a sinistra e testo a destra.
- **Listino**: un solo elenco alla volta con selettore Donna / Uomo anche su computer (prima due tabelle di lunghezza molto diversa affiancate). Prezzi su due colonne con puntini guida al posto di una riga sotto ogni voce.
- **Galleria**: griglia con la prima foto in grande (2x2), 4 colonne su computer, 3 su tablet, 2 su telefono. Le foto entrano in sequenza. Selettore Donna / Uomo con cursore scorrevole. "Vedi altre foto" ora è un vero bottone raggiungibile da tastiera.
- **Galleria completa (finestra)**: stessi selettori, apertura animata, il focus va sul bottone Chiudi e torna al punto di partenza alla chiusura.
- **Prenotazione**: campi più alti e leggibili, messaggio di errore in linea che dice cosa manca (prima un `alert` del browser), etichetta collegata al campo "Sesso".
- **Contatti**: recapiti e orari a sinistra, mappa grande a destra (prima tre colonne centrate e mappa sotto). Il giorno di oggi è evidenziato negli orari; il pallino "Aperto ora" pulsa solo quando il salone è aperto.

### Animazioni aggiunte

Tutte usano solo `transform` e `opacity`, e si spengono con "riduci movimento" attivo nel sistema.

1. Schermata di caricamento con uscita a telo.
2. Titolo dell'hero che sale riga per riga, poi testo e bottoni.
3. Zoom lento dell'immagine dell'hero all'ingresso e parallax durante lo scroll.
4. Palo da barbiere a strisce in movimento (caricamento e divisore).
5. Comparsa delle sezioni allo scroll, con curva più morbida.
6. Tendina che scopre le foto del team.
7. Voci del listino e foto della galleria che entrano in sequenza.
8. Cursore scorrevole nei selettori Donna / Uomo e Ordine / Casuale.
9. Riempimento dei bottoni, sottolineatura delle voci di menu, voci del menu mobile in cascata.
10. Entrata morbida del contenuto nelle altre pagine.

### Correzioni tecniche

- Tolto l'ascolto diretto dello scroll per la navbar: ora usa `IntersectionObserver`.
- Le animazioni di comparsa nascondono gli elementi solo se JavaScript è attivo.
- Titoli riordinati: ogni sezione ha un `h2` vero (prima l'`h2` era l'etichetta piccola e il titolo era un `h3`).
- Giorni della settimana con l'accento corretto (Lunedì, Martedì...).
- Tolto il trattino lungo dalla nota del totale stimato (home e Buoni).
- Dimensioni dichiarate sulle immagini per evitare salti di layout.

### Cosa NON è cambiato

- Testi, prezzi, numeri di telefono, link, P.IVA, Privacy Policy.
- File dei dati (`SERVIZI_*.js`, `GALLERIA_*.js`, `NOVITA.js`, `promozioni*.js`) e script `genera_galleria`: si aggiornano come prima.
- Logica di prenotazione WhatsApp, totale stimato, stato aperto/chiuso, Google Analytics e consenso cookie.
- Struttura e contenuti delle pagine Novità, Buoni, Promozioni, Recensioni, Privacy e 404: ricevono solo font, colori, navbar, bottoni e animazioni condivise.

### Da sapere

- **Foto del team**: la home ora usa `IMMAGINI_NOI/veruska.jpg`, `max.jpg`, `gaia.jpg`. Per cambiare una foto va sostituito il file `.jpg` (non più il `.png`).
- **Logo**: le pagine usano `logo-white-small.png` e `logo-small.png`. Se il logo cambia vanno rigenerati anche questi due.
- **Foto della galleria**: la cartella `IMMAGINI_DONNA` pesa 16,7 MB. Le foto si caricano solo quando servono, ma ridurle a circa 1200px migliorerebbe ancora i tempi su telefono.
- **Tailwind**: il sito usa ancora lo script `cdn.tailwindcss.com`, pensato per lo sviluppo. Funziona, ma un CSS compilato renderebbe il primo caricamento più veloce.
- **Font**: Jost e Cormorant Garamond arrivano da Google Fonts. Ospitarli sul sito eviterebbe la richiesta a Google.
- **Alternanza chiaro/scuro**: listino e contatti restano su fondo nero come nel sito originale, perché fa parte dell'identità in bianco e nero del marchio.
- **Privacy Policy**: i trattini lunghi nel testo legale sono stati lasciati come sono.
