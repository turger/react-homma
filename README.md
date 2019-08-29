# React-homma 👾
Kodarit black belt -kurssin react-harjoitus. React.js + git + HSL API + GitHub pages.

Kurssilla on tarkoitus tehdä oma pysäkkiaikataulu.
Näillä eväillä voi sitten tehdä minkä vaan palvelun nettiin kohtuullisen helposti.

## Oppitunnit

Tunnit eivät ole kiveen hakattuja, voi edetä hitaammin tai nopeammin.

Koodin ohessa voidaan puhua myös sisennysten tärkeydestä.

Jos pitää jakaa jokin urli tai muu kurja copypastettava, niin voidaan perustaa kertakäyttöinen chat oppitunnin ajaksi käyttämällä esim. http://disposablechat.com tai jakaa koodia pastebinilla https://pastebin.com.

⚠️ Huom! Tämän repon commitit on pilkottu pieniin osiin järjestyksessä, jota voi seurata oppitunneilla.

# Alkuvalmistelut
Asennetaan:
- Git
- Node.js + npm
- Atom tai joku muu hyvä ja kevyt editori

# 1. Asennukset ja HTML + js kertaus
Käydään ensin lyhyesti läpi yleistasolla mitä ovat Firebase, React.js, HSL API ja git.
- Käydään Macilla Terminaalilla tai Windowsilla git-bashilla yleiset komentorivikehotteet läpi: `cd`, `ls`, `pwd`, `mkdir` jne.
- Voidaan vähän harjoitella tässä myös `vim`:in käyttöä koska se on cool.
  Eli `vim index.html`, sitten `i` niinkuin insert ja kirjoitetaan vaikka html-tagit. Sitten `:wq` eli write ja quit.
- Avataan Atomilla `atom index.html` ja kirjoitetaan html loppuun siellä.
- Lisätään reactia `index.html`:n sekaan.
- Avataan sivu selaimella ja ihastellaan tulosta `open index.html`.
- Lue lisää staattisen html-sivun tekemisestä: https://reactjs.org/docs/add-react-to-a-website.html.

# 2. Create-react-app
Edelliskerran harjoitus oli pikainen raapaisu reactiin, nyt aloitetaan varsinainen koodaus.
Skipataan kehitysympäristön käsin konfigurointi ja käytetään Facebookin luomaa `create-react-app` npm-kirjastoa.

Ensin asennetaan kyseinen kirjasto:  
`npm install -g create-react-app`

Luodaan uusi react-sovellus:  
`create-react-app viisasten-kivi` (haluamasi sovelluksen nimi, voi olla mitä vain)  

Siirrytään luomamme sovelluksen hakemistoon:  
`cd viisasten-kivi`

Käynnistetään sovellus:  
`npm start`

- Käydään läpi mitä missäkin sovelluksen hakemistossa ja tiedostossa on sisällä ja mitä ne tekee.  
- Muokataan `src/App.js`-tiedostoa ja katsotaan miltä se näyttää selaimella.
- Päivitetään `README.md`omat tekstit.

# 3. Tehdään aikataulu-komponentti
Luodaan `src/Timetable.js` ja tehdään sinne kovakoodattu taulukko kulkuvälineistä ja lähtöajoista. Tämä korvataan myöhemmin oikealla pysäkkidatalla.

Siirretään aikataulun data App.js alle ja annetaan se parametrina Timetable-komponentille. Muutetaan Timetable-komponentti käyttämään saatua taulun dataa.

Annetaan lista aikataulun datoja Timetable-komponentille, niin että se voi kerralla näyttää useamman pysäkin datat.

