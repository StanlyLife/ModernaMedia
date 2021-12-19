import { WindowRefService } from './../../services/window-ref.service';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';
import { isPlatformBrowser } from '@angular/common';
import { DeveloperSalary } from './../../../assets/data/DeveloperSalary';

@Component({
  selector: 'app-developer-salaray-charts',
  templateUrl: './developer-salaray-charts.component.html',
  styleUrls: ['./developer-salaray-charts.component.scss'],
})
export class DeveloperSalarayChartsComponent implements OnInit {
  DeveloperSalaryReady = false;
  DeveloperSalary: any[];
  DeveloperSalaryFormatted: any[];
  DF: any[]; //DataFormatted
  /* */
  /* NEW ARRAYS */
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
  //#region ValueSalary21vs20
  //#region ValueSalaryIncrease
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
  //#endregion
  //#region ValueSalary21vs20
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
  //#endregion
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
  ValueSalaryByYoeAge: any[];
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
  RespondantsGoods: any[];
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
  ValueSalaryByCounty: any[];
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
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    // Object.assign(this, { DeveloperSalary });

    var width = this.wf.width / 1.1;
    this.vw = width > 700 ? 700 : this.wf.width / 1.1;
    var height = this.vw / 0.75 > 400 ? 400 : this.vw / 0.75;
    this.view = [this.vw, height];

