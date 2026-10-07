import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { V2_BLOCKS } from '../../v2/v2-blocks';
import { PROGRAMVARE_CARD, UTVIKLING_FAQ, WEBSITE_PACKAGES } from '../../v2/v2-data';
import { applyV2Seo } from '../../v2/v2-seo';

@Component({
  selector: 'app-utvikling',
  templateUrl: './utvikling.component.html',
  standalone: true,
  imports: [...V2_BLOCKS],
})
export class UtviklingComponent implements OnInit {
  constructor(private seo: SeoService) {}

  faq = UTVIKLING_FAQ;
  packages = [...WEBSITE_PACKAGES, PROGRAMVARE_CARD];

  hjemmesideText = [
    'Uavhengig av industri, er en bedrifts online tilstedeværelse, altså nettsiden, bærekraften for suksess. En nettside består selvfølgelig av flere organ, men selve hjertet ligger i hjemmesiden. Det er på hjemmesiden du formidler visjonen, målet, spesialiteten, tjenestene, historien og stemmen til bedriften din. Her får kundene dine dannet seg et samlet bilde av profesjonalitet, verdier, arbeidsmetoder og identitet.',
    'Som de fleste, har du sikkert besøkt mange nettsider på utkikk etter diverse tjenester. Kanskje var det en restaurant du søkte menyen til, men nettsiden deres manglet den. Eller var det klær du skulle kjøpe, men nettsiden var så dårlig utformet at du ikke turte bestille?',
    'En nettside skal enkelt sagt fungere som en presis presentasjon av din bedrift. Alt dine kunder måtte være på jakt etter skal være lett tilgjengelig. Dersom hjemmesiden din er laget slik at viktig informasjon som tjenester, åpningstider og ofte stilte spørsmål er lett tilgjengelig, slipper du den samme telefonsamtalen flere ganger. Hjemmesiden alene vil selvfølgelig ikke dyrke tillit og vekst, men en profesjonell og komplett nettside vil.',
    'En velbygget nettside kommer med flere verdifulle gevinster, som:',
  ];

  programvareText = [
    'En programvare er fellesbetegnelse for flere tjenester som sammen betjener en digital plattform. I dag er det gode muligheter for å få utviklet din egen skreddersydde programvare som har gode løsninger til de utfordringene og kravene din bedrift har.',
    'Vi kjenner fra erfaring at de fleste som driver bedrifter bruker programvare som ikke er helt optimal: et POS-system i restauranten som ikke fungerer godt, et dyrt CRM-system som er lite oversiktlig, eller et KS-system i bygg- og anleggsbransjen som er vanskelig å bruke og ikke gir deg dokumentasjonen du trenger. Vi i Moderna kan tilby deg din egen skreddersydde løsning, slik at du får maks ut av driften.',
    'En god programvare:',
  ];

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/tjenester/bedrift/utvikling',
      title: SeoUtils.TjenesterUtvikling.title,
      description: SeoUtils.TjenesterUtvikling.description,
      crumbs: [
        { name: 'Tjenester', path: '/tjenester' },
        { name: 'Utvikling', path: '/tjenester/bedrift/utvikling' },
      ],
      faq: UTVIKLING_FAQ,
      service: { name: 'Nettsider og programvare for bedrifter', description: SeoUtils.TjenesterUtvikling.description, lowPrice: 25000 },
    });
  }
}