# 4. Css
Poistetaan `src/App.css` tiedostosta kaikki muut muotoilut paitsi `.App` ja luodaan otsikolle uudet muotoilut.
Voidaan lisätä otsikolle joku kiva fontti Google fontseista https://fonts.google.com/ (mutta ei käytetä fontin valintaan liikaa aikaa). Lisätään ohjeiden mukaan fontin import-rivi `public/index.html`-tiedostoon `<head>` tagin sisään, käynnistetään appi uudestaan ja sen jälkeen fonttia voi käyttää otsikossa ja muualla appissa.
Voidaan lisätä esimerkiksi taustakuva ja eri värejä. Muokataan myös `src/App.css` halutunlaiseksi.

Luodaan `src/Timetable.css` ja tehdään haluttu muotoilu Timetable-komponentille.  
Esimerkeissä on käytetty flexboxia, joka on oikein mainio väline sivuston elementtien asetteluun halutuille paikoille. Tutustumisen avuksi on suositeltavaa pelata ensin Flexbox Froggy -harjoituspeliä https://flexboxfroggy.com, jonka jälkeen voidaan harjoitella omalla sivulla aikataulu-komponentin taulun sijoittamista sivun keskelle.

# 5. Tehdään kysely HSL-apiin

Haetaan HSL-apista tietyn pysäkin kulkuvälineiden lähtöajat ja korvataan kovakoodattu pysäkkidata tällä.  
Routing API: https://digitransit.fi/en/developers/apis/1-routing-api/.

Esimerkkikysely halutun pysäkin gtfsId:n etsimiseen HSL api:sta pysäkin nimellä: https://api.digitransit.fi/graphiql/hsl?query=%7B%0A%20%20stops(name%3A%20%22Lauttasaaren%20silta%22)%20%7B%0A%20%20%20%20gtfsId%2C%0A%20%20%20%20name%2C%0A%20%20%20%20code%0A%20%20%7D%0A%7D

Voit vielä tarkistaa että olet valinnut oikean pysäkin gtfsId:n, sillä esimerkiksi eri tien puolilla olevat pysäkit ovat usein saman nimisiä https://reittiopas.hsl.fi/pysakit/<gtfsId> eli esimerkiksi https://reittiopas.hsl.fi/pysakit/HSL:1310102

Esimerkkikysely HSL:n GraphQL consolessa pysäkkitietojen hakemiseen: https://api.digitransit.fi/graphiql/hsl?query=%257B%2520stops%28ids%253A%2520%255B%2522HSL%253A1310102%2522%252C%2520%2522HSL%253A1020171%2522%255D%29%2520%257B%250A%2520%2520%2520%2520name%250A%2520%2520%2509direction%250A%2520%2520%2520%2520gtfsId%250A%2520%2520%2520%2520stoptimesWithoutPatterns%28%250A%2520%2520%2520%2520%2520%2520startTime%253A%25201570297276%252C%250A%2520%2520%2520%2520%2520%2520timeRange%253A%2520180000%252C%250A%2520%2520%2520%2520%2520%2520numberOfDepartures%253A10%250A%2520%2520%2520%2520%29%2520%257B%250A%2520%2520%2520%2520%2520%2520realtimeArrival%250A%2520%2520%2520%2520%2509headsign%250A%2520%2520%2520%2520%2520%2520trip%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520route%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520gtfsId%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520longName%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520shortName%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520mode%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%257D

Tässä kohtaa käydään läpi mikä on reactin state ja componentDidMount. Tallennetaan pysäkkidata stateen.  

# 6. Päivitetään näkymää kerran minuutissa ja lisätään apufunktio

Päivitetään näkymä kerran minuutissa.  

Lisätään apufunktio näyttämään kulkuvälineen tuloaika ihmisluettavassa muodossa HSL API:n tarjoaman unix-aikaleiman sijaan (Format: seconds since midnight of the departure date).

# 7. Git

