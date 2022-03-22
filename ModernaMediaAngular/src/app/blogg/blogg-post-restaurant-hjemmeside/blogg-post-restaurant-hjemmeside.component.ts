import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { ContactService } from './../../services/contact.service';
import {
  Component,
  Input,
  OnInit,
  Output,
  Renderer2,
  Inject,
} from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl, Meta, Title } from '@angular/platform-browser';
import { ViewportScroller, DOCUMENT } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-blogg-post-restaurant-hjemmeside',
  templateUrl: './blogg-post-restaurant-hjemmeside.component.html',
  styleUrls: [
    './blogg-post-restaurant-hjemmeside.component.scss',
    './blogg-post-restaurant-hjemmeside.desktop.component.scss',
  ],
})
export class BloggPostRestaurantHjemmesideComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller,
    private cs: ContactService,
    private meta: Meta,
    private title: Title,
    private seo: SeoService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private router: Router
  ) {
    title.setTitle(SeoUtils.BloggRestaurantHjemmeside.title);
  }
  imageCdn = environment.img;
  ngOnInit(): void {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.BloggRestaurantHjemmeside.description,
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });

    // JSONLD
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${this.router.url}"
          },
          "headline": "Hvorfor restauranten din trenger en hjemmeside",
          "image": "https://modernamedia.no//assets/Images/Blogg/restauranthjemmeside/1280/pen%20dame%20som%20nyter%20maten%20etter%20hun%20fant%20nettsiden%20til%20en%20restaurant.webp",
          "author": {
            "@type": "Organization",
            "name": "Moderna Media",
            "url":"https://modernamedia.no/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Moderna Media",
            "logo": {
              "@type": "ImageObject",
              "url": "https://modernamedia.no/assets/Images/LogoV2/Updated/Moderna%20Media%20-%20Logo%20&%20Text%20-%20Dark.jpg"
            }
          },
          "datePublished": "${'2022-03-22'}",
          "dateModified": "${formatDate(new Date(), 'yyyy-MM-dd', 'en')}",
          "description": "Ifølge en undersøkelse utført under pandemien, sa 82% av kundene at de er mye mer tilbøyelige for å besøke en restaurant etter å ha sett nettsiden til bedriften.",
          "articleBody": "
          Hvorfor restauranten din trenger en hjemmeside

          Ifølge en undersøkelse utført under pandemien, sa 82% av kundene at de er mye mer tilbøyelige for å besøke en restaurant etter å ha sett den på nettet.

          Derfor er din tilstedeværelse på nettet like viktig for virksomhetens vekst som din fysiske tilstedeværelse.

          Ingen kjøper tjenestene dine eller maten din hvis de ikke vet hva du tilbyr. Mange restauranter tilbyr produkter eller cateringtjenester i tillegg til den generelle restaurantdriften.  Men dette er det ikke alle kunder som vet!  Derfor bør du tilordne fremtredende områder på nettstedet ditt og adressere hele bredden av restaurantens tilbud, og dermed skape en større bevissthet og generere mer virksomhet og aktivitet i din bedrift.

          Med en hjemmeside og med økt digital tilstedeværelse kan du også tilby leveringer. Den plutselige COVID19-pandemien tok ikke bare verden med storm, men rystet restaurantindustrien. 

          Det anslås at restauranter, barer, klubber, kafeer, etc. i USA mistet $ 240 milliarder i markedsverdi i 2020.  Selv om disse pandemitidene er en ekstrem utfordring å håndtere, tilbyr de også en unik mulighet. 
          
          Restauranter som hadde opprettet et nettsted med en integrert online matbestillingsplattform, så en 91% økning i salget over hele USA under nedstengningen. Med et restaurantnettsted lar du kundene dine reservere bord, bestille mat, be om kontaktløse leveranser og betale gjennom online metoder. 

          Det er ikke vanskelig å forstå hvordan fremtiden til restaurantbedriften ser ut med pandemien. Hvis du vil at restaurantvirksomheten din skal trives i det nye markedet, må den utvikle seg og omfavne endring. En av disse endringene er leveranser og kontaktløs catering.

          Etter hvert som mer og mer tid går, vil behovet for et nettsted bare øke. En av de viktigste fordelene med å ha et nettsted for en restaurant er at du øker rekkevidden. Nå er du ikke lenger begrenset av din geografiske plassering. 

          Ved å øke synligheten din på nettet, øker du også sjansene dine for å generere nye potensielle kunder. Med et nettsted kan restauranten din kuratere kontaktinformasjon til kunder, tilby dem spesielle rabatter, holde dem oppdatert og gi dem online matbestillingsalternativer som nevnt i forrige punkt.

          Nettstedet ditt lar folk vite hvem du er og gir potensielle kunder en følelse av restauranten, menyen og atmosfæren. Du har også muligheten til å demonstrere for kundene hvorfor restauranten din er det riktige valget for dem.  Husk at førsteinntrykk teller. 

          Et smart, enkelt design vil hjelpe deg med å formidle det profesjonelle, men tiltalende bildet du ønsker å illustrere for kunden. Du har alternativer når det gjelder å lage et nettsted. 

          Den billigste metoden er å (selvfølgelig) gjøre det selv.  Med litt programvare, en referanseguide eller to, og din dedikasjon, kan en person med grunnleggende dataferdigheter ha et enkelt nettsted opp innen en måned eller mindre.  Du kan også bestemme deg for å bruke en enkelt leverandør som kan handle alt fra domene til server, nettsteddesign, utvikling og vedlikehold.  Husk å spørre dem om de bruker anbefalte fremgangsmåter for søkemotoroptimalisering når de bygger nettstedene sine, og om de vil bidra til å forbedre plasseringen av søkeresultatene på nettstedet ditt når det lanseres.

          Selv om du mest sannsynlig ikke er tilgjengelig 24 timer i døgnet for å svare på spørsmål, er nettstedet ditt, også kjent som din "virtuelle butikkfront", alltid der for å besvare de besøkendes spørsmål.

          Det er en god sjanse for at andre restauranter i ditt område har en nettside for bedriften sin og lokker din potensielle virksomhet fordi de blir enklere oppdaget.  Mange potensielle kunder liker å "sammenligne butikker",  altså undersøke flere restauranter på nettet før de tar en beslutning om hvor de skal spise.

          Uten en tilstedeværelse på nettet kan det hende at restauranten din ikke lenger regnes som et alternativ for dem.  Du kan også gå glipp av å være oppført i lokale online kataloger hvor konkurrentene dine kan være oppført.

          Før du bygger opp nettstedet ditt, er det lurt å sjekke ut hva konkurrentene dine gjør på nettet.  Det er en fin måte å få inspirasjon og ideer på, og samtidig tenke på måter du kan skille deg ut på. 

          Blir de ansatte gjentatte ganger bombardert av de samme forespørslene om og om igjen?  En fin måte å redusere tid brukt på feltproblemer er å publisere den informasjonen på nettstedet ditt.  I stedet for å ha en potensiell kundehenvendelse for veibeskrivelse til restauranten din, kan de lastes ned av kunden fra nettstedet ditt, noe som sparer tid og problemer for både ansatte og kunden.

          Et nettsted er et fantastisk verktøy for å fange kundetilbakemeldinger gjennom kommentarer og undersøkelser. I tillegg er et rent nettsted med regelmessig oppdatert innhold og kampanjer et sted der kundene kommer tilbake igjen og igjen - akkurat som de gjentatte anger, kommer tilbake til restauranten din.  Du kan dyrke og opprettholde et tillitsfullt forhold ved å publisere et vanlig e-postnyhetsbrev som tilbyr unikt, interessant innhold og spesialtilbud til abonnentene dine.

          Hva elsker kundene?  De elsker en god deal eller promoer.  Når du publiserer enkle kampanjer, for eksempel nedlastbare kuponger eller brosjyrer på nettstedet ditt, har det den effekten at kundene alltid har restauranten din i bakhodet, og får dem til å komme tilbake.         

          Å ha en tilstedeværelse på nettet 24 timer i døgnet er billigere enn trykt reklame, TV reklamasjon, mail kampanjer og nesten alle andre former for markedsføring.  Og i motsetning til de nevnte materialene, kan nettsteder oppdateres så ofte du vil med det innholdet du vil.  Den eneste typen handling du trenger å foreta deg når nettstedet ditt er lansert, er ... å lene deg tilbake og la nettstedet gjøre markedsføringen for deg!

          I tillegg til å betjene kunder, fungerer nettstedet ditt som et fleksibelt PR-verktøy.  Med stramme pressefrister trenger mediefolk som skriver om restauranten din ting som bilder av høy kvalitet og tekst om restauranten din.  Ved å gjøre denne informasjonen tilgjengelig på nettstedet ditt, kan du gjøre livet enklere for pressen og øke sjansene dine for gratis og god mediepublisitet.

          Som nevnt er det veldig sannsynlig at nettstedet ditt kommer til å gi et godt førsteinntrykk om restauranten din til alle potensielle gjester. Dette betyr at du alltid bør sørge for at den er god. Nettstedet ditt vil gi deg full kontroll over restaurantens image. Dette vil gi restauranten din en god kanal å kommunisere med for å fortelle din egen historie med dine egne ord, og ikke som et tredjeparts nettsteder. Kundene dine kan få et godt innblikk i hvem du egentlig er sammen med en god ide om restaurantens generelle atmosfære. En potensiell kunde vil helt sikkert ønske å ha et innblikk i hva som kan forventes i det øyeblikket de går inn i restauranten din, så ikke glem å legge til bilder av høy kvalitet av varene i menyen din, samt bilder av restauranten din. Det er også en stor sjanse for deg å vise takknemlighet til dine ansatte gjennom å inkludere deres bilder og biografier av ledergruppen, ledende kokker og andre.

          Når du gir restauranten din en egen hjemmeside, bidrar du til økt lojalitet og tillit før kundene dine i det hele tatt har besøkt restauranten din. Det er nemlig i deres beste interesse å vite hva andre tidligere kunder har å si. Tillat aldri tredjeparts nettsteder å bli deres kilde til informasjon om restauranten din. Nettstedet ditt fungerer som det ideelle stedet for å bygge tillit til merkevaren din gjennom kundevurderinger. Du kan også legge til restaurantens Google Business-sideanmeldelser direkte på nettstedet ditt. Det kan få anmeldelsene til å se mer legitime ut i stedet for å kopiere og lime inn attestene. Restaurantnettstedet ditt er en fin måte å gjøre merkevaren din sterkere og holde kundene oppdaterte. Legg til god bruk av sosiale medier, og du vil helt sikkert nå suksessen du alltid har ønsket deg.

          Til tross for økonomiske vanskeligheter, går kundene fortsatt ut for å spise.  De er bare mer forsiktige og analytiske i restaurantutvalget. Så derfor, som du kanskje innser, er et nettsted ikke noe du bare publiserer på nettet og deretter ignorerer i flere år. Internett er stadig utviklende og nye muligheter, fra online og mobil bestillinger til mer sofistikerte markedsføringsideer som dukker opp nesten daglig som kan være til nytte for virksomheten din.  Det vil være til nytte for deg i det lange løp. Det er derfor viktig å investere dypt i restaurantens tilstedeværelse på nettet og holde oversikt over innovasjoner og trender innen design av restaurantnettsteder og online markedsføring.

          Konklusjonsvis har vi etablert disse sannhetene: Hvis restauranter, barer, kafeer, etc. ønsker å vokse bedre og raskere, må de utvikle seg med tiden. Ikke bare bør de akseptere endring, men de må også by på seg selv og legge til rette for innføring og bruk av ny teknologi for å drive denne veksten.
"
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }
  scrollToId(id) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
