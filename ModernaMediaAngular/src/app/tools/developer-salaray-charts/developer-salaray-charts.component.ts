import { CommonModule, formatDate, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  DOCUMENT,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SeoService } from 'src/app/services/seo.service';
import { AuthorComponent } from '../../components/author/author.component';
import { WindowRefService } from './../../services/window-ref.service';

@Component({
  selector: 'app-developer-salaray-charts',
  templateUrl: './developer-salaray-charts.component.html',
  styleUrls: ['./developer-salaray-charts.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxChartsModule, AuthorComponent],
})
export class DeveloperSalarayChartsComponent implements OnInit {
  DeveloperSalaryReady = false;
  RespondantsByAge: any[] = [
    {
      name: '20-24 år',
      value: 124,
    },
    {
      name: '25-29 år',
      value: 443,
    },
    {
      name: '30-34 år',
      value: 393,
    },
    {
      name: '40-44 år',
      value: 168,
    },
    {
      name: '35-39 år',
      value: 262,
    },
    {
      name: '45-50 år',
      value: 96,
    },
    {
      name: '50+ år',
      value: 43,
    },
  ];
  RespondantsByLocation: any[] = [
    {
      name: 'Oslo',
      value: 811,
    },
    {
      name: 'Vestland',
      value: 150,
    },
    {
      name: 'Trøndelag',
      value: 134,
    },
    {
      name: 'Viken',
      value: 114,
    },
    {
      name: 'Rogaland',
      value: 88,
    },
    {
      name: 'annet',
      value: 79,
    },
    {
      name: 'Vestfold og Telemark',
      value: 66,
    },
    {
      name: 'Agder',
      value: 52,
    },
    {
      name: 'Møre og Romsdal',
      value: 35,
    },
  ];
  RespondantsByAgeByLocation: any[] = [
    {
      name: 'annet',
      series: [
        {
          name: '20-24 år',
          value: 14,
        },
        {
          name: '25-29 år',
          value: 16,
        },
        {
          name: '30-34 år',
          value: 20,
        },
        {
          name: '35-39 år',
          value: 10,
        },
        {
          name: '45-50 år',
          value: 8,
        },
        {
          name: '40-44 år',
          value: 7,
        },
        {
          name: '50+ år',
          value: 4,
        },
      ],
    },
    {
      name: 'Trøndelag',
      series: [
        {
          name: '20-24 år',
          value: 9,
        },
        {
          name: '25-29 år',
          value: 45,
        },
        {
          name: '30-34 år',
          value: 36,
        },
        {
          name: '35-39 år',
          value: 17,
        },
        {
          name: '40-44 år',
          value: 18,
        },
        {
          name: '45-50 år',
          value: 6,
        },
        {
          name: '50+ år',
          value: 3,
        },
      ],
    },
    {
      name: 'Oslo',
      series: [
        {
          name: '25-29 år',
          value: 273,
        },
        {
          name: '20-24 år',
          value: 62,
        },
        {
          name: '30-34 år',
          value: 204,
        },
        {
          name: '35-39 år',
          value: 136,
        },
        {
          name: '50+ år',
          value: 19,
        },
        {
          name: '40-44 år',
          value: 72,
        },
        {
          name: '45-50 år',
          value: 45,
        },
      ],
    },
    {
      name: 'Vestfold og Telemark',
      series: [
        {
          name: '25-29 år',
          value: 11,
        },
        {
          name: '20-24 år',
          value: 3,
        },
        {
          name: '30-34 år',
          value: 20,
        },
        {
          name: '40-44 år',
          value: 10,
        },
        {
          name: '35-39 år',
          value: 15,
        },
        {
          name: '50+ år',
          value: 2,
        },
        {
          name: '45-50 år',
          value: 5,
        },
      ],
    },
    {
      name: 'Vestland',
      series: [
        {
          name: '25-29 år',
          value: 30,
        },
        {
          name: '20-24 år',
          value: 18,
        },
        {
          name: '30-34 år',
          value: 41,
        },
        {
          name: '45-50 år',
          value: 7,
        },
        {
          name: '40-44 år',
          value: 23,
        },
        {
          name: '35-39 år',
          value: 27,
        },
        {
          name: '50+ år',
          value: 4,
        },
      ],
    },
    {
      name: 'Agder',
      series: [
        {
          name: '30-34 år',
          value: 17,
        },
        {
          name: '25-29 år',
          value: 13,
        },
        {
          name: '35-39 år',
          value: 12,
        },
        {
          name: '20-24 år',
          value: 2,
        },
        {
          name: '50+ år',
          value: 1,
        },
        {
          name: '45-50 år',
          value: 2,
        },
        {
          name: '40-44 år',
          value: 5,
        },
      ],
    },
    {
      name: 'Rogaland',
      series: [
        {
          name: '20-24 år',
          value: 6,
        },
        {
          name: '25-29 år',
          value: 31,
        },
        {
          name: '35-39 år',
          value: 11,
        },
        {
          name: '30-34 år',
          value: 23,
        },
        {
          name: '40-44 år',
          value: 8,
        },
        {
          name: '50+ år',
          value: 1,
        },
        {
          name: '45-50 år',
          value: 8,
        },
      ],
    },
    {
      name: 'Viken',
      series: [
        {
          name: '40-44 år',
          value: 18,
        },
        {
          name: '20-24 år',
          value: 7,
        },
        {
          name: '30-34 år',
          value: 23,
        },
        {
          name: '35-39 år',
          value: 29,
        },
        {
          name: '25-29 år',
          value: 19,
        },
        {
          name: '45-50 år',
          value: 11,
        },
        {
          name: '50+ år',
          value: 7,
        },
      ],
    },
    {
      name: 'Møre og Romsdal',
      series: [
        {
          name: '30-34 år',
          value: 9,
        },
        {
          name: '25-29 år',
          value: 5,
        },
        {
          name: '20-24 år',
          value: 3,
        },
        {
          name: '35-39 år',
          value: 5,
        },
        {
          name: '40-44 år',
          value: 7,
        },
        {
          name: '45-50 år',
          value: 4,
        },
        {
          name: '50+ år',
          value: 2,
        },
      ],
    },
  ];
  ValueSalaryByAge: any[] = [
    {
      name: '20-24 år',
      value: '551715',
      response: 124,
    },
    {
      name: '25-29 år',
      value: '630713',
      response: 443,
    },
    {
      name: '30-34 år',
      value: '719675',
      response: 393,
    },
    {
      name: '35-39 år',
      value: '808839',
      response: 262,
    },
    {
      name: '40-44 år',
      value: '852715',
      response: 168,
    },
    {
      name: '45-50 år',
      value: '858629',
      response: 96,
    },
    {
      name: '50+ år',
      value: '892928',
      response: 43,
    },
  ];
  ValueSalaryByWork: any[] = [
    {
      name: 'arkitekt',
      value: '960500',
      response: 10,
    },
    {
      name: 'ledelse/administrativt',
      value: '901004',
      response: 57,
    },
    {
      name: 'databaser',
      value: '839722',
      response: 18,
    },
    {
      name: 'embedded/IOT/maskinvare',
      value: '768173',
      response: 19,
    },
    {
      name: 'backend',
      value: '761217',
      response: 315,
    },
    {
      name: 'devops',
      value: '756702',
      response: 64,
    },
    {
      name: 'maskinlæring',
      value: '740000',
      response: 4,
    },
    {
      name: 'app',
      value: '725172',
      response: 57,
    },
    {
      name: 'data science',
      value: '721958',
      response: 12,
    },
    {
      name: 'annet',
      value: '710165',
      response: 23,
    },
    {
      name: 'fullstack',
      value: '705720',
      response: 593,
    },
    {
      name: 'automatisering',
      value: '692185',
      response: 27,
    },
    {
      name: 'test',
      value: '678400',
      response: 5,
    },
    {
      name: 'programvare',
      value: '677373',
      response: 49,
    },
    {
      name: 'sikkerhet',
      value: '675265',
      response: 17,
    },
    {
      name: 'frontend',
      value: '669706',
      response: 235,
    },
    {
      name: 'UX / design',
      value: '660229',
      response: 24,
    },
  ];
  ValueSalaryIncrease: any[] = [
    { name: '20-24 år', value: '33882' },
    { name: '25-29 år', value: '17839' },
    { name: '30-34 år', value: '31538' },
    { name: '35-39 år', value: '44819' },
    { name: '40-44 år', value: '40437' },
  ];
  ValueSalaryIncreasePercent: any[] = [
    { name: '20-24 år', value: '6.5' },
    { name: '25-29 år', value: '2.9' },
    { name: '30-34 år', value: '4.6' },
    { name: '35-39 år', value: '5.9' },
    { name: '40-44 år', value: '5.0' },
  ];

  ValueSalary21vs20: any[] = [
    {
      name: '20-24 år',
      series: [
        {
          name: '2020',
          value: '517833',
        },
        {
          name: '2021',
          value: '551715',
        },
      ],
    },
    {
      name: '25-29 år',
      series: [
        {
          name: '2020',
          value: '612874',
        },
        {
          name: '2021',
          value: '630713',
        },
      ],
    },
    {
      name: '30-34 år',
      series: [
        {
          name: '2020',
          value: '688137',
        },
        {
          name: '2021',
          value: '719675',
        },
      ],
    },
    {
      name: '35-39 år',
      series: [
        {
          name: '2020',
          value: '764020',
        },
        {
          name: '2021',
          value: '808839',
        },
      ],
    },
    {
      name: '40-44 år',
      series: [
        {
          name: '2020',
          value: '812278',
        },
        {
          name: '2021',
          value: '852715',
        },
      ],
    },
    {
      name: '45-50 år',
      series: [
        {
          name: '2020',
          value: '926323',
        },
        {
          name: '2021',
          value: '858629',
        },
      ],
    },
    {
      name: '50+ år',
      series: [
        {
          name: '2021',
          value: '892928',
        },
      ],
    },
  ];
  RespondantsByAgeByBonus: any[] = [
    {
      name: '20-24 år',
      series: [
        {
          name: 'Ja',
          value: 53,
        },
        {
          name: 'Nei',
          value: 71,
        },
      ],
    },
    {
      name: '25-29 år',
      series: [
        {
          name: 'Nei',
          value: 233,
        },
        {
          name: 'Ja',
          value: 210,
        },
      ],
    },
    {
      name: '30-34 år',
      series: [
        {
          name: 'Nei',
          value: 252,
        },
        {
          name: 'Ja',
          value: 141,
        },
      ],
    },
    {
      name: '40-44 år',
      series: [
        {
          name: 'Nei',
          value: 109,
        },
        {
          name: 'Ja',
          value: 59,
        },
      ],
    },
    {
      name: '35-39 år',
      series: [
        {
          name: 'Nei',
          value: 152,
        },
        {
          name: 'Ja',
          value: 110,
        },
      ],
    },
    {
      name: '45-50 år',
      series: [
        {
          name: 'Ja',
          value: 40,
        },
        {
          name: 'Nei',
          value: 56,
        },
      ],
    },
    {
      name: '50+ år',
      series: [
        {
          name: 'Ja',
          value: 22,
        },
        {
          name: 'Nei',
          value: 21,
        },
      ],
    },
  ];
  RespondantsBySectorByBonus: any[] = [
    {
      name: 'ikke oppgitt',
      series: [
        {
          name: 'Ja',
          value: 240,
        },
        {
          name: 'Nei',
          value: 299,
        },
      ],
    },
    {
      name: 'privat',
      series: [
        {
          name: 'Ja',
          value: 393,
        },
        {
          name: 'Nei',
          value: 514,
        },
      ],
    },
    {
      name: 'offentlig',
      series: [
        {
          name: 'Nei',
          value: 81,
        },
        {
          name: 'Ja',
          value: 2,
        },
      ],
    },
  ];
  RespondantsBySector: any[] = [
    {
      name: 'privat',
      value: 907,
    },
    {
      name: 'ikke oppgitt',
      value: 539,
    },
    {
      name: 'offentlig',
      value: 83,
    },
  ];
  RespondantsByType: any[] = [
    {
      name: 'in-house',
      value: 889,
    },
    {
      name: 'konsulent',
      value: 600,
    },
    {
      name: 'frilans / selvstendig næringsdrivende',
      value: 40,
    },
  ];
  RespondantsByWork: any[] = [
    {
      name: 'fullstack',
      value: 593,
    },
    {
      name: 'backend',
      value: 315,
    },
    {
      name: 'frontend',
      value: 235,
    },
    {
      name: 'devops',
      value: 64,
    },
    {
      name: 'app',
      value: 57,
    },
    {
      name: 'ledelse/administrativt',
      value: 57,
    },
    {
      name: 'programvare',
      value: 49,
    },
    {
      name: 'automatisering',
      value: 27,
    },
    {
      name: 'UX / design',
      value: 24,
    },
    {
      name: 'annet',
      value: 23,
    },
    {
      name: 'embedded/IOT/maskinvare',
      value: 19,
    },
    {
      name: 'databaser',
      value: 18,
    },
    {
      name: 'sikkerhet',
      value: 17,
    },
    {
      name: 'data science',
      value: 12,
    },
    {
      name: 'arkitekt',
      value: 10,
    },
    {
      name: 'test',
      value: 5,
    },
    {
      name: 'maskinlæring',
      value: 4,
    },
  ];
  ValueSalaryByBonusByAge: any[] = [
    {
      name: '20-24 år (124)',
      series: [
        {
          name: 'Ja (53)',
          value: '568157',
          response: 53,
        },
        {
          name: 'Nei (71)',
          value: '539442',
          response: 71,
        },
      ],
    },
    {
      name: '25-29 år (443)',
      series: [
        {
          name: 'Nei (233)',
          value: '622723',
          response: 233,
        },
        {
          name: 'Ja (210)',
          value: '639579',
          response: 210,
        },
      ],
    },
    {
      name: '30-34 år (393)',
      series: [
        {
          name: 'Nei (252)',
          value: '723013',
          response: 252,
        },
        {
          name: 'Ja (141)',
          value: '713710',
          response: 141,
        },
      ],
    },
    {
      name: '40-44 år (168)',
      series: [
        {
          name: 'Nei (109)',
          value: '826621',
          response: 109,
        },
        {
          name: 'Ja (59)',
          value: '900922',
          response: 59,
        },
      ],
    },
    {
      name: '35-39 år (262)',
      series: [
        {
          name: 'Nei (152)',
          value: '785905',
          response: 152,
        },
        {
          name: 'Ja (110)',
          value: '840529',
          response: 110,
        },
      ],
    },
    {
      name: '45-50 år (96)',
      series: [
        {
          name: 'Ja (40)',
          value: '836630',
          response: 40,
        },
        {
          name: 'Nei (56)',
          value: '874342',
          response: 56,
        },
      ],
    },
    {
      name: '50+ år (43)',
      series: [
        {
          name: 'Ja (22)',
          value: '909182',
          response: 22,
        },
        {
          name: 'Nei (21)',
          value: '875900',
          response: 21,
        },
      ],
    },
  ];
  RespondantsBySkillImportance: any[] = [
    {
      name: 'uenig',
      value: 544,
    },
    {
      name: 'enig',
      value: 823,
    },
    {
      name: 'vet ikke/ikke aktuelt',
      value: 162,
    },
  ];
  RespondantsByAgeImportance: any[] = [
    {
      name: 'enig',
      value: 550,
    },
    {
      name: 'vet ikke/ikke aktuelt',
      value: 174,
    },
    {
      name: 'uenig',
      value: 805,
    },
  ];
  RespondantsByTitleImportance: any[] = [
    {
      name: 'vet ikke/ikke aktuelt',
      value: 195,
    },
    {
      name: 'enig',
      value: 693,
    },
    {
      name: 'uenig',
      value: 641,
    },
  ];
  ValueSalaryByYoe: any[] = [
    {
      name: '0 (82)',
      value: '533346',
      response: 82,
    },
    {
      name: '1 (136)',
      value: '554912',
      response: 136,
    },
    {
      name: '2 (152)',
      value: '575152',
      response: 152,
    },
    {
      name: '3 (155)',
      value: '630377',
      response: 155,
    },
    {
      name: '4 (116)',
      value: '686295',
      response: 116,
    },
    {
      name: '5 (122)',
      value: '701025',
      response: 122,
    },
    {
      name: '6 (67)',
      value: '734142',
      response: 67,
    },
    {
      name: '7 (45)',
      value: '788200',
      response: 45,
    },
    {
      name: '8 (56)',
      value: '775757',
      response: 56,
    },
    {
      name: '9 (44)',
      value: '806282',
      response: 44,
    },
    {
      name: '10 (87)',
      value: '782992',
      response: 87,
    },
    {
      name: '11 (30)',
      value: '816349',
      response: 30,
    },
    {
      name: '12 (49)',
      value: '819204',
      response: 49,
    },
    {
      name: '13 (46)',
      value: '857441',
      response: 46,
    },
    {
      name: '14 (48)',
      value: '877371',
      response: 48,
    },
    {
      name: '15 (67)',
      value: '880265',
      response: 67,
    },
    {
      name: '16 (30)',
      value: '865416',
      response: 30,
    },
    {
      name: '17 (18)',
      value: '882285',
      response: 18,
    },
    {
      name: '18 (13)',
      value: '920000',
      response: 13,
    },
    {
      name: '19 (5)',
      value: '766400',
      response: 5,
    },
    {
      name: '20 (48)',
      value: '851777',
      response: 48,
    },
    {
      name: '21 (15)',
      value: '831933',
      response: 15,
    },
    {
      name: '22 (22)',
      value: '888505',
      response: 22,
    },
    {
      name: '23 (11)',
      value: '929009',
      response: 11,
    },
    {
      name: '24 (13)',
      value: '895763',
      response: 13,
    },
    {
      name: '25 (22)',
      value: '951455',
      response: 22,
    },
    {
      name: '26 (8)',
      value: '948125',
      response: 8,
    },
    {
      name: '27 (4)',
      value: '727500',
      response: 4,
    },
    {
      name: '28 (3)',
      value: '641000',
      response: 3,
    },
    {
      name: '29 (2)',
      value: '1180000',
      response: 2,
    },
    {
      name: '30 (5)',
      value: '1013480',
      response: 5,
    },
    {
      name: '32 (2)',
      value: '860000',
      response: 2,
    },
    {
      name: '33 (1)',
      value: '970000',
      response: 1,
    },
    {
      name: '34 (1)',
      value: '792500',
      response: 1,
    },
    {
      name: '35 (3)',
      value: '938667',
      response: 3,
    },
    {
      name: '36 (1)',
      value: '830000',
      response: 1,
    },
  ];
  ValueSalaryByYoeAge: any[] = [
    {
      name: '20-24 år (124)',
      series: [
        {
          name: '0 (31)',
          value: '536110',
          response: 31,
        },
        {
          name: '1 (40)',
          value: '540383',
          response: 40,
        },
        {
          name: '2 (25)',
          value: '556960',
          response: 25,
        },
        {
          name: '3 (14)',
          value: '569571',
          response: 14,
        },
        {
          name: '4 (8)',
          value: '673000',
          response: 8,
        },
        {
          name: '5 (4)',
          value: '479000',
          response: 4,
        },
        {
          name: '7 (2)',
          value: '490000',
          response: 2,
        },
      ],
    },
    {
      name: '25-29 år (443)',
      series: [
        {
          name: '0 (41)',
          value: '532537',
          response: 41,
        },
        {
          name: '1 (70)',
          value: '562634',
          response: 70,
        },
        {
          name: '2 (84)',
          value: '577238',
          response: 84,
        },
        {
          name: '3 (97)',
          value: '655009',
          response: 97,
        },
        {
          name: '4 (63)',
          value: '707467',
          response: 63,
        },
        {
          name: '5 (41)',
          value: '698890',
          response: 41,
        },
        {
          name: '6 (19)',
          value: '683421',
          response: 19,
        },
        {
          name: '7 (8)',
          value: '724900',
          response: 8,
        },
        {
          name: '8 (10)',
          value: '762400',
          response: 10,
        },
        {
          name: '9 (3)',
          value: '745000',
          response: 3,
        },
        {
          name: '10 (4)',
          value: '650000',
          response: 4,
        },
        {
          name: '13 (1)',
          value: '560000',
          response: 1,
        },
        {
          name: '14 (1)',
          value: '535600',
          response: 1,
        },
        {
          name: '27 (1)',
          value: '600000',
          response: 1,
        },
      ],
    },
    {
      name: '30-34 år (393)',
      series: [
        {
          name: '0 (10)',
          value: '528100',
          response: 10,
        },
        {
          name: '1 (17)',
          value: '547317',
          response: 17,
        },
        {
          name: '2 (36)',
          value: '575017',
          response: 36,
        },
        {
          name: '3 (33)',
          value: '587888',
          response: 33,
        },
        {
          name: '4 (34)',
          value: '652347',
          response: 34,
        },
        {
          name: '5 (60)',
          value: '727209',
          response: 60,
        },
        {
          name: '6 (43)',
          value: '763221',
          response: 43,
        },
        {
          name: '7 (28)',
          value: '847918',
          response: 28,
        },
        {
          name: '8 (29)',
          value: '799600',
          response: 29,
        },
        {
          name: '9 (31)',
          value: '825610',
          response: 31,
        },
        {
          name: '10 (42)',
          value: '803448',
          response: 42,
        },
        {
          name: '11 (8)',
          value: '806370',
          response: 8,
        },
        {
          name: '12 (10)',
          value: '741540',
          response: 10,
        },
        {
          name: '13 (4)',
          value: '805000',
          response: 4,
        },
        {
          name: '14 (3)',
          value: '703333',
          response: 3,
        },
        {
          name: '15 (2)',
          value: '800000',
          response: 2,
        },
        {
          name: '16 (1)',
          value: '750000',
          response: 1,
        },
        {
          name: '18 (1)',
          value: '900000',
          response: 1,
        },
        {
          name: '20 (1)',
          value: '800000',
          response: 1,
        },
      ],
    },
    {
      name: '40-44 år (168)',
      series: [
        {
          name: '2 (1)',
          value: '562000',
          response: 1,
        },
        {
          name: '3 (1)',
          value: '430500',
          response: 1,
        },
        {
          name: '4 (2)',
          value: '697000',
          response: 2,
        },
        {
          name: '5 (2)',
          value: '662500',
          response: 2,
        },
        {
          name: '6 (1)',
          value: '712000',
          response: 1,
        },
        {
          name: '7 (2)',
          value: '711000',
          response: 2,
        },
        {
          name: '8 (2)',
          value: '770000',
          response: 2,
        },
        {
          name: '9 (1)',
          value: '530000',
          response: 1,
        },
        {
          name: '10 (10)',
          value: '743990',
          response: 10,
        },
        {
          name: '11 (1)',
          value: '647500',
          response: 1,
        },
        {
          name: '12 (9)',
          value: '747889',
          response: 9,
        },
        {
          name: '13 (6)',
          value: '772333',
          response: 6,
        },
        {
          name: '14 (20)',
          value: '898000',
          response: 20,
        },
        {
          name: '15 (32)',
          value: '864204',
          response: 32,
        },
        {
          name: '16 (19)',
          value: '879896',
          response: 19,
        },
        {
          name: '17 (16)',
          value: '898821',
          response: 16,
        },
        {
          name: '18 (8)',
          value: '928375',
          response: 8,
        },
        {
          name: '19 (3)',
          value: '811667',
          response: 3,
        },
        {
          name: '20 (15)',
          value: '926353',
          response: 15,
        },
        {
          name: '21 (4)',
          value: '907500',
          response: 4,
        },
        {
          name: '22 (8)',
          value: '850512',
          response: 8,
        },
        {
          name: '23 (3)',
          value: '986833',
          response: 3,
        },
        {
          name: '24 (1)',
          value: '822646',
          response: 1,
        },
        {
          name: '25 (1)',
          value: '1200000',
          response: 1,
        },
      ],
    },
    {
      name: '35-39 år (262)',
      series: [
        {
          name: '1 (8)',
          value: '564250',
          response: 8,
        },
        {
          name: '2 (6)',
          value: '624750',
          response: 6,
        },
        {
          name: '3 (10)',
          value: '636770',
          response: 10,
        },
        {
          name: '4 (9)',
          value: '675778',
          response: 9,
        },
        {
          name: '5 (14)',
          value: '676143',
          response: 14,
        },
        {
          name: '6 (3)',
          value: '667333',
          response: 3,
        },
        {
          name: '7 (4)',
          value: '729025',
          response: 4,
        },
        {
          name: '8 (15)',
          value: '739334',
          response: 15,
        },
        {
          name: '9 (9)',
          value: '790832',
          response: 9,
        },
        {
          name: '10 (29)',
          value: '783814',
          response: 29,
        },
        {
          name: '11 (21)',
          value: '828190',
          response: 21,
        },
        {
          name: '12 (29)',
          value: '863608',
          response: 29,
        },
        {
          name: '13 (33)',
          value: '878130',
          response: 33,
        },
        {
          name: '14 (24)',
          value: '896175',
          response: 24,
        },
        {
          name: '15 (29)',
          value: '935284',
          response: 29,
        },
        {
          name: '16 (6)',
          value: '900167',
          response: 6,
        },
        {
          name: '17 (1)',
          value: '630000',
          response: 1,
        },
        {
          name: '18 (3)',
          value: '945000',
          response: 3,
        },
        {
          name: '20 (7)',
          value: '791143',
          response: 7,
        },
        {
          name: '21 (1)',
          value: '780000',
          response: 1,
        },
        {
          name: '24 (1)',
          value: '651000',
          response: 1,
        },
      ],
    },
    {
      name: '45-50 år (96)',
      series: [
        {
          name: '1 (1)',
          value: '650000',
          response: 1,
        },
        {
          name: '5 (1)',
          value: '531000',
          response: 1,
        },
        {
          name: '6 (1)',
          value: '670000',
          response: 1,
        },
        {
          name: '10 (2)',
          value: '802500',
          response: 2,
        },
        {
          name: '12 (1)',
          value: '950000',
          response: 1,
        },
        {
          name: '13 (2)',
          value: '1025000',
          response: 2,
        },
        {
          name: '15 (4)',
          value: '650000',
          response: 4,
        },
        {
          name: '16 (4)',
          value: '773368',
          response: 4,
        },
        {
          name: '17 (1)',
          value: '870000',
          response: 1,
        },
        {
          name: '18 (1)',
          value: '798000',
          response: 1,
        },
        {
          name: '19 (2)',
          value: '698500',
          response: 2,
        },
        {
          name: '20 (23)',
          value: '835739',
          response: 23,
        },
        {
          name: '21 (9)',
          value: '816889',
          response: 9,
        },
        {
          name: '22 (12)',
          value: '936083',
          response: 12,
        },
        {
          name: '23 (6)',
          value: '873767',
          response: 6,
        },
        {
          name: '24 (9)',
          value: '902919',
          response: 9,
        },
        {
          name: '25 (13)',
          value: '912923',
          response: 13,
        },
        {
          name: '26 (2)',
          value: '875000',
          response: 2,
        },
        {
          name: '27 (1)',
          value: '620000',
          response: 1,
        },
        {
          name: '29 (1)',
          value: '1800000',
          response: 1,
        },
      ],
    },
    {
      name: '50+ år (43)',
      series: [
        {
          name: '7 (1)',
          value: '610000',
          response: 1,
        },
        {
          name: '20 (2)',
          value: '715000',
          response: 2,
        },
        {
          name: '21 (1)',
          value: '717000',
          response: 1,
        },
        {
          name: '22 (2)',
          value: '755000',
          response: 2,
        },
        {
          name: '23 (2)',
          value: '1008000',
          response: 2,
        },
        {
          name: '24 (2)',
          value: '1022500',
          response: 2,
        },
        {
          name: '25 (8)',
          value: '983000',
          response: 8,
        },
        {
          name: '26 (6)',
          value: '972500',
          response: 6,
        },
        {
          name: '27 (2)',
          value: '845000',
          response: 2,
        },
        {
          name: '28 (3)',
          value: '641000',
          response: 3,
        },
        {
          name: '29 (1)',
          value: '560000',
          response: 1,
        },
        {
          name: '30 (5)',
          value: '1013480',
          response: 5,
        },
        {
          name: '32 (2)',
          value: '860000',
          response: 2,
        },
        {
          name: '33 (1)',
          value: '970000',
          response: 1,
        },
        {
          name: '34 (1)',
          value: '792500',
          response: 1,
        },
        {
          name: '35 (3)',
          value: '938667',
          response: 3,
        },
        {
          name: '36 (1)',
          value: '830000',
          response: 1,
        },
      ],
    },
  ];
  RespondantsShareSalary: any[] = [
    {
      name: 'enig',
      value: 1143,
    },
    {
      name: 'uenig',
      value: 234,
    },
    {
      name: 'vet ikke/ikke aktuelt',
      value: 152,
    },
  ];
  RespondantsAskSalary: any[] = [
    {
      name: 'enig',
      value: 637,
    },
    {
      name: 'vet ikke/ikke aktuelt',
      value: 274,
    },
    {
      name: 'uenig',
      value: 618,
    },
  ];
  RespondantsOpenSalary: any[] = [
    {
      name: 'enig',
      value: 1241,
    },
    {
      name: 'vet ikke/ikke aktuelt',
      value: 176,
    },
    {
      name: 'uenig',
      value: 112,
    },
  ];
  RespondantsAskSalaryByShareSalary: any[] = [
    {
      name: 'enig',
      series: [
        {
          name: 'enig',
          value: 628,
        },
        {
          name: 'vet ikke/ikke aktuelt',
          value: 5,
        },
        {
          name: 'uenig',
          value: 4,
        },
      ],
    },
    {
      name: 'vet ikke/ikke aktuelt',
      series: [
        {
          name: 'vet ikke/ikke aktuelt',
          value: 96,
        },
        {
          name: 'enig',
          value: 174,
        },
        {
          name: 'uenig',
          value: 4,
        },
      ],
    },
    {
      name: 'uenig',
      series: [
        {
          name: 'enig',
          value: 341,
        },
        {
          name: 'uenig',
          value: 226,
        },
        {
          name: 'vet ikke/ikke aktuelt',
          value: 51,
        },
      ],
    },
  ];
  RespondantsSalaryHappy: any[] = [
    {
      name: 'Nei',
      value: 490,
    },
    {
      name: 'Ja',
      value: 1039,
    },
  ];
  RespondantsGoods: any[] = [
    {
      name: 'annet',
      value: 27,
    },
    {
      name: 'firmabil',
      value: 52,
    },
    {
      name: 'ingen spesielle',
      value: 58,
    },
    {
      name: 'firmahytter/ferieboliger',
      value: 139,
    },
    {
      name: 'sosiale aktiviteter turer, fester, arrangementer osv.',
      value: 543,
    },
    {
      name: 'gode ordninger for gratis teknisk utstyr',
      value: 664,
    },
    {
      name: 'mer fritid (for eksempel flere feriedager)',
      value: 828,
    },
    {
      name: 'faglige aktiviteter (konferanser kurs fagdager osv.)',
      value: 837,
    },
    {
      name: 'mulighet å jobbe hjemmefra/remote',
      value: 1029,
    },
    {
      name: 'fleksible arbeidstider',
      value: 1177,
    },
  ];
  RespondantsYoeByAge: any[] = [
    {
      name: '20-24 år',
      series: [
        {
          name: 0,
          value: 31,
        },
        {
          name: 1,
          value: 40,
        },
        {
          name: 2,
          value: 25,
        },
        {
          name: 3,
          value: 14,
        },
        {
          name: 4,
          value: 8,
        },
        {
          name: 5,
          value: 4,
        },
      ],
    },
    {
      name: '25-29 år',
      series: [
        {
          name: 0,
          value: 41,
        },
        {
          name: 1,
          value: 70,
        },
        {
          name: 2,
          value: 84,
        },
        {
          name: 3,
          value: 97,
        },
        {
          name: 4,
          value: 63,
        },
        {
          name: 5,
          value: 41,
        },
        {
          name: 6,
          value: 19,
        },
        {
          name: 7,
          value: 8,
        },
        {
          name: 8,
          value: 10,
        },
        {
          name: 10,
          value: 4,
        },
      ],
    },
    {
      name: '30-34 år',
      series: [
        {
          name: 0,
          value: 10,
        },
        {
          name: 1,
          value: 17,
        },
        {
          name: 2,
          value: 36,
        },
        {
          name: 3,
          value: 33,
        },
        {
          name: 4,
          value: 34,
        },
        {
          name: 5,
          value: 60,
        },
        {
          name: 6,
          value: 43,
        },
        {
          name: 7,
          value: 28,
        },
        {
          name: 8,
          value: 29,
        },
        {
          name: 9,
          value: 31,
        },
        {
          name: 10,
          value: 42,
        },
        {
          name: 11,
          value: 8,
        },
        {
          name: 12,
          value: 10,
        },
        {
          name: 13,
          value: 4,
        },
      ],
    },
    {
      name: '40-44 år',
      series: [
        {
          name: 10,
          value: 10,
        },
        {
          name: 12,
          value: 9,
        },
        {
          name: 13,
          value: 6,
        },
        {
          name: 14,
          value: 20,
        },
        {
          name: 15,
          value: 32,
        },
        {
          name: 16,
          value: 19,
        },
        {
          name: 17,
          value: 16,
        },
        {
          name: 18,
          value: 8,
        },
        {
          name: 20,
          value: 15,
        },
        {
          name: 21,
          value: 4,
        },
        {
          name: 22,
          value: 8,
        },
      ],
    },
    {
      name: '35-39 år',
      series: [
        {
          name: 1,
          value: 8,
        },
        {
          name: 2,
          value: 6,
        },
        {
          name: 3,
          value: 10,
        },
        {
          name: 4,
          value: 9,
        },
        {
          name: 5,
          value: 14,
        },
        {
          name: 7,
          value: 4,
        },
        {
          name: 8,
          value: 15,
        },
        {
          name: 9,
          value: 9,
        },
        {
          name: 10,
          value: 29,
        },
        {
          name: 11,
          value: 21,
        },
        {
          name: 12,
          value: 29,
        },
        {
          name: 13,
          value: 33,
        },
        {
          name: 14,
          value: 24,
        },
        {
          name: 15,
          value: 29,
        },
        {
          name: 16,
          value: 6,
        },
        {
          name: 20,
          value: 7,
        },
      ],
    },
    {
      name: '45-50 år',
      series: [
        {
          name: 15,
          value: 4,
        },
        {
          name: 16,
          value: 4,
        },
        {
          name: 20,
          value: 23,
        },
        {
          name: 21,
          value: 9,
        },
        {
          name: 22,
          value: 12,
        },
        {
          name: 23,
          value: 6,
        },
        {
          name: 24,
          value: 9,
        },
        {
          name: 25,
          value: 13,
        },
      ],
    },
    {
      name: '50+ år',
      series: [
        {
          name: 25,
          value: 8,
        },
        {
          name: 26,
          value: 6,
        },
        {
          name: 30,
          value: 5,
        },
      ],
    },
  ];
  RespondantsSalaryIncreaseByJobChange: any[] = [
    {
      name: 'vet ikke/ikke aktuelt',
      value: 215,
    },
    {
      name: 'enig',
      value: 1096,
    },
    {
      name: 'uenig',
      value: 218,
    },
  ];
  ValueSalaryByCounty: any[] = [
    {
      name: 'annet',
      value: '652060',
      response: 79,
    },
    {
      name: 'Trøndelag',
      value: '687219',
      response: 134,
    },
    {
      name: 'Oslo',
      value: '748469',
      response: 811,
    },
    {
      name: 'Vestfold og Telemark',
      value: '667428',
      response: 66,
    },
    {
      name: 'Vestland',
      value: '715544',
      response: 150,
    },
    {
      name: 'Agder',
      value: '660723',
      response: 52,
    },
    {
      name: 'Rogaland',
      value: '694778',
      response: 88,
    },
    {
      name: 'Viken',
      value: '757813',
      response: 114,
    },
    {
      name: 'Møre og Romsdal',
      value: '650523',
      response: 35,
    },
  ];
  RespondantsAgeByTitle: any[] = [
    {
      name: '...junior...',
      series: [
        {
          name: '20-24 år',
          value: 27,
        },
        {
          name: '25-29 år',
          value: 72,
        },
        {
          name: '30-34 år',
          value: 18,
        },
        {
          name: '40-44 år',
          value: 1,
        },
        {
          name: '35-39 år',
          value: 6,
        },
      ],
    },
    {
      name: '...lead...',
      series: [
        {
          name: '20-24 år',
          value: 3,
        },
        {
          name: '25-29 år',
          value: 20,
        },
        {
          name: '30-34 år',
          value: 30,
        },
        {
          name: '35-39 år',
          value: 32,
        },
        {
          name: '45-50 år',
          value: 7,
        },
        {
          name: '40-44 år',
          value: 21,
        },
        {
          name: '50+ år',
          value: 9,
        },
      ],
    },
    {
      name: '...ansvarlig...',
      series: [
        {
          name: '20-24 år',
          value: 2,
        },
        {
          name: '25-29 år',
          value: 6,
        },
        {
          name: '30-34 år',
          value: 7,
        },
        {
          name: '50+ år',
          value: 2,
        },
        {
          name: '40-44 år',
          value: 7,
        },
        {
          name: '45-50 år',
          value: 5,
        },
        {
          name: '35-39 år',
          value: 5,
        },
      ],
    },
    {
      name: '...senior...',
      series: [
        {
          name: '30-34 år',
          value: 146,
        },
        {
          name: '35-39 år',
          value: 105,
        },
        {
          name: '45-50 år',
          value: 47,
        },
        {
          name: '25-29 år',
          value: 72,
        },
        {
          name: '40-44 år',
          value: 72,
        },
        {
          name: '50+ år',
          value: 16,
        },
        {
          name: '20-24 år',
          value: 2,
        },
      ],
    },
    {
      name: 'annet',
      series: [
        {
          name: '25-29 år',
          value: 9,
        },
        {
          name: '40-44 år',
          value: 2,
        },
        {
          name: '20-24 år',
          value: 3,
        },
        {
          name: '35-39 år',
          value: 8,
        },
        {
          name: '30-34 år',
          value: 8,
        },
        {
          name: '45-50 år',
          value: 1,
        },
        {
          name: '50+ år',
          value: 1,
        },
      ],
    },
    {
      name: '...overingeniør...',
      series: [
        {
          name: '30-34 år',
          value: 3,
        },
        {
          name: '20-24 år',
          value: 2,
        },
      ],
    },
    {
      name: '...eier...',
      series: [
        {
          name: '50+ år',
          value: 1,
        },
        {
          name: '25-29 år',
          value: 3,
        },
        {
          name: '30-34 år',
          value: 6,
        },
        {
          name: '35-39 år',
          value: 6,
        },
        {
          name: '45-50 år',
          value: 1,
        },
      ],
    },
    {
      name: '...leder...',
      series: [
        {
          name: '20-24 år',
          value: 1,
        },
        {
          name: '25-29 år',
          value: 5,
        },
        {
          name: '35-39 år',
          value: 19,
        },
        {
          name: '30-34 år',
          value: 6,
        },
        {
          name: '45-50 år',
          value: 3,
        },
        {
          name: '40-44 år',
          value: 18,
        },
      ],
    },
    {
      name: '...sjef...',
      series: [
        {
          name: '30-34 år',
          value: 2,
        },
        {
          name: '40-44 år',
          value: 5,
        },
        {
          name: '25-29 år',
          value: 2,
        },
        {
          name: '45-50 år',
          value: 6,
        },
        {
          name: '35-39 år',
          value: 1,
        },
        {
          name: '50+ år',
          value: 2,
        },
      ],
    },
    {
      name: '...direktør...',
      series: [
        {
          name: '45-50 år',
          value: 4,
        },
        {
          name: '25-29 år',
          value: 1,
        },
        {
          name: '35-39 år',
          value: 5,
        },
        {
          name: '50+ år',
          value: 1,
        },
        {
          name: '40-44 år',
          value: 4,
        },
      ],
    },
    {
      name: '...arkitekt...',
      series: [
        {
          name: '45-50 år',
          value: 2,
        },
        {
          name: '40-44 år',
          value: 3,
        },
        {
          name: '30-34 år',
          value: 2,
        },
      ],
    },
    {
      name: '...principal...',
      series: [
        {
          name: '25-29 år',
          value: 2,
        },
        {
          name: '40-44 år',
          value: 3,
        },
        {
          name: '35-39 år',
          value: 1,
        },
        {
          name: '30-34 år',
          value: 1,
        },
      ],
    },
  ];
  RespondantsYoeByTitle: any[] = [
    {
      name: '...junior...',
      series: [
        {
          name: 0,
          value: 36,
        },
        {
          name: 1,
          value: 43,
        },
        {
          name: 2,
          value: 30,
        },
        {
          name: 3,
          value: 12,
        },
        {
          name: 4,
          value: 2,
        },
        {
          name: 5,
          value: 1,
        },
      ],
    },
    {
      name: '...lead...',
      series: [
        {
          name: 1,
          value: 1,
        },
        {
          name: 3,
          value: 12,
        },
        {
          name: 4,
          value: 8,
        },
        {
          name: 5,
          value: 7,
        },
        {
          name: 6,
          value: 2,
        },
        {
          name: 7,
          value: 5,
        },
        {
          name: 8,
          value: 7,
        },
        {
          name: 9,
          value: 7,
        },
        {
          name: 10,
          value: 13,
        },
        {
          name: 11,
          value: 3,
        },
        {
          name: 12,
          value: 7,
        },
        {
          name: 13,
          value: 7,
        },
        {
          name: 14,
          value: 5,
        },
        {
          name: 15,
          value: 5,
        },
        {
          name: 16,
          value: 2,
        },
        {
          name: 17,
          value: 4,
        },
        {
          name: 18,
          value: 7,
        },
        {
          name: 20,
          value: 3,
        },
        {
          name: 21,
          value: 2,
        },
        {
          name: 22,
          value: 2,
        },
        {
          name: 23,
          value: 1,
        },
        {
          name: 24,
          value: 3,
        },
        {
          name: 25,
          value: 4,
        },
        {
          name: 26,
          value: 1,
        },
        {
          name: 27,
          value: 1,
        },
        {
          name: 30,
          value: 2,
        },
        {
          name: 35,
          value: 1,
        },
      ],
    },
    {
      name: '...ansvarlig...',
      series: [
        {
          name: 1,
          value: 1,
        },
        {
          name: 2,
          value: 2,
        },
        {
          name: 3,
          value: 1,
        },
        {
          name: 4,
          value: 1,
        },
        {
          name: 5,
          value: 3,
        },
        {
          name: 6,
          value: 1,
        },
        {
          name: 7,
          value: 2,
        },
        {
          name: 8,
          value: 3,
        },
        {
          name: 9,
          value: 1,
        },
        {
          name: 10,
          value: 1,
        },
        {
          name: 11,
          value: 1,
        },
        {
          name: 12,
          value: 1,
        },
        {
          name: 13,
          value: 3,
        },
        {
          name: 14,
          value: 1,
        },
        {
          name: 15,
          value: 2,
        },
        {
          name: 17,
          value: 1,
        },
        {
          name: 19,
          value: 1,
        },
        {
          name: 20,
          value: 3,
        },
        {
          name: 22,
          value: 1,
        },
        {
          name: 23,
          value: 1,
        },
        {
          name: 25,
          value: 2,
        },
        {
          name: 29,
          value: 1,
        },
      ],
    },
    {
      name: '...senior...',
      series: [
        {
          name: 1,
          value: 3,
        },
        {
          name: 2,
          value: 9,
        },
        {
          name: 3,
          value: 30,
        },
        {
          name: 4,
          value: 30,
        },
        {
          name: 5,
          value: 45,
        },
        {
          name: 6,
          value: 29,
        },
        {
          name: 7,
          value: 22,
        },
        {
          name: 8,
          value: 25,
        },
        {
          name: 9,
          value: 15,
        },
        {
          name: 10,
          value: 39,
        },
        {
          name: 11,
          value: 19,
        },
        {
          name: 12,
          value: 22,
        },
        {
          name: 13,
          value: 27,
        },
        {
          name: 14,
          value: 23,
        },
        {
          name: 15,
          value: 27,
        },
        {
          name: 16,
          value: 19,
        },
        {
          name: 17,
          value: 7,
        },
        {
          name: 18,
          value: 2,
        },
        {
          name: 19,
          value: 3,
        },
        {
          name: 20,
          value: 21,
        },
        {
          name: 21,
          value: 5,
        },
        {
          name: 22,
          value: 9,
        },
        {
          name: 23,
          value: 4,
        },
        {
          name: 24,
          value: 6,
        },
        {
          name: 25,
          value: 9,
        },
        {
          name: 26,
          value: 1,
        },
        {
          name: 27,
          value: 3,
        },
        {
          name: 28,
          value: 1,
        },
        {
          name: 29,
          value: 1,
        },
        {
          name: 30,
          value: 1,
        },
        {
          name: 32,
          value: 1,
        },
        {
          name: 34,
          value: 1,
        },
        {
          name: 36,
          value: 1,
        },
      ],
    },
    {
      name: 'annet',
      series: [
        {
          name: 0,
          value: 3,
        },
        {
          name: 1,
          value: 5,
        },
        {
          name: 3,
          value: 2,
        },
        {
          name: 4,
          value: 1,
        },
        {
          name: 5,
          value: 2,
        },
        {
          name: 6,
          value: 2,
        },
        {
          name: 7,
          value: 1,
        },
        {
          name: 8,
          value: 1,
        },
        {
          name: 9,
          value: 2,
        },
        {
          name: 10,
          value: 3,
        },
        {
          name: 11,
          value: 1,
        },
        {
          name: 12,
          value: 1,
        },
        {
          name: 14,
          value: 2,
        },
        {
          name: 15,
          value: 2,
        },
        {
          name: 16,
          value: 2,
        },
        {
          name: 23,
          value: 2,
        },
      ],
    },
    {
      name: '...overingeniør...',
      series: [
        {
          name: 1,
          value: 2,
        },
        {
          name: 3,
          value: 1,
        },
        {
          name: 7,
          value: 1,
        },
        {
          name: 9,
          value: 1,
        },
      ],
    },
    {
      name: '...eier...',
      series: [
        {
          name: 4,
          value: 1,
        },
        {
          name: 5,
          value: 2,
        },
        {
          name: 6,
          value: 2,
        },
        {
          name: 8,
          value: 1,
        },
        {
          name: 9,
          value: 1,
        },
        {
          name: 10,
          value: 3,
        },
        {
          name: 12,
          value: 1,
        },
        {
          name: 13,
          value: 1,
        },
        {
          name: 15,
          value: 1,
        },
        {
          name: 18,
          value: 1,
        },
        {
          name: 20,
          value: 3,
        },
      ],
    },
    {
      name: '...leder...',
      series: [
        {
          name: 2,
          value: 2,
        },
        {
          name: 4,
          value: 1,
        },
        {
          name: 5,
          value: 3,
        },
        {
          name: 6,
          value: 1,
        },
        {
          name: 8,
          value: 4,
        },
        {
          name: 9,
          value: 2,
        },
        {
          name: 10,
          value: 5,
        },
        {
          name: 12,
          value: 6,
        },
        {
          name: 13,
          value: 1,
        },
        {
          name: 14,
          value: 5,
        },
        {
          name: 15,
          value: 6,
        },
        {
          name: 16,
          value: 3,
        },
        {
          name: 17,
          value: 1,
        },
        {
          name: 18,
          value: 1,
        },
        {
          name: 20,
          value: 7,
        },
        {
          name: 22,
          value: 2,
        },
        {
          name: 23,
          value: 1,
        },
        {
          name: 26,
          value: 1,
        },
      ],
    },
    {
      name: '...sjef...',
      series: [
        {
          name: 3,
          value: 2,
        },
        {
          name: 10,
          value: 1,
        },
        {
          name: 14,
          value: 2,
        },
        {
          name: 15,
          value: 1,
        },
        {
          name: 16,
          value: 1,
        },
        {
          name: 17,
          value: 2,
        },
        {
          name: 21,
          value: 2,
        },
        {
          name: 22,
          value: 3,
        },
        {
          name: 24,
          value: 2,
        },
        {
          name: 26,
          value: 1,
        },
        {
          name: 35,
          value: 1,
        },
      ],
    },
    {
      name: '...direktør...',
      series: [
        {
          name: 3,
          value: 1,
        },
        {
          name: 4,
          value: 1,
        },
        {
          name: 10,
          value: 2,
        },
        {
          name: 13,
          value: 1,
        },
        {
          name: 14,
          value: 1,
        },
        {
          name: 15,
          value: 3,
        },
        {
          name: 17,
          value: 1,
        },
        {
          name: 20,
          value: 1,
        },
        {
          name: 22,
          value: 1,
        },
        {
          name: 24,
          value: 1,
        },
        {
          name: 25,
          value: 1,
        },
        {
          name: 32,
          value: 1,
        },
      ],
    },
    {
      name: '...arkitekt...',
      series: [
        {
          name: 9,
          value: 1,
        },
        {
          name: 10,
          value: 1,
        },
        {
          name: 13,
          value: 1,
        },
        {
          name: 15,
          value: 1,
        },
        {
          name: 18,
          value: 1,
        },
        {
          name: 20,
          value: 1,
        },
        {
          name: 23,
          value: 1,
        },
      ],
    },
    {
      name: '...principal...',
      series: [
        {
          name: 4,
          value: 1,
        },
        {
          name: 5,
          value: 1,
        },
        {
          name: 11,
          value: 1,
        },
        {
          name: 15,
          value: 3,
        },
        {
          name: 25,
          value: 1,
        },
      ],
    },
  ];
  MinResponses = 5;
  MaxSalary = 2000000;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'alder';
  showYAxisLabel = true;
  yAxisLabel = 'grunnlønn';
  schemeType: string = 'ordinal';
  legendPosition: string = 'below';
  colorScheme = {
    domain: [
      '#349ad9',
      '#4296e1',
      '#5790e7',
      '#7089e9',
      '#8a80e8',
      '#a375e2',
      '#bc67d9',
      '#d257ca',
      '#e643b8',
      '#f62aa2',
      '#ff0089',
      '#ff006d',
      '#ff0050',
      '#ff0031',
      '#ff2600',
    ],
  };
  colorSchemeSmall = {
    domain: ['#349ad9', '#7d84e9', '#d257ca', '#ff007b', '#ff2600'],
  };
  vw;
  view: any[] = [700, 400];
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService,
    private wf: WindowRefService,
    @Inject(PLATFORM_ID) private platformId: string,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private router: Router
  ) {
    var width = this.wf.width / 1.1;
    this.vw = width > 700 ? 700 : this.wf.width / 1.1;
    var height = this.vw / 0.75 > 400 ? 400 : this.vw / 0.75;
    this.view = [this.vw, height];
  }
  onResize(event) {
    var width = this.wf.width / 1.1;
    this.vw = width > 700 ? 700 : this.wf.width / 1.1;
    var height = this.vw / 0.75 > 400 ? 400 : this.vw / 0.75;
    this.view = [this.vw, height];
  }
  ngOnInit(): void {
    this.title.setTitle('Alt om utvikleres lønn og karriere i 2021');
    if (isPlatformBrowser(this.platformId)) {
      this.DeveloperSalaryReady = true;
    }
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge. Vi finner også hvilke fagområder som er best og dårligst betalt samtidig som vi ser på gjennomsnittslønnen til utviklere etter år med erfaring, alder og tittel',
      },
      {
        name: 'author',
        content: 'Stian Håve',
      },
      {
        name: 'og:description',
        content:
          'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge. Vi finner også hvilke fagområder som er best og dårligst betalt samtidig som vi ser på gjennomsnittslønnen til utviklere etter år med erfaring, alder og tittel',
      },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'og:image',
        content: 'https://s10.gifyu.com/images/Utvikler-lonn.png',
      },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:width', content: '828' },
      { name: 'og:image:height', content: '470' },
    ]);
    this.SchemaGeneratorArticle();
    this.SchemaGeneratorJuniorUtviklerLonn();
    this.SchemaGeneratorUtviklerLonn();
  }
  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  SchemaGeneratorUtviklerLonn() {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "answerCount": 1,
        "name": "Utvikler lønn gjennomsnitt",
        "text": "hva tjener utvikler?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "en utvikler tjente i gjennomsnitt 732.711kr i 2021 i følge en kode24 undersøkelse"
        }
      }
    }
    `;
    this._renderer2.appendChild(this._document.body, script);
  }
  SchemaGeneratorJuniorUtviklerLonn() {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "answerCount": 1,
        "name": "Junior utvikler lønn gjennomsnitt",
        "text": "hva tjener junior utviklere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "en utvikler med 0 års erfaring tjente i gjennomsnitt 533.334kr i 2021 i følge en kode24 undersøkelse"
          }
      }
    }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }
  SchemaGeneratorArticle() {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${this.router.url}"
          },
          "headline": "Utvikler lønn",
          "image": "https://s10.gifyu.com/images/Utvikler-lonn.png",
          "author": {
            "@type": "Organization",
            "name": "Moderna Media"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Moderna Media",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ModernaMedia.no/assets/Images/LogoV2/modernamedia-mid-large.png"
            }
          },
          "datePublished": "${'2022-03-03'}",
          "dateModified": "${formatDate(new Date(), 'yyyy-MM-dd', 'en')}"
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }
}