Tehdään gittiin tunnarit ja kaikille omat public-repot projektia varten. Julkinen repository siksi, että voimme GitHubin ilmaisversiossa julkaista sivun Github pagesin avulla (ohjeet alempana). Lisätään olemassaoleva projekti repoon.  
Huom! Tämän voi tehdä aikaisemmin, myöhemmin tai halutessa skipata kokonaan.  
(Käytetään https-urleja https://help.github.com/en/articles/which-remote-url-should-i-use)

Aina ennen oppituntia ja oppitunnin jälkeen tehdään git-rituaalit ohjeiden mukaisesti. Ohjekuva löytyy tämän repon juuresta `git-flow.png`.

## GitHub pages hosting

Julkaistaan oma appi GitHub pagesin avulla.

* Lisää kirjasto nimeltä `gh-pages` projektiin ajamalla terminaalissa projektin hakemiston sisällä komento `npm install gh-pages`.  
Tämä kirjasto auttaa meitä luomaan gittiin oman branchin nimeltä `gh-pages`, joka tarjoilee niputetut reactin tiedostot branchin kautta.  

* Lisää `package.json`-tiedostoon nimen ja version alle rivi `"homepage": "https://<käyttäjänimi>.github.io/<repositoryn-nimi>"` eli esimerkiksi `"homepage": "https://turger.github.io/react-homma"`.  

* Lisää `package.json`-tiedostoon skripti-osion sisään rivit:  
```
"predeploy": "yarn run build",
"deploy": "gh-pages -d build"
```

* Terminaalissa aja komento `npm run deploy`. Tämä komento puskee buildatut projektin tiedostot `gh-pages`-branchiin GitHubin etäpalvelimelle.  

* Lisää GitHubin käyttöliittymästä repositoryn asetuksista `GitHub Pages` -> `Source` ja valitse alasvetovalikosta valinta `gh-pages branch`.  
Tähän valikkoon pitäisi nyt tulla vihreä teksti "Your site is published at https://turger.github.io/react-homma/" (omalla urlillasi toki). Tarkista toimiiko sivu.  

Kun teet muutoksia ohjelmaasi, muista ajaa uusiksi komento `npm run deploy`, jotta muutokset menevät myös julkaistuille sivuillesi.

(Ohjeita esim. https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)

# 8. Haetaan sijainti

Haetaan sijainnin perusteella viisi lähintä pysäkkiä ja näytetään niiden kulkuvälineet ja lähtöajat omissa taulukoissaan. Sijainnin voi kirjoittaa tekstikenttään ja se haetaan Geocoding API:sta https://digitransit.fi/en/developers/apis/2-geocoding-api/address-search/.

Lisätään kysely sijainnin koordinaattien hakemiseen hakusanalla HSL API:sta.

# 9. Lisätään tekstikenttä sijainnin haulle
Lisätään tekstikenttä, johon voi kirjoittaa hakusanan ja hakea sijainnin käyttämällä juuri tekemäämme kyselyä. Tätä varten luodaan uusi komponentti `Search.js` ja sille tyylitiedosto `Search.css`. Käydään läpi samalla react-forms-asioita https://reactjs.org/docs/forms.html.

Lisää css-muotoiluja hakukentälle.

# 10. Haetaan lähimmät pysäkit ja näytetään ne
Tehdään uusi kysely, jolla haetaan HSL API:sta viisi lähintä pysäkkiä sijainnin perusteella.  

Kysely: https://api.digitransit.fi/graphiql/hsl?query=%257B%2520stopsByRadius%28lat%253A60.162590%252C%2520lon%253A24.915680%252C%2520radius%253A1000%252C%2520first%253A%25205%29%2520%257B%250A%2520%2520%2520%2520edges%2520%257B%250A%2520%2520%2520%2520%2520%2520node%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520distance%250A%2520%2520%2520%2520%2520%2520%2520%2520stop%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520gtfsId%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520name%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%257D

Haetaan lähimpien pysäkkien pysäkkidatat ja näytetään ne appissa.

# 11. Localstorage

(TODO)
Tallennetaan aina viimeksi haettu paikannimi localstorageen ja käytetään sitä sivun latautuessa.

# 12. Lisätään pysäkit karttaan

(TODO)
Map API https://digitransit.fi/en/developers/apis/3-map-api/.
