import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { V2_BLOCKS } from '../../v2/v2-blocks';
import { DESIGN_FAQ } from '../../v2/v2-data';
import { applyV2Seo } from '../../v2/v2-seo';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  standalone: true,
  imports: [...V2_BLOCKS],
})
export class DesignComponent implements OnInit {
  constructor(private seo: SeoService) {}

  faq = DESIGN_FAQ;

  logoText = [
    'En logo skal enkelt kommunisere bedriftens personlighet, tjenester og verdier ved hjelp av fargeteori, former og fonter. En god logo bør presentere et tydelig bilde av bedriften din og hva din bedrift står for.',
    'Logo design omhandler mye mer enn å sette sammen former, farger og tekst. Det handler om å kommunisere bedriftens visjon, verdier, tjenester, personlighet og misjon på en effektiv og tydelig måte.',
    'En god logo bør:',
  ];
  logoAfter = [
    'Hos Moderna Media mener vi at bra logo design er en verdifull investering for enhver bedrift. Derfor har vi satt en bunnpris for våre logodesign. Vi designer logoer for klienter med både små og store budsjetter, samtidig som vi verdsetter å levere tjenester av topp kvalitet. Kontakt oss i dag for et uforpliktende møte om logodesign eller revisjon av din eksisterende logo!',
  ];

  webText = [
    'Webdesign brukes for å utforme en nettside. Dette er en mulighet til å utarbeide brukeropplevelsen gjennom designet av nettsidens oppsett, farger, fonter, bilder og lignende. Webdesign består ofte av tungt arbeid innenfor selve designet, også kjent som UI (user interface), og brukervennlighet, UX (user experience). Med et godt utført webdesign blir siden estetisk tiltalende, brukervennlig, og formidler bedriftens verdier og tjenester tydelig.',
    'Har du besøkt en nettbutikk som var lite brukervennlig? Kanskje slet du med å finne informasjonen du så etter? Dette kan lett skape frustrasjon hos kundene dine og sende dem over til konkurrentene. Vi hjelper deg å holde en god og funksjonell side.',
    'Visste du at den gjennomsnittlige brukeren danner seg et førsteinntrykk av bedriften din i løpet av 0,5 sekunder? Visste du også at 2 av 3 kunder bruker mobil for å besøke nettsiden din? Eller at 7 av 10 kunder oppdager bedrifter gjennom blogginnlegg? Vi i Moderna utvikler digitale løsninger med effektivt design og optimal mobile-first brukervennlighet, og anbefaler alle bedrifter med tilstrekkelig budsjett å opprette en blogg. Vi verdsetter brukervennlighet og førsteinntrykk ved å utvikle moderne webdesign som gjenspeiler visjonen og verdiene til bedriften din!',
    'Bra webdesign kan forbedre:',
  ];

  grafiskText = [
    'Grafisk design er kunsten å presentere visuelt innhold som kommuniserer en melding eller et innhold. Grafisk design kan være mye, blant annet en reklame i avis eller magasin, en plakat for en film eller et bedriftskort. For å gjøre det enkelt: Du finner grafisk design overalt, blant annet på colaflasken i kjøleskapet eller potetgullposen i sofaen.',
    'Et godt grafisk design bruker statistikk og faktabasert informasjon for å oppnå størst og best mulig konvertering. Et eksempel på dette er da Google byttet farge på lenkene i søket – de byttet faktisk bare mellom ulike blåfarger. Det ble testet omtrent 50 forskjellige blåfarger, og resultatet var en ekstra omsetning på 200 millioner dollar.',
    'Dersom bedriften ønsker å ta med seg de konkurransefortrinnene den kan, anbefaler vi på det sterkeste å bruke tid på å finne de optimale løsningene og designene din bedrift trenger. Hos Moderna Media tar vi alt i betraktning for å gi bedriften din det beste grafiske designet, slik at du ikke legger penger igjen på bordet!',
  ];

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/tjenester/bedrift/design',
      title: SeoUtils.TjenesterDesign.title,
      description: SeoUtils.TjenesterDesign.description,
      crumbs: [
        { name: 'Tjenester', path: '/tjenester' },
        { name: 'Design', path: '/tjenester/bedrift/design' },
      ],
      faq: DESIGN_FAQ,
      service: { name: 'Logo design, webdesign og grafisk design', description: SeoUtils.TjenesterDesign.description, lowPrice: 7500 },
    });
  }
}
