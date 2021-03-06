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
          "description": "If??lge en unders??kelse utf??rt under pandemien, sa 82% av kundene at de er mye mer tilb??yelige for ?? bes??ke en restaurant etter ?? ha sett nettsiden til bedriften.",
          "articleBody": "
          Hvorfor restauranten din trenger en hjemmeside

          If??lge en unders??kelse utf??rt under pandemien, sa 82% av kundene at de er mye mer tilb??yelige for ?? bes??ke en restaurant etter ?? ha sett den p?? nettet.

          Derfor er din tilstedev??relse p?? nettet like viktig for virksomhetens vekst som din fysiske tilstedev??relse.

          Ingen kj??per tjenestene dine eller maten din hvis de ikke vet hva du tilbyr. Mange restauranter tilbyr produkter eller cateringtjenester i tillegg til den generelle restaurantdriften.  Men dette er det ikke alle kunder som vet!  Derfor b??r du tilordne fremtredende omr??der p?? nettstedet ditt og adressere hele bredden av restaurantens tilbud, og dermed skape en st??rre bevissthet og generere mer virksomhet og aktivitet i din bedrift.

          Med en hjemmeside og med ??kt digital tilstedev??relse kan du ogs?? tilby leveringer. Den plutselige COVID19-pandemien tok ikke bare verden med storm, men rystet restaurantindustrien. 

          Det ansl??s at restauranter, barer, klubber, kafeer, etc. i USA mistet $ 240 milliarder i markedsverdi i 2020.  Selv om disse pandemitidene er en ekstrem utfordring ?? h??ndtere, tilbyr de ogs?? en unik mulighet. 
          
          Restauranter som hadde opprettet et nettsted med en integrert online matbestillingsplattform, s?? en 91% ??kning i salget over hele USA under nedstengningen. Med et restaurantnettsted lar du kundene dine reservere bord, bestille mat, be om kontaktl??se leveranser og betale gjennom online metoder. 

          Det er ikke vanskelig ?? forst?? hvordan fremtiden til restaurantbedriften ser ut med pandemien. Hvis du vil at restaurantvirksomheten din skal trives i det nye markedet, m?? den utvikle seg og omfavne endring. En av disse endringene er leveranser og kontaktl??s catering.

          Etter hvert som mer og mer tid g??r, vil behovet for et nettsted bare ??ke. En av de viktigste fordelene med ?? ha et nettsted for en restaurant er at du ??ker rekkevidden. N?? er du ikke lenger begrenset av din geografiske plassering. 

          Ved ?? ??ke synligheten din p?? nettet, ??ker du ogs?? sjansene dine for ?? generere nye potensielle kunder. Med et nettsted kan restauranten din kuratere kontaktinformasjon til kunder, tilby dem spesielle rabatter, holde dem oppdatert og gi dem online matbestillingsalternativer som nevnt i forrige punkt.

          Nettstedet ditt lar folk vite hvem du er og gir potensielle kunder en f??lelse av restauranten, menyen og atmosf??ren. Du har ogs?? muligheten til ?? demonstrere for kundene hvorfor restauranten din er det riktige valget for dem.  Husk at f??rsteinntrykk teller. 

          Et smart, enkelt design vil hjelpe deg med ?? formidle det profesjonelle, men tiltalende bildet du ??nsker ?? illustrere for kunden. Du har alternativer n??r det gjelder ?? lage et nettsted. 

          Den billigste metoden er ?? (selvf??lgelig) gj??re det selv.  Med litt programvare, en referanseguide eller to, og din dedikasjon, kan en person med grunnleggende dataferdigheter ha et enkelt nettsted opp innen en m??ned eller mindre.  Du kan ogs?? bestemme deg for ?? bruke en enkelt leverand??r som kan handle alt fra domene til server, nettsteddesign, utvikling og vedlikehold.  Husk ?? sp??rre dem om de bruker anbefalte fremgangsm??ter for s??kemotoroptimalisering n??r de bygger nettstedene sine, og om de vil bidra til ?? forbedre plasseringen av s??keresultatene p?? nettstedet ditt n??r det lanseres.

          Selv om du mest sannsynlig ikke er tilgjengelig 24 timer i d??gnet for ?? svare p?? sp??rsm??l, er nettstedet ditt, ogs?? kjent som din virtuelle butikkfront, alltid der for ?? besvare de bes??kendes sp??rsm??l.

          Det er en god sjanse for at andre restauranter i ditt omr??de har en nettside for bedriften sin og lokker din potensielle virksomhet fordi de blir enklere oppdaget.  Mange potensielle kunder liker ?? sammenligne butikker,  alts?? unders??ke flere restauranter p?? nettet f??r de tar en beslutning om hvor de skal spise.

          Uten en tilstedev??relse p?? nettet kan det hende at restauranten din ikke lenger regnes som et alternativ for dem.  Du kan ogs?? g?? glipp av ?? v??re oppf??rt i lokale online kataloger hvor konkurrentene dine kan v??re oppf??rt.

          F??r du bygger opp nettstedet ditt, er det lurt ?? sjekke ut hva konkurrentene dine gj??r p?? nettet.  Det er en fin m??te ?? f?? inspirasjon og ideer p??, og samtidig tenke p?? m??ter du kan skille deg ut p??. 

          Blir de ansatte gjentatte ganger bombardert av de samme foresp??rslene om og om igjen?  En fin m??te ?? redusere tid brukt p?? feltproblemer er ?? publisere den informasjonen p?? nettstedet ditt.  I stedet for ?? ha en potensiell kundehenvendelse for veibeskrivelse til restauranten din, kan de lastes ned av kunden fra nettstedet ditt, noe som sparer tid og problemer for b??de ansatte og kunden.

          Et nettsted er et fantastisk verkt??y for ?? fange kundetilbakemeldinger gjennom kommentarer og unders??kelser. I tillegg er et rent nettsted med regelmessig oppdatert innhold og kampanjer et sted der kundene kommer tilbake igjen og igjen - akkurat som de gjentatte anger, kommer tilbake til restauranten din.  Du kan dyrke og opprettholde et tillitsfullt forhold ved ?? publisere et vanlig e-postnyhetsbrev som tilbyr unikt, interessant innhold og spesialtilbud til abonnentene dine.

          Hva elsker kundene?  De elsker en god deal eller promoer.  N??r du publiserer enkle kampanjer, for eksempel nedlastbare kuponger eller brosjyrer p?? nettstedet ditt, har det den effekten at kundene alltid har restauranten din i bakhodet, og f??r dem til ?? komme tilbake.         

          ?? ha en tilstedev??relse p?? nettet 24 timer i d??gnet er billigere enn trykt reklame, TV reklamasjon, mail kampanjer og nesten alle andre former for markedsf??ring.  Og i motsetning til de nevnte materialene, kan nettsteder oppdateres s?? ofte du vil med det innholdet du vil.  Den eneste typen handling du trenger ?? foreta deg n??r nettstedet ditt er lansert, er ... ?? lene deg tilbake og la nettstedet gj??re markedsf??ringen for deg!

          I tillegg til ?? betjene kunder, fungerer nettstedet ditt som et fleksibelt PR-verkt??y.  Med stramme pressefrister trenger mediefolk som skriver om restauranten din ting som bilder av h??y kvalitet og tekst om restauranten din.  Ved ?? gj??re denne informasjonen tilgjengelig p?? nettstedet ditt, kan du gj??re livet enklere for pressen og ??ke sjansene dine for gratis og god mediepublisitet.

          Som nevnt er det veldig sannsynlig at nettstedet ditt kommer til ?? gi et godt f??rsteinntrykk om restauranten din til alle potensielle gjester. Dette betyr at du alltid b??r s??rge for at den er god. Nettstedet ditt vil gi deg full kontroll over restaurantens image. Dette vil gi restauranten din en god kanal ?? kommunisere med for ?? fortelle din egen historie med dine egne ord, og ikke som et tredjeparts nettsteder. Kundene dine kan f?? et godt innblikk i hvem du egentlig er sammen med en god ide om restaurantens generelle atmosf??re. En potensiell kunde vil helt sikkert ??nske ?? ha et innblikk i hva som kan forventes i det ??yeblikket de g??r inn i restauranten din, s?? ikke glem ?? legge til bilder av h??y kvalitet av varene i menyen din, samt bilder av restauranten din. Det er ogs?? en stor sjanse for deg ?? vise takknemlighet til dine ansatte gjennom ?? inkludere deres bilder og biografier av ledergruppen, ledende kokker og andre.

          N??r du gir restauranten din en egen hjemmeside, bidrar du til ??kt lojalitet og tillit f??r kundene dine i det hele tatt har bes??kt restauranten din. Det er nemlig i deres beste interesse ?? vite hva andre tidligere kunder har ?? si. Tillat aldri tredjeparts nettsteder ?? bli deres kilde til informasjon om restauranten din. Nettstedet ditt fungerer som det ideelle stedet for ?? bygge tillit til merkevaren din gjennom kundevurderinger. Du kan ogs?? legge til restaurantens Google Business-sideanmeldelser direkte p?? nettstedet ditt. Det kan f?? anmeldelsene til ?? se mer legitime ut i stedet for ?? kopiere og lime inn attestene. Restaurantnettstedet ditt er en fin m??te ?? gj??re merkevaren din sterkere og holde kundene oppdaterte. Legg til god bruk av sosiale medier, og du vil helt sikkert n?? suksessen du alltid har ??nsket deg.

          Til tross for ??konomiske vanskeligheter, g??r kundene fortsatt ut for ?? spise.  De er bare mer forsiktige og analytiske i restaurantutvalget. S?? derfor, som du kanskje innser, er et nettsted ikke noe du bare publiserer p?? nettet og deretter ignorerer i flere ??r. Internett er stadig utviklende og nye muligheter, fra online og mobil bestillinger til mer sofistikerte markedsf??ringsideer som dukker opp nesten daglig som kan v??re til nytte for virksomheten din.  Det vil v??re til nytte for deg i det lange l??p. Det er derfor viktig ?? investere dypt i restaurantens tilstedev??relse p?? nettet og holde oversikt over innovasjoner og trender innen design av restaurantnettsteder og online markedsf??ring.

          Konklusjonsvis har vi etablert disse sannhetene: Hvis restauranter, barer, kafeer, etc. ??nsker ?? vokse bedre og raskere, m?? de utvikle seg med tiden. Ikke bare b??r de akseptere endring, men de m?? ogs?? by p?? seg selv og legge til rette for innf??ring og bruk av ny teknologi for ?? drive denne veksten.
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