    Object.assign(this, { DeveloperSalary });
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
      //your setTimeout here
      this.DeveloperSalaryReady = true;
    }
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i norge. Vi finner også hvilke fagområder som er best og dårligst betalt samtidig som vi ser på gjennomsnittslønnen til utviklere etter år med erfaring, alder og tittel',
      },
      {
        name: 'author',
        content: 'Stian Håve',
      },
      {
        name: 'og:description',
        content:
          'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i norge. Vi finner også hvilke fagområder som er best og dårligst betalt samtidig som vi ser på gjennomsnittslønnen til utviklere etter år med erfaring, alder og tittel',
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
    this.FormatData();
  }

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  FormatData() {
    this.UpdateKeys();
    this.UpdateValues();
    this.FixSalaries();

    this.GetAverageNumberValueBasedOnType('age', 'salary', true, null);

    this.RespondantsByAge = this.GetResponsesBasedOnType('age', '', null, null);
    console.log(this.RespondantsByAge);
    // this.RespondantsByLocation = this.SortByValue(
    //   this.GetResponsesBasedOnType('county', '', null, null)
    // );
    // console.log(this.RespondantsByLocation);
    // this.RespondantsByAgeByLocation = this.GetResponsesBasedOnTypeByGroup(
    //   'age',
    //   'county',
    //   this.GetListOfAnswersFor('county'),
    //   'county'
    // );
    // console.log(this.RespondantsByAgeByLocation);
    // this.ValueSalaryByAge = this.GetAverageNumberValueBasedOnType(
    //   'age',
    //   'salary',
    //   null,
    //   null
    // );
    // this.RespondantsByAgeByBonus = this.GetResponsesBasedOnTypeByGroup(
    //   'bonus',
    //   'age',
    //   this.GetListOfAnswersFor('age'),
    //   'age'
    // );
    // console.log(this.RespondantsByAgeByBonus);
    // this.RespondantsBySectorByBonus = this.GetResponsesBasedOnTypeByGroup(
    //   'bonus',
    //   'sector',
    //   this.GetListOfAnswersFor('sector'),
    //   'sector'
    // );
    // console.log(this.RespondantsBySectorByBonus);
    // this.RespondantsBySector = this.SortByValue(
    //   this.GetResponsesBasedOnType('sector', '', null, null)
    // );
    // console.log(this.RespondantsBySector);
    // this.RespondantsByType = this.SortByValue(
    //   this.GetResponsesBasedOnType('type', '', null, null)
    // );
    // console.log(this.RespondantsByType);
    // this.RespondantsByWork = this.SortByValue(
    //   this.GetResponsesBasedOnType('work', '', null, null)
    // );
    // console.log('this.RespondantsByWork');
    // console.log(this.RespondantsByWork);
    // this.ValueSalaryByWork = this.SortByValue(
    //   this.GetAverageNumberValueBasedOnType('work', 'salary', null, null)
    // );
    // console.log('this.ValueSalaryByWork');
    // console.log(this.ValueSalaryByWork);
    // this.ValueSalaryByBonusByAge =
    //   this.GetAverageNumberValueBasedOnTypeByGroupWithResponses(
    //     'bonus',
    //     'salary',
    //     this.GetListOfAnswersFor('age'),
    //     'age'
    //   );
    // console.log('this.ValueSalaryByBonusByAge');
    // console.log(this.ValueSalaryByBonusByAge);
    // this.RespondantsBySkillImportance = this.GetResponsesBasedOnType(
    //   'skillImportance',
    //   '',
    //   null,
    //   null
    // );
    // console.log('this.RespondantsBySkillImportance');
    // console.log(this.RespondantsBySkillImportance);
    // this.RespondantsByAgeImportance = this.GetResponsesBasedOnType(
    //   'ageImportance',
    //   '',
    //   null,
    //   null
    // );
    // console.log('this.RespondantsByAgeImportance');
    // console.log(this.RespondantsByAgeImportance);
    // this.RespondantsByTitleImportance = this.GetResponsesBasedOnType(
    //   'titleImportance',
    //   '',
    //   null,
    //   null
    // );
    // console.log('this.RespondantsByTitleImportance');
    // console.log(this.RespondantsByTitleImportance);
    // this.ValueSalaryByYoe = this.GetAverageNumberValueBasedOnType(
    //   'yoe',
    //   'salary',
    //   true,
    //   null
    // );
    // console.log('this.ValueSalaryByYoe');
    // console.log(this.ValueSalaryByYoe);
    // this.RespondantsShareSalary = this.SortByValue(
    //   this.GetResponsesBasedOnType('shareSalary', '', null, null)
    // );
    // console.log('this.RespondantsShareSalary');
    // console.log(this.RespondantsShareSalary);
    // this.RespondantsAskSalary = this.GetResponsesBasedOnType(
    //   'askSalary',
    //   '',
    //   null,
    //   null
    // );
    // console.log('this.RespondantsAskSalary');
    // console.log(this.RespondantsAskSalary);
    // this.RespondantsOpenSalary = this.GetResponsesBasedOnType(
    //   'openSalary',
    //   '',
    //   null,
    //   null
    // );
    // console.log('this.RespondantsOpenSalary');
    // console.log(this.RespondantsOpenSalary);
    // this.RespondantsAskSalaryByShareSalary =
    //   this.GetResponsesBasedOnTypeByGroup(
    //     'shareSalary',
    //     'askSalary',
    //     this.GetListOfAnswersFor('askSalary'),
    //     'askSalary'
    //   );
    // console.log('this.RespondantsAskSalaryByShareSalary');
    // console.log(this.RespondantsAskSalaryByShareSalary);
    // this.RespondantsAgeByTitle = this.GetResponsesBasedOnTypeByGroup(
    //   'age',
    //   'title',
    //   this.GetListOfAnswersFor('title'),
    //   'title'
    // );
    // console.log('this.RespondantsAgeByTitle');
    // console.log(this.RespondantsAgeByTitle);
    // this.RespondantsAgeByTitle = this.RespondantsAgeByTitle.filter(function (
    //   obj
    // ) {
    //   return obj.name !== 'nei';
    // });
    // console.log('this.RespondantsAgeByTitle');
    // console.log(this.RespondantsAgeByTitle);
    // this.RespondantsYoeByTitle = this.GetResponsesBasedOnTypeByGroup(
    //   'yoe',
    //   'title',
    //   this.GetListOfAnswersFor('title'),
    //   'title'
    // );
    // this.RespondantsYoeByTitle = this.RespondantsYoeByTitle.filter(function (
    //   obj
    // ) {
    //   return obj.name !== 'nei';
    // });
    // console.log('this.RespondantsYoeByTitle');
    // console.log(this.RespondantsYoeByTitle);
    // this.RespondantsYoeByAge = this.RemoveLowRespondants(
    //   this.GetResponsesBasedOnTypeByGroup(
    //     'yoe',
    //     'age',
    //     this.GetListOfAnswersFor('age'),
    //     'age'
    //   ),
    //   3,
    //   'value'
    // );
    // console.log('this.RespondantsYoeByAge');
    // console.log(this.RespondantsYoeByAge);
    // this.RespondantsSalaryHappy = this.GetResponsesBasedOnType(
    //   'salaryhappy',
    //   '',
    //   null,
    //   null
    // );
    // console.log('this.RespondantsSalaryHappy');
    // console.log(this.RespondantsSalaryHappy);
    // this.RespondantsSalaryIncreaseByJobChange = this.GetResponsesBasedOnType(
    //   'salaryIncreaseByJobChange',
    //   '',
    //   null,
    //   null
    // );
    // console.log('this.RespondantsSalaryIncreaseByJobChange');
    // console.log(this.RespondantsSalaryIncreaseByJobChange);
    this.RespondantsGoods = this.GetResponsesBasedOnTypeSplit(
      'goods',
      '',
      null,
      null
    );
    console.log('this.RespondantsGoods');
    console.log(this.RespondantsGoods);
    this.ValueSalaryByYoeAge = this.RemoveLowRespondants(
      this.GetAverageNumberValueBasedOnTypeByGroupWithResponses(
        'yoe',
        'salary',
        this.GetListOfAnswersFor('age'),
        'age'
      ),
      3,
      'response'
    );
    console.log('this.ValueSalaryByYoeAge');
    console.log(this.ValueSalaryByYoeAge);
    this.ValueSalaryByCounty = this.SortByValue(
      this.GetAverageNumberValueBasedOnType('county', 'salary', true, null)
    );
    console.log('this.ValueSalaryByCounty');
    console.log(this.ValueSalaryByCounty);

    this.DeveloperSalaryReady = true;
  }

  private SortByValue(arr) {
    return arr.sort((a, b) =>
      a.value < b.value ? 1 : b.value < a.value ? -1 : 0
    );
  }
  private RemoveLowRespondants(arr, responses, val) {
    var newArr = [];
    arr = arr.forEach((obj) => {
      obj.series = obj.series.filter(function (obj) {
        return obj[val] > responses;
      });
      var newObj = { name: obj.name, series: obj.series };
      newArr.push(newObj);
    });
    return newArr;
  }

  //#region functions
  private FixSalaries() {
    var arr = [];
    this.DF.forEach((obj) => {
      if (obj.salary < 2000000 && obj.salary > 300000) {
        arr.push({ ...obj });
      }
    });
    arr.sort((a, b) =>
      a.salary > b.salary ? 1 : b.salary > a.salary ? -1 : 0
    );
    this.DF = arr;
  }
  private UpdateKeys() {
    this.DF = this.DeveloperSalary.map(
      ({
        'Hva er din alder?': age,
        'I hvilket fylke ligger jobben din?': county,
        'Hva beskriver best din arbeidssituasjon?': type,
        'Er du ansatt i det offentlige eller private næringsliv?': sector,
        'Hvor mange års relevant, formell utdannelse har du?': education,
        'Hvor mange års relevant arbeidserfaring har du?': yoe,
        'Hva jobber du mest med?': work,
        'Har du en av disse begrepene i stillingstittelen din?': title,
        'Hva er din grunnlønn? (årslønn før skatt, uten eventuelle bonuser eller overtidsbetaling)':
          salary,
        'Er du organisert? (Altså medlem av en forening som Tekna, El&it, Nito osv)':
          union,
        'Pleier du å få mer utbetalt enn grunnlønn på grunn av overtidsbetaling?':
          overtime,
        'Har du en bonusordning hos din nåværende arbeidsgiver?': bonus,
        'Sist du gikk opp i lønn, hvordan skjedde det? (altså en helt ny lønn eller en lønnsjustering utover indeksregulering, sentrale oppgjør osv.)':
          raise,
        'Alt i alt - er du fornøyd med din egen lønn?': salaryhappy,
        'Om du skal bytte jobb, hvilke goder kan være like viktig som lønn?':
          goods,
        'Skal jeg bytte jobb, skal jeg også opp i lønn.':
          salaryIncreaseByJobChange,
        'Hvor mye man tjener avhenger av hvor flink man er i jobben sin.':
          skillImportance,
        'Hvor mye man tjener avhenger av hvilken tittel man har.':
          titleImportance,
        'Hvor mye man tjener avhenger av hvor gammel man er." (Altså uavhengig av erfaring og fartstid i selskapet)':
          ageImportance,
        'Utviklere er blant de som tjener mest på arbeidsplassen min.':
          developersEarnMost,
        'Jeg tror jeg hadde tjent mer nå om det ikke hadde vært for korona." (for eksempel på grunn av manglende lønnsjustering, mindre aktuelt å bytte jobb, osv)':
          salaryCorona,
        'Jeg synes man bør tjene mer om man jobber hjemmefra.': wfhMore,
        'Jeg synes man bør tjene mindre om man jobber hjemmefra.': wfhLess,
        'Jeg tror kjønn i seg selv spiller inn i hvor mye man tjener.': gender,
        'Om noen spør, synes jeg det er greit å fortelle kolleger hva jeg tjener.':
          shareSalary,
        'Jeg synes det er greit å spørre kolleger hva de tjener.': askSalary,
        'Vi burde ha mer åpenhet på en arbeidsplass om hva vi tjener.':
          openSalary,
        ...rest
      }) => ({
        age,
        county,
        type,
        sector,
        education,
        yoe,
        work,
        title,
        salary,
        union,
        overtime,
        bonus,
        raise,
        salaryhappy,
        goods,
        salaryIncreaseByJobChange,
        skillImportance,
        titleImportance,
        ageImportance,
        developersEarnMost,
        salaryCorona,
        wfhMore,
        wfhLess,
        gender,
        shareSalary,
        askSalary,
        openSalary,
        ...rest,
      })
    );
  }
  private UpdateValues() {
    this.DF.forEach((obj) => {
      obj.salary = obj.salary.replace(',00 kr', '');
      obj.salary = obj.salary.replace(/\s/g, '');
      obj.salary = parseInt(obj.salary);
    });
  }
  private GetResponsesBasedOnTypeSplit(name, value, response, arr) {
    var dataArray = arr || this.DF;

    var results = [];
    dataArray.forEach((obj) => {
      let valg = obj[name].split(',');
      var path = valg.map((x) => x.trim());
      path.forEach((v) => {
        var found = false;
        for (var i = 0; i < results.length; i++) {
          if (results[i].name == v) {
            results[i].value++;
            found = true;
            break;
          }
        }
        if (!found) {
          var o = { name: v, value: 1 };
          results.push(o);
        }
      });
    });
    results = results.filter(function (obj) {
      return obj.value > 5;
    });
    results.sort((a, b) =>
      a.value > b.value ? 1 : b.value > a.value ? -1 : 0
    );
    return results;
  }
  private GetResponsesBasedOnType(name, value, response, arr) {
    var dataArray = arr || this.DF;
    const reduced = dataArray.reduce(function (m, d) {
      if (!m[d[name]]) {
        m[d[name]] = { ...d, count: 1 };
        return m;
      }
      m[d[name]][value] += d[value];
      m[d[name]].count += 1;
      return m;
    }, {});

    // Create new array from grouped data and compute the average
    let result = Object.keys(reduced).map(function (k) {
      const item = reduced[k];
      return {
        name: item[name],
        value: item.count,
      };
    });
    return result;
  }
  private GetListOfAnswersFor(key) {
    const unique = [...new Set(this.DF.map((item) => item[key]))];
    let unqiqueObjects = [];
    unique.forEach((u) => {
      var o = { name: key, value: u };
      unqiqueObjects.push(o);
    });
    return unique;
  }
  private GetListOfAnswersWhereKeyIs(key, value) {
    let ListOfAnswers = [];
    this.DF.forEach((u) => {
      if (u[key] == value) {
        ListOfAnswers.push(u);
      }
    });
    return ListOfAnswers;
  }
  //#region ValueBasedOnType
  private GetAverageNumberValueBasedOnType(name, value, responses, arr) {
    var dataArray = arr || this.DF;
    let reduced = dataArray.reduce(function (m, d) {
      if (!m[d[name]]) {
        m[d[name]] = { ...d, count: 1 };
        return m;
      }
      m[d[name]][value] += d[value];
      m[d[name]].count += 1;
      return m;
    }, {});
    // Create new array from grouped data and compute the average
    let result = Object.keys(reduced).map(function (k) {
      const item = reduced[k];
      if (responses) {
        return {
          name: item[name] + ` (${item.count})`,
          value: (item[value] / item.count).toFixed(),
          response: item.count,
        };
      }
      return {
        name: item[name],
        value: (item[value] / item.count).toFixed(),
        response: item.count,
      };
    });
    return result;
  }

  private GetMeanNumberValueBasedOnType(name, value, responses, arr) {
    var dataArray = arr || this.DF;
    const reduced = dataArray.reduce(function (m, d) {
      if (!m[d[name]]) {
        m[d[name]] = { ...d, count: 1 };
        m[d[name]]['arr'] = [];
        return m;
      }
      m[d[name]][value] += d[value];
      m[d[name]]['arr'].push(d[value]);
      m[d[name]].count += 1;
      return m;
    }, {});
    const result = Object.keys(reduced).map(function (k) {
      const item = reduced[k];
      if (!item['arr']) {
        return;
      }
      var sortedItemArray = item['arr'].sort();
      var medianValue = sortedItemArray[(sortedItemArray.length / 2).toFixed()];
      if (responses) {
        return {
          name: item[name] + ` (${item.count})`,
          value: medianValue,
          response: item.count,
        };
      }
      return {
        name: item[name],
        value: medianValue,
        response: item.count,
      };
    });
    return result;
  }
  //#endregion
  //#region ValueBasedOnTypeByGroup
  private GetAverageNumberValueBasedOnTypeByGroup(name, value, group) {
    var series = [];
    group.forEach((g) => {
      var serie = this.GetAverageNumberValueBasedOnType(
        name,
        value,
        null,
        null
      );
      var input = {
        name: g,
        series: serie,
      };
      series.push(input);
    });
    return series;
  }
  private GetMeanValueBasedOnTypeByGroup(name, value, group) {
    var series = [];
    group.forEach((g) => {
      var serie = this.GetMeanNumberValueBasedOnType(name, value, null, null);
      var input = {
        name: g,
        series: serie,
      };
      series.push(input);
    });
    return series;
  }
  //#endregion
  //#region BasedOnTypeByGroupWithResponses
  private GetMeanValueBasedOnTypeByGroupWithResponses(
    name,
    value,
    group,
    groupName
  ) {
    var series = [];
    group.forEach((g) => {
      var groupedResponses = this.GetListOfAnswersWhereKeyIs(groupName, g);
      var serie = this.GetMeanNumberValueBasedOnType(
        name,
        value,
        true,
        groupedResponses
      );
      var input = {
        name: g + ` (${groupedResponses.length})`,
        series: serie,
      };
      series.push(input);
    });
    return series;
  }
  private GetAverageNumberValueBasedOnTypeByGroupWithResponses(
    name,
    value,
    group,
    groupName
  ) {
    var series = [];
    group.forEach((g) => {
      var groupedResponses = this.GetListOfAnswersWhereKeyIs(groupName, g);
      var serie = this.GetAverageNumberValueBasedOnType(
        name,
        value,
        true,
        groupedResponses
      );
      var input = {
        name: g + ` (${groupedResponses.length})`,
        series: serie,
      };

      series.push(input);
    });
    return series;
  }
  //#endregion
  private GetResponsesBasedOnTypeByGroup(name, value, group, groupName) {
    var series = [];
    group.forEach((g) => {
      var groupedResponses = this.GetListOfAnswersWhereKeyIs(groupName, g);
      var serie = this.GetResponsesBasedOnType(
        name,
        value,
        false,
        groupedResponses
      );
      var input = {
        name: g,
        series: serie,
      };
      series.push(input);
    });
    return series;
  }
  //#endregion
}
