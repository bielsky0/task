## Installation

Run from the root of the repo to install everything needed:

```sh
$ npm install
```

## Running

Run from the root of the repo to install everything needed:

```sh
$ npm start
```

## Backend

Backend runs on port 8080.

Stack:

- Nodejs
- Express
- jsonwebtoken

## Bonus questions and answers in polish

- W jaki sposób można by umożliwić unieważnienie wszystkich wygenerowanych do tej pory tokenów?

Jednym ze sposobów było by wygenerowanie nowego (i tu w zależności czy tokeny są podpisywane za pomocą pary kluczy, czy hasha)
hasha albo nowej pary kluczy. Spowoduje to wymuszenie na użytkownikach ponownego zalogowania się żeby uzyskać nowy token.

Kolejnym ze sposobów może być dodanie do payload'u tokena daty jego utworzenia, utworzenie nowej tabeli w bazie, która by
przechowywała timestamp'y oraz stworzenie middleware'a, który łączył by się z bazą, wyciągał z blacklist'y najnowszy timestamp
i blokował wybrane request'y, w których data utworzenia tokena jest starsza niż najnowszy timestamp w tabeli.

- W jaki sposób można by ograniczyć czasowo ważność tokenu?

Podając czas w trakcie jego przypiswania po jakiej ma wygasnąć. Głównym atrybutem tokenów jest to, że wygasają, ponieważ, że
jedną z głównych zalet jest to, że nie trzeba go zapisywać do bazy danych. Token jest tak długo ważny jak długo go posiadamy raz
jaki jest czas ważności.

- Gdybyśmy chcieli móc przeglądać archiwalne logi, jakie rozwiązanie byś zaproponował?

Wszystko zależy od czasu, aby wprowadzić logger'a oraz od dostępnych pieniędzy. Najprostrzym oraz najmnej skalowalnym jest
zapisywanie wszystkich logów do pliku, ale nie sprawdzi się to przy większych aplikacjach. Najciekawszy rozwiązaniem myślę,
żeby było użycie Sentry.io, które wrap'uje całą klase console w Node'dzie, dzięki czemu monitoruje wszystkie logi w aplikacji,
z których potem udostępniam dashboard'y
