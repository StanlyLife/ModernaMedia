// Presentational building blocks for the V2 pages. Styling lives in src/scss/_v2.scss.
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { V2IconComponent } from './v2-icon.component';
import { V2LeadFormComponent } from './v2-lead-form.component';
import { ADDRESS, EMAIL, FaqEntry, IMG, PHONE, PHONE_HREF, PriceCardData, PROCESS_STEPS, TESTIMONIALS } from './v2-data';

const CONTENTS = { style: 'display:contents' };

@Component({
  selector: 'v2-proof',
  standalone: true,
  imports: [V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <div class="proof">
      <div class="avatars">
        <img src="${IMG}kunde-svein-magnar-96.webp" width="44" height="44" alt="Svein Magnar, Sola Parkering" />
        <img src="${IMG}kunde-patrik-96.webp" width="44" height="44" alt="Patrik, Marbella Car Spa" />
        <img src="${IMG}kunde-ena-96.webp" width="44" height="44" alt="Ena Hasanović, Fjerdingby Pizza & Grill" />
      </div>
      <div>
        <span class="stars" aria-label="5 av 5 stjerner">@for (s of [1, 2, 3, 4, 5]; track s) {<v2-icon name="star" />}</span>
        <p><b>50+ bedrifter</b> har valgt oss{{ extra() }}</p>
      </div>
    </div>
  `,
})
export class V2ProofComponent {
  extra = input('');
}

@Component({
  selector: 'v2-trust',
  standalone: true,
  imports: [V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section class="trust" aria-label="Hvorfor velge oss">
      <div class="wrap">
        <div class="stats">
          @for (s of stats; track s[1]) {
            <div class="stat"><span class="ic"><v2-icon [name]="s[0]" /></span><div><b>{{ s[1] }}</b><small>{{ s[2] }}</small></div></div>
          }
        </div>
        <div class="clients">Blant kundene våre: <b>Sola Parkering</b><b>Marbella Car Spa</b><b>Fjerdingby Pizza &amp; Grill</b><b>Østlandet Brønnboring</b></div>
      </div>
    </section>
  `,
})
export class V2TrustComponent {
  stats = [
    ['users', '50+', 'bedrifter har valgt oss'],
    ['shield', '100 %', 'fornøyd-garanti'],
    ['tag', 'Fast pris', 'før vi starter'],
    ['clock', '< 2 timer', 'svartid på henvendelser'],
  ];
}

@Component({
  selector: 'v2-tcard',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    @let t = data();
    <article class="tcard">
      <div class="img">
        <img [src]="img + t.img + '-650.webp'" [attr.srcset]="img + t.img + '-650.webp 650w, ' + img + t.img + '-1300.webp 1300w'" sizes="(max-width: 1000px) 100vw, 620px" width="650" height="400" loading="lazy" decoding="async" [alt]="t.company" />
        <span class="co">{{ t.company }}</span>
      </div>
      <div class="b">
        <div class="metric"><b class="gt">{{ t.metric }}</b><span>{{ t.metricLabel }}</span></div>
        <span class="stars" aria-label="5 av 5 stjerner">@for (s of [1, 2, 3, 4, 5]; track s) {<v2-icon name="star" />}</span>
        <p class="quote">«{{ t.quote }}»</p>
        <div class="person">
          @if (t.person) {
            <img [src]="img + t.person" width="46" height="46" loading="lazy" [alt]="t.name" />
          } @else {
            <span class="ini" aria-hidden="true">{{ t.initials }}</span>
          }
          <p><b>{{ t.name }}</b>{{ t.role }}, {{ t.company }}</p>
          <a class="link" [routerLink]="t.caseStudy">Les casestudien <v2-icon name="arrow" /></a>
        </div>
      </div>
    </article>
  `,
})
export class V2TestimonialCardComponent {
  key = input.required<string>();
  data = computed(() => TESTIMONIALS[this.key()]);
  img = IMG;
}

@Component({
  selector: 'v2-case',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:block' },
  template: `
    @let t = data();
    <div class="case">
      <img [src]="img + t.img + '-1300.webp'" width="1300" height="800" loading="lazy" decoding="async" [alt]="t.company" />
      <div class="b">
        <span class="kicker">{{ kicker() }}</span>
        <h3>{{ title() }}</h3>
        <div class="metrics">
          @for (m of metrics(); track m[1]) {
            <div><b class="gt">{{ m[0] }}</b><span>{{ m[1] }}</span></div>
          }
        </div>
        <p class="quote">«{{ t.quote }}»</p>
        <div class="person">
          @if (t.person) {
            <img [src]="img + t.person" width="46" height="46" loading="lazy" [alt]="t.name" />
          } @else {
            <span class="ini" aria-hidden="true">{{ t.initials }}</span>
          }
          <p><b>{{ t.name }}</b>{{ t.role }}, {{ t.company }}</p>
          <a class="link" [routerLink]="t.caseStudy">Les hele casestudien <v2-icon name="arrow" /></a>
        </div>
      </div>
    </div>
  `,
})
export class V2CaseFeatureComponent {
  key = input.required<string>();
  kicker = input('Kundehistorie');
  title = input.required<string>();
  metrics = input<string[][]>([]);
  data = computed(() => TESTIMONIALS[this.key()]);
  img = IMG;
}

@Component({
  selector: 'v2-process',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section [class.soft]="soft()" aria-labelledby="process-title">
      <div class="wrap">
        <div class="head center">
          <span class="kicker">Enkel prosess</span>
          <h2 class="h2" id="process-title">Hvordan det fungerer</h2>
          <p class="lead">Fra første kontakt til lansering – vi gjør prosessen enkel og oversiktlig.</p>
        </div>
        <div class="steps">
          @for (s of steps; track s[0]; let i = $index) {
            <div class="step"><div class="num"><span class="gn">0{{ i + 1 }}</span></div><h3>{{ s[0] }}</h3><p>{{ s[1] }}</p></div>
          }
        </div>
        <div class="after">
          <a class="btn btn-primary" [routerLink]="[]" fragment="kontakt">{{ cta() }} <v2-icon name="arrow" /></a>
          <small><v2-icon name="clock" /> Vi svarer vanligvis innen 2 timer</small>
        </div>
      </div>
    </section>
  `,
})
export class V2ProcessComponent {
  cta = input('Book et uforpliktende møte');
  soft = input(true);
  steps = PROCESS_STEPS;
}

@Component({
  selector: 'v2-faq',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section class="faq" [class.soft]="soft()" id="faq" aria-labelledby="faq-title">
      <div class="wrap">
        <div class="side">
          <span class="kicker">Ofte stilte spørsmål</span>
          <h2 class="h2" id="faq-title">{{ title() }}</h2>
          <p>{{ intro() }}</p>
          <div class="ask">
            <b>Fant du ikke svaret?</b>
            <p>Ring oss på {{ phone }} eller send en melding – vi svarer vanligvis innen 2 timer.</p>
            <a class="btn btn-primary btn-sm" [routerLink]="[]" fragment="kontakt">Still et spørsmål <v2-icon name="arrow" /></a>
          </div>
        </div>
        <div>
          @for (q of items(); track q.question; let i = $index) {
            <details class="qa" [open]="i < open()">
              <summary><h3>{{ q.question }}</h3><i></i></summary>
              <p class="a">
                {{ q.answer }}
                @if (q.link) {
                  <a [routerLink]="q.link.href">{{ q.link.label }} →</a>
                }
              </p>
            </details>
          }
        </div>
      </div>
    </section>
  `,
})
export class V2FaqComponent {
  title = input.required<string>();
  intro = input('');
  items = input.required<FaqEntry[]>();
  soft = input(true);
  open = input(2);
  phone = PHONE;
}

@Component({
  selector: 'v2-contact',
  standalone: true,
  imports: [V2IconComponent, V2LeadFormComponent, V2ProofComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section class="contact" id="kontakt" aria-labelledby="contact-title">
      <div class="wrap">
        <div>
          <span class="kicker">Kontakt oss, 100 % uforpliktende!</span>
          <h2 id="contact-title">{{ title() }}</h2>
          <p class="lead">Vi vil svare på meldingen din så raskt som mulig. Dersom du skriver inn telefonnummeret ditt vil vi sende deg en bekreftelse på mottatt melding.</p>
          <div class="cinfo">
            <a [href]="phoneHref"><span class="ic"><v2-icon name="phone" /></span><span><small>Telefon</small>{{ phone }}</span></a>
            <a [href]="'mailto:' + email"><span class="ic"><v2-icon name="mail" /></span><span><small>E-post</small>{{ email }}</span></a>
            <a href="https://maps.google.com/?q=Oscars+gate+76b,+Oslo" target="_blank" rel="noopener"><span class="ic"><v2-icon name="pin" /></span><span><small>Besøksadresse</small>{{ address }}</span></a>
          </div>
          <v2-proof extra=" · svar innen 2 timer" />
        </div>
        <v2-lead-form title="Send oss en melding" sub="Velg hva det gjelder og fortell kort om prosjektet ditt." messageLabel="Melding" button="Send melding" [preselect]="preselect()" [source]="'Kontakt – ' + source()" />
      </div>
    </section>
  `,
})
export class V2ContactComponent {
  title = input('Hvordan kan vi hjelpe deg?');
  preselect = input('');
  source = input('nettsiden');
  phone = PHONE;
  phoneHref = PHONE_HREF;
  email = EMAIL;
  address = ADDRESS;
}

export interface Crumb {
  label: string;
  link?: string;
}

@Component({
  selector: 'v2-crumbs',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <nav class="crumbs" aria-label="Brødsmuler">
      <a routerLink="/">Forside</a>
      @for (c of items(); track c.label; let last = $last) {
        <v2-icon name="right" />
        @if (c.link && !last) {
          <a [routerLink]="c.link">{{ c.label }}</a>
        } @else {
          <b aria-current="page">{{ c.label }}</b>
        }
      }
    </nav>
  `,
})
export class V2CrumbsComponent {
  items = input.required<Crumb[]>();
}

export interface HeroImage {
  src: string;
  srcset?: string;
}

@Component({
  selector: 'v2-svc-hero',
  standalone: true,
  imports: [RouterLink, V2IconComponent, V2LeadFormComponent, V2CrumbsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section class="hero">
      <div class="bg"><img [src]="bg().src" [attr.srcset]="bg().srcset || null" sizes="100vw" width="1920" height="1080" fetchpriority="high" alt="" /></div>
      <div class="wrap">
        <div>
          <v2-crumbs [items]="crumbs()" />
          <span class="pill"><span>{{ pill()[0] }}</span>{{ pill()[1] }}</span>
          <h1>{{ h1() }}&ngsp;<span class="gt">{{ gt() }}</span></h1>
          <p class="sub">{{ sub() }}</p>
          <div class="checks">
            @for (c of checks(); track c) {
              <span class="check"><span class="tick"><v2-icon name="check" /></span>{{ c }}</span>
            }
          </div>
          <div class="cta-row">
            <a class="btn btn-primary" [routerLink]="[]" fragment="kontakt">{{ primary() }} <v2-icon name="arrow" /></a>
            @if (secondaryLink()) {
              <a class="btn btn-ghost" [routerLink]="secondaryLink()">{{ secondaryLabel() }}</a>
            } @else {
              <a class="btn btn-ghost" [routerLink]="[]" fragment="priser">{{ secondaryLabel() }}</a>
            }
          </div>
          @if (anchors().length) {
            <nav class="anchors" aria-label="På denne siden">
              <span>På denne siden:</span>
              @for (a of anchors(); track a[1]) {
                <a [routerLink]="[]" [fragment]="a[1]">{{ a[0] }}</a>
              }
            </nav>
          }
        </div>
        <v2-lead-form [title]="formTitle()" [sub]="formSub()" [preselect]="preselect()" [messageLabel]="formMessage()" [button]="formButton()" [source]="source()" />
      </div>
    </section>
  `,
})
export class V2ServiceHeroComponent {
  crumbs = input.required<Crumb[]>();
  pill = input.required<string[]>();
  h1 = input.required<string>();
  gt = input('for bedrifter');
  sub = input.required<string>();
  checks = input<string[]>([]);
  primary = input('Få pristilbud');
  secondaryLabel = input('Se priser');
  /** Route for the secondary button; without it the button scrolls to #priser. */
  secondaryLink = input('');
  bg = input.required<HeroImage>();
  anchors = input<string[][]>([]);
  formTitle = input('Få et uforpliktende pristilbud');
  formSub = input('Fortell oss kort hva du trenger, så svarer vi vanligvis innen 2 timer.');
  formMessage = input('Kort om prosjektet (valgfritt)');
  formButton = input('Få pristilbud');
  preselect = input('Nettside');
  source = input('Pristilbud');
}

/** Compact dark hero for content pages (Tjenester, Priser, Blogg, articles …). */
@Component({
  selector: 'v2-page-hero',
  standalone: true,
  imports: [V2CrumbsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section class="hero compact">
      @if (bg()) {
        <div class="bg"><img [src]="bg()" sizes="100vw" width="1920" height="1080" fetchpriority="high" alt="" /></div>
      }
      <div class="wrap">
        <div>
          <v2-crumbs [items]="crumbs()" />
          @if (pill().length) {
            <span class="pill"><span>{{ pill()[0] }}</span>{{ pill()[1] }}</span>
          }
          <h1>{{ h1() }}@if (gt()) {&ngsp;<span class="gt">{{ gt() }}</span>}</h1>
          <p class="sub">{{ sub() }}</p>
          <ng-content />
        </div>
      </div>
    </section>
  `,
})
export class V2PageHeroComponent {
  crumbs = input.required<Crumb[]>();
  pill = input<string[]>([]);
  h1 = input.required<string>();
  gt = input('');
  sub = input('');
  bg = input('');
}

@Component({
  selector: 'v2-svc-card',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <a class="svc" [routerLink]="link()">
      @if (img()) {
        <img [src]="img()" width="840" height="560" loading="lazy" decoding="async" alt="" />
      }
      <div class="b">
        @if (icon()) {
          <div class="ico"><img [src]="icon()" width="30" height="30" alt="" /></div>
        }
        @if (tag()) {
          <span class="tag">{{ tag() }}</span>
        }
        <h3>{{ title() }}</h3>
        <p>{{ text() }}</p>
        @if (list().length) {
          <ul>
            @for (l of list(); track l) {
              <li><span class="tick"><v2-icon name="check" /></span>{{ l }}</li>
            }
          </ul>
        }
        <div class="price">
          @if (price()) {
            <small>Fra</small><b>{{ price() }}</b><small>{{ per() }}</small>
          }
        </div>
        <span class="link">{{ linkLabel() }} <v2-icon name="arrow" /></span>
      </div>
    </a>
  `,
})
export class V2SvcCardComponent {
  img = input('');
  icon = input('');
  tag = input('');
  title = input.required<string>();
  text = input.required<string>();
  list = input<string[]>([]);
  price = input('');
  per = input('eks. mva');
  link = input.required<string>();
  linkLabel = input('Les mer');
}

@Component({
  selector: 'v2-pcard',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    @let p = data();
    <div class="pcard" [class.feat]="!!p.badge && featured()">
      @if (p.badge && featured()) {
        <span class="badge">{{ p.badge }}</span>
      }
      <h3 class="pn">{{ p.name }}</h3>
      <p class="pd">{{ p.description }}</p>
      <div class="pp"><small>Fra</small><b>{{ p.price }}</b>@if (p.per) {<small>{{ p.per }}</small>}</div>
      <p class="vat">eks. mva</p>
      <ul>
        @for (l of p.list; track l) {
          <li><span class="tick"><v2-icon name="check" /></span>{{ l }}</li>
        }
      </ul>
      @if (p.note) {
        <p class="note">{{ p.note }}</p>
      }
      @if (p.fit) {
        <p class="fit">{{ p.fit }}</p>
      }
      <a class="btn btn-block" [class.btn-primary]="!!p.badge && featured()" [class.btn-outline]="!(p.badge && featured())" [routerLink]="[]" fragment="kontakt">Få pristilbud</a>
      @if (p.more && showMore()) {
        <p class="more-link"><a class="link" [routerLink]="p.more.href">{{ p.more.label }} <v2-icon name="arrow" /></a></p>
      }
    </div>
  `,
})
export class V2PriceCardComponent {
  data = input.required<PriceCardData>();
  featured = input(true);
  showMore = input(false);
}

@Component({
  selector: 'v2-assure',
  standalone: true,
  imports: [V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <div class="assure">
      @for (a of items; track a) {
        <span><v2-icon name="check" />{{ a }}</span>
      }
    </div>
  `,
})
export class V2AssureComponent {
  items = ['Fast pris før oppstart', 'Alle priser eks. mva', '100 % fornøyd-garanti', 'Svar innen 2 timer'];
}

@Component({
  selector: 'v2-price-band',
  standalone: true,
  imports: [RouterLink, V2IconComponent, V2AssureComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section id="priser" [class.soft]="soft()" aria-labelledby="price-title">
      <div class="wrap">
        <div class="head center">
          <span class="kicker">Priser</span>
          <h2 class="h2" id="price-title">{{ title() }}</h2>
          <p class="lead">Veiledende priser, oppgitt eks. mva. Du får alltid en fast pris før vi starter.</p>
        </div>
        <div class="priceband">
          <div class="pbox main">
            <span class="fc-badge"><i></i>{{ badge() }}</span>
            <h3 style="margin-top: 16px">{{ name() }}</h3>
            <div class="pp"><small>Fra</small><b>{{ price() }}</b><small>{{ per() }} eks. mva</small></div>
            <ul>
              @for (l of list(); track l) {
                <li><span class="tick"><v2-icon name="check" /></span>{{ l }}</li>
              }
            </ul>
            <div class="cta-row">
              <a class="btn btn-primary" [routerLink]="[]" fragment="kontakt">{{ cta() }} <v2-icon name="arrow" /></a>
              <a class="btn btn-outline" [routerLink]="cta2Link()">{{ cta2() }}</a>
            </div>
            <p class="small">Du får alltid en fast pris før vi starter – uten skjulte kostnader.</p>
          </div>
          <div class="pbox">
            <h3>Hva påvirker prisen?</h3>
            <div class="factors">
              @for (f of factors(); track f[0]; let i = $index) {
                <div><span class="n">{{ i + 1 }}</span><div><b>{{ f[0] }}</b><p>{{ f[1] }}</p></div></div>
              }
            </div>
          </div>
        </div>
        <v2-assure />
      </div>
    </section>
  `,
})
export class V2PriceBandComponent {
  title = input.required<string>();
  badge = input.required<string>();
  name = input.required<string>();
  price = input.required<string>();
  per = input('');
  list = input<string[]>([]);
  cta = input('Få pristilbud');
  cta2 = input('Se alle priser');
  cta2Link = input('/priser');
  factors = input<string[][]>([]);
  soft = input(false);
}

@Component({
  selector: 'v2-info',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    <section class="info" [class.soft]="soft()" [class.rev]="rev()" [id]="anchor()">
      <div class="wrap">
        <div class="media">
          <img [src]="img()" width="1040" height="1200" loading="lazy" decoding="async" [alt]="alt()" />
          @if (fact().length) {
            <div class="fact"><b class="gt">{{ fact()[0] }}</b><p>{{ fact()[1] }}</p></div>
          }
        </div>
        <div class="txt">
          <span class="kicker">{{ kicker() }}</span>
          <h2>{{ title() }}</h2>
          @for (t of text(); track $index) {
            <p>{{ t }}</p>
          }
          @if (list().length) {
            <ul>
              @for (l of list(); track l) {
                <li><span class="tick"><v2-icon name="check" /></span>{{ l }}</li>
              }
            </ul>
          }
          @for (t of after(); track $index) {
            <p>{{ t }}</p>
          }
          <div class="cta-row">
            <a class="btn btn-primary" [routerLink]="link()">{{ linkLabel() }} <v2-icon name="arrow" /></a>
            <a class="btn btn-outline" [routerLink]="[]" fragment="kontakt">Få pristilbud</a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class V2InfoComponent {
  anchor = input.required<string>();
  img = input.required<string>();
  alt = input('');
  kicker = input.required<string>();
  title = input.required<string>();
  text = input<string[]>([]);
  list = input<string[]>([]);
  after = input<string[]>([]);
  link = input.required<string>();
  linkLabel = input.required<string>();
  fact = input<string[]>([]);
  soft = input(false);
  rev = input(false);
}

export interface PostCard {
  url: string;
  title: string;
  description: string;
  img: string;
  category: string;
  date: string;
}

@Component({
  selector: 'v2-post-card',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: CONTENTS,
  template: `
    @let p = post();
    <a class="post" [routerLink]="p.url">
      <img [src]="p.img" width="720" height="420" loading="lazy" decoding="async" alt="" />
      <div class="b">
        <div class="meta"><span class="cat">{{ p.category }}</span><span>{{ p.date }}</span></div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.description }}</p>
        <span class="link">Les artikkelen <v2-icon name="arrow" /></span>
      </div>
    </a>
  `,
})
export class V2PostCardComponent {
  post = input.required<PostCard>();
}

export const V2_BLOCKS = [
  V2IconComponent,
  V2ProofComponent,
  V2TrustComponent,
  V2TestimonialCardComponent,
  V2CaseFeatureComponent,
  V2ProcessComponent,
  V2FaqComponent,
  V2ContactComponent,
  V2CrumbsComponent,
  V2ServiceHeroComponent,
  V2PageHeroComponent,
  V2SvcCardComponent,
  V2PriceCardComponent,
  V2AssureComponent,
  V2PriceBandComponent,
  V2InfoComponent,
  V2PostCardComponent,
  V2LeadFormComponent,
] as const;
