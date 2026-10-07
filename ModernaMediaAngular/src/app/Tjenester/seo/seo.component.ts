import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { V2_BLOCKS } from '../../v2/v2-blocks';
import { SEO_FAQ } from '../../v2/v2-data';
import { applyV2Seo } from '../../v2/v2-seo';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  standalone: true,
  imports: [...V2_BLOCKS],
})
export class SeoComponent implements OnInit {
  constructor(private seo: SeoService) {}

  faq = SEO_FAQ;

  tekniskText = [
    'Teknisk SEO omhandler å forbedre de tekniske delene av en nettside, som hjelper søkemotorer å enkelt registrere og lagre nettsiden. Kort fortalt er teknisk SEO å forsikre at en nettside møter de tekniske kravene til moderne søkemotorer, som Google, Bing og Yahoo.',
    'Gjennom prosessen med teknisk SEO er det viktig å sikre TLS-sikkerhet for å verifisere tilliten til nettsiden. Deretter kommer mobilvennlighet, ettersom 2 av 3 brukere besøker nettsider med mobiltelefon. Noe av det mer utfordrende med teknisk søkemotoroptimalisering er hastighet, fordi flere faktorer spiller inn: Kunden, serveren og selve nettsiden er alle brikker i dette puslespillet.',
    'Heldigvis kan vi i Moderna Media alle triksene når det kommer til å optimalisere hastighet. Et godt eksempel finnes på vår egen nettside, der vi har tatt i bruk raske servere, SPA-teknologi og server-side rendering. Vi har også optimalisert alle bilder ved hjelp av kompresjon og neste generasjons bildeformater.',
    'Velutbygget teknisk SEO byr på flere verdifulle gevinster, som:',
  ];

  offpageText = [
    'Off-page SEO omhandler alt man kan gjøre utenfor bedriftens nettside for å styrke plasseringen på SERP (search engine results page). Altså hvilke steg man kan ta for å sørge for at nettsiden rangerer høyt på søkemotorenes resultatsider, som Google, Bing og Yahoo. Disse stegene kan innebære alt fra tilstedeværelse på sosiale medier til reklamer på ulike plattformer.',
    'Enkelt sagt er off-page SEO en av flere faktorer som avgjør relevansen til nettsiden din i et internettsøk. Off-page SEO omhandler også i stor grad lenkebygging. Det vil si at søkemotorer som Google identifiserer andre nettsider som lenker til din nettside, og hvor relevante de er.',
    'I Norge er off-page SEO en tidkrevende jobb, ettersom de fleste relevante nettsidene som burde lenket til din bedrift ofte er konkurrentene dine. En av de mest populære strategiene går inn i gråsonen, der man publiserer lenker til sin egen nettside på tilfeldige nettsider. Gjøres dette feil eller uetisk, skader det rangeringen din. Heldigvis har vi i Moderna Media SEO-konsulenter klare til å bistå bedriften din med trygg off-page SEO.',
    'Effektiv off-page SEO byr på flere verdifulle gevinster, som:',
  ];

  innholdText = [
    'On-page SEO omhandler innholdsproduksjon. Altså innhold man produserer for en bedrifts nettside for å rangere høyere på søkemotorenes resultatsider. On-page SEO er ufattelig viktig for en bedrifts markedsføring, fordi det styrker bedriftens tilstedeværelse på nett. Derfor må det jobbes konsekvent med innholdsproduksjon for å sørge for gode resultater.',
    'Har du hørt at «content is king»? Eller lagt merke til at vi skriver «søkemotor optimalisering» noen steder og «søkemotoroptimalisering» andre steder? Det har vi gjort fordi en undersøkelse viste at omtrent 1100 nordmenn søker på «søkemotor optimalisering» hver måned, mens 800 søker på «søkemotoroptimalisering».',
    'Når man produserer innhold for søkemotoroptimalisering, gjelder det å ha gjort undersøkelser for å finne nøkkelord, setninger og spørsmål som ofte søkes på. Men det er ikke nok å identifisere nøkkelord og publisere et blogginnlegg. Man må også være påpasselig med lengde, gjentakelse og ordvalg. Til syvende og sist hjelper det ikke at Google elsker innholdet ditt hvis potensielle kunder ikke gjør det. Er gjennomsnittstiden 10 sekunder på en artikkel på 1300 ord, indikerer det at innholdet er lite engasjerende.',
    'Heldigvis har vi i Moderna Media mange dyktige SEO-eksperter som kan hjelpe bedriften din med innholdsproduksjonen. Vi jobber konsekvent for å produsere engasjerende og SEO-optimalisert innhold for bedrifter i alle prisklasser.',
  ];

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/tjenester/bedrift/seo',
      title: SeoUtils.TjenesterSeo.title,
      description: SeoUtils.TjenesterSeo.description,
      crumbs: [
        { name: 'Tjenester', path: '/tjenester' },
        { name: 'SEO', path: '/tjenester/bedrift/seo' },
      ],
      faq: SEO_FAQ,
      service: { name: 'Søkemotoroptimalisering (SEO)', description: SeoUtils.TjenesterSeo.description, lowPrice: 5000 },
    });
  }
}
