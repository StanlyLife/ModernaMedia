import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { applyV2Seo } from '../v2-seo';

@Component({
  selector: 'app-v2-personvern',
  standalone: true,
  imports: [...V2_BLOCKS],
  template: `
    <div class="v2">
      <v2-page-hero [crumbs]="[{ label: 'Personvern' }]" h1="Personvernerklæring" sub="Slik behandler vi personopplysningene dine." />
      <section>
        <div class="wrap">
          <div class="legal">
            <p><b>Sist oppdatert: 7. oktober 2026</b></p>

            <h2>Hvem er ansvarlig?</h2>
            <p>
              Moderna Media (org.nr. 926 670 018) er behandlingsansvarlig for personopplysningene som samles inn via modernamedia.no. Har du spørsmål om personvern, kan du kontakte oss på
              <a href="mailto:kontakt@modernamedia.no">kontakt&#64;modernamedia.no</a> eller <a href="tel:+4790265326">902 65 326</a>.
            </p>

            <h2>Hvilke opplysninger samler vi inn?</h2>
            <p>
              Når du sender oss en melding, ber om pristilbud eller bestiller en analyse, lagrer vi navnet ditt, e-postadressen din, telefonnummeret ditt (hvis du oppgir det), adressen til
              nettsiden din (ved analyse) og det du skriver i meldingen.
            </p>
            <p>Vi samler også inn statistikk om hvordan nettsiden brukes, for eksempel hvilke sider som besøkes og hvor de besøkende kommer fra.</p>

            <h2>Hva bruker vi opplysningene til?</h2>
            <p>
              Vi bruker opplysningene til å svare på henvendelsen din, sende deg et tilbud og følge opp et eventuelt samarbeid. Statistikk bruker vi til å gjøre nettsiden og markedsføringen
              vår bedre. Vi selger aldri personopplysninger videre.
            </p>

            <h2>Behandlingsgrunnlag</h2>
            <p>
              Opplysninger fra kontaktskjemaene behandler vi for å kunne svare på forespørselen din og eventuelt inngå avtale med deg (GDPR art. 6 nr. 1 bokstav b). Statistikk om bruken av
              nettsiden behandler vi ut fra vår berettigede interesse i å forbedre nettsiden og markedsføringen (art. 6 nr. 1 bokstav f).
            </p>

            <h2>Hvor lenge lagrer vi opplysningene?</h2>
            <p>
              Henvendelser som ikke fører til et samarbeid, sletter vi når vi ikke lenger trenger dem. Opplysninger knyttet til kundeforhold lagrer vi så lenge det er nødvendig, og så
              lenge bokføringsloven krever.
            </p>

            <h2>Hvem deler vi opplysningene med?</h2>
            <p>
              Vi bruker leverandører til drift av nettsiden, mottak av skjemaer (Formspark), e-post og statistikk (Google Analytics og Meta). De behandler opplysningene på våre vegne.
            </p>

            <h2>Informasjonskapsler (cookies)</h2>
            <p>
              Nettsiden bruker informasjonskapsler for at den skal fungere, og for statistikk og måling av markedsføring (Google Analytics og Meta). Du kan slette eller blokkere
              informasjonskapsler i innstillingene i nettleseren din.
            </p>

            <h2>Dine rettigheter</h2>
            <p>
              Du har rett til innsyn i, retting av og sletting av opplysningene dine. Send oss en e-post på <a href="mailto:kontakt@modernamedia.no">kontakt&#64;modernamedia.no</a>, så
              hjelper vi deg.
            </p>
            <p>Mener du at vi ikke behandler opplysningene dine riktig, kan du klage til <a href="https://www.datatilsynet.no" target="_blank" rel="noopener">Datatilsynet</a>.</p>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class PersonvernPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/personvern',
      title: 'Personvernerklæring | Moderna Media',
      description: 'Slik behandler Moderna Media personopplysningene dine: hva vi samler inn, hvorfor, hvor lenge vi lagrer dem og hvilke rettigheter du har.',
      crumbs: [{ name: 'Personvern', path: '/personvern' }],
    });
  }
}
