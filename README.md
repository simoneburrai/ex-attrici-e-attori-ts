# 🎬 Progetto Attrici - TypeScript

## 📌 Milestone 1
Crea un type alias **Person** per rappresentare una persona generica.

Il tipo deve includere le seguenti proprietà:
- `id`: numero identificativo, **non modificabile**
- `name`: nome completo, **stringa non modificabile**
- `birth_year`: anno di nascita, numero
- `death_year`: anno di morte, **numero opzionale**
- `biography`: breve biografia, stringa
- `image`: URL dell'immagine, stringa

---

## 📌 Milestone 2
Crea un type alias **Actress** che estende **Person** e aggiunge:
- `most_famous_movies`: una **tuple di 3 stringhe**
- `awards`: stringa
- `nationality`: una stringa tra i valori:
  - American, British, Australian, Israeli-American, South African, French, Indian, Israeli, Spanish, South Korean, Chinese

---

## 📌 Milestone 3
Crea una funzione **getActress** che, dato un `id`, effettua una chiamata:

`GET /actresses/:id`

La funzione deve:
- Restituire l’oggetto **Actress** se trovato
- Restituire `null` se non trovato
- Usare un **type guard `isActress`** per validare la struttura del dato

---

## 📌 Milestone 4
Crea una funzione **getAllActresses** che chiama:

`GET /actresses`

La funzione deve restituire:
- Un array di oggetti **Actress**
- Può essere anche **un array vuoto**

---

## 📌 Milestone 5
Crea una funzione **getActresses** che riceve un **array di numeri** (gli id delle attrici).

- Per ogni id, usa la funzione **getActress** (Milestone 3)
- Recupera tutte le attrici **in parallelo** usando `Promise.all`
- Restituisci un array contenente oggetti **Actress** oppure `null` se non trovata
