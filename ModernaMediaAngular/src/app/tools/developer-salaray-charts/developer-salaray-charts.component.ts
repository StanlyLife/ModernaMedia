import { DeveloperSalary } from './../../../assets/data/DeveloperSalary';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { gridLayout, NgxChartsModule } from '@swimlane/ngx-charts';
import * as e from 'express';

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
  //Salary by age
  DeveloperSalaryByAge: any[];
  //Salary by age grouped by location
  DeveloperSalaryByAgeWithLocation: any[];
  //Salary by location
  DeveloperSalaryByLocation: any[];
  //Responses by age
  DeveloperResponseByAge: any[];
  //Responses by location
  DevloperResponseByLocation: any[];
  //Salary by age grouped by location
  DevloperResponseByAgeByLocation: any[];
  //salary based on YOE
  DeveloperSalaryByYoe: any[];
  //salary based on backend,system,front-end etc
  DeveloperSalartByTitle: any[];
  //salary based on what you work most with
  DeveloperSalaryByType: any[];
  //How many peopla are unionized
  //How many people have a bonus
  //average salary with bonus
  DeveloperSalaryByBonus: any[];
  //average salary without bonus
  DeveloperSalaryByBonusByAge: any[];
  //reasons for salary increase
  //are you happy with salary
  //most important reasons for job change
  //How old you are depends on your age, not yoe
  //more salary if you work from home vs if not
  //I am happy to share my salary VS i feel confident asking colleagues salary
  //we should be more open about our salary

  /* NEW ARRAYS */
  RespondantsByAge: any[];
  RespondantsByLocation: any[];
  RespondantsByAgeByLocation: any[];
  ValueSalaryByAge: any[];
  ValueSalaryByWork: any[];
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
  RespondantsByAgeByBonus: any[];
  RespondantsBySectorByBonus: any[];
  RespondantsBySector: any[];
  RespondantsByType: any[];
  RespondantsByWork: any[];
  ValueSalaryByBonusByAge: any[];
  RespondantsBySkillImportance: any[];
  RespondantsByAgeImportance: any[];
  RespondantsByTitleImportance: any[];
  ValueSalaryByYoe: any[];
  ValueSalaryByYoeAge: any[];
  RespondantsShareSalary: any[];
  RespondantsAskSalary: any[];
  RespondantsOpenSalary: any[];
  RespondantsAskSalaryByShareSalary: any[];
  RespondantsSalaryHappy: any[];
  RespondantsGoods: any[];
  RespondantsYoeByAge: any[];
  RespondantsSalaryIncreaseByJobChange: any[];
  ValueSalaryByCounty: any[];
  constructor() {
    Object.assign(this, { DeveloperSalary });
  }
  MinResponses = 5;
  MaxSalary = 2000000;
  view: any[] = [700, 400];
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
  // colorScheme = {
  //   domain: [
  //     '#ff774d',
  //     '#ff6a54',
  //     '#ff5d5c',
  //     '#ff4f66',
  //     '#ff4071',
  //     '#ff307d',
  //     '#ff1f8a',
  //     '#fc0c99',
  //     '#f200a8',
  //     '#e604b7',
  //     '#d617c6',
  //     '#c227d6',
  //     '#a835e5',
  //     '#8742f3',
  //     '#534dff',
  //   ],
  // };
  // colorScheme = {
  //   domain: ['#E6BB82', '#D8A235', '#E17A0D', '#872715', '#360D0A'],
  // };
  ngOnInit(): void {
    console.log(this.DeveloperSalary[0]);
    this.FormatData();
  }

  FormatData() {
    this.UpdateKeys();
    this.UpdateValues();
    this.FixSalaries();

    console.log('age salary');
    this.GetAverageNumberValueBasedOnType('age', 'salary', true, null);

    this.RespondantsByAge = this.GetResponsesBasedOnType('age', '', null, null);
    this.RespondantsByLocation = this.SortByValue(
      this.GetResponsesBasedOnType('county', '', null, null)
    );
    this.RespondantsByAgeByLocation = this.GetResponsesBasedOnTypeByGroup(
      'age',
      'county',
      this.GetListOfAnswersFor('county'),
      'county'
    );

    this.ValueSalaryByAge = this.GetAverageNumberValueBasedOnType(
      'age',
      'salary',
      null,
      null
    );
    this.RespondantsByAgeByBonus = this.RespondantsByAgeByLocation =
      this.GetResponsesBasedOnTypeByGroup(
        'bonus',
        'age',
        this.GetListOfAnswersFor('age'),
        'age'
      );
    this.RespondantsBySectorByBonus = this.RespondantsByAgeByLocation =
      this.GetResponsesBasedOnTypeByGroup(
        'bonus',
        'sector',
        this.GetListOfAnswersFor('sector'),
        'sector'
      );
    this.RespondantsBySector = this.SortByValue(
      this.GetResponsesBasedOnType('sector', '', null, null)
    );
    this.RespondantsByType = this.SortByValue(
      this.GetResponsesBasedOnType('type', '', null, null)
    );
    this.RespondantsByWork = this.SortByValue(
      this.GetResponsesBasedOnType('work', '', null, null)
    );
    this.ValueSalaryByWork = this.SortByValue(
      this.GetAverageNumberValueBasedOnType('work', 'salary', null, null)
    );
    this.ValueSalaryByBonusByAge =
      this.GetAverageNumberValueBasedOnTypeByGroupWithResponses(
        'bonus',
        'salary',
        this.GetListOfAnswersFor('age'),
        'age'
      );

    this.RespondantsBySkillImportance = this.GetResponsesBasedOnType(
      'skillImportance',
      '',
      null,
      null
    );
    this.RespondantsByAgeImportance = this.GetResponsesBasedOnType(
      'ageImportance',
      '',
      null,
      null
    );
    this.RespondantsByTitleImportance = this.GetResponsesBasedOnType(
      'titleImportance',
      '',
      null,
      null
    );
    this.ValueSalaryByYoe = this.GetAverageNumberValueBasedOnType(
      'yoe',
      'salary',
      true,
      null
    );

    console.log('@@@@@@@@@@');
    this.RespondantsShareSalary = this.SortByValue(
      this.GetResponsesBasedOnType('shareSalary', '', null, null)
    );
    this.RespondantsAskSalary = this.GetResponsesBasedOnType(
      'askSalary',
      '',
      null,
      null
    );
    this.RespondantsOpenSalary = this.GetResponsesBasedOnType(
      'openSalary',
      '',
      null,
      null
    );
    this.RespondantsAskSalaryByShareSalary =
      this.GetResponsesBasedOnTypeByGroup(
        'shareSalary',
        'askSalary',
        this.GetListOfAnswersFor('askSalary'),
        'askSalary'
      );
    this.RespondantsYoeByAge = this.RemoveLowRespondants(
      this.GetResponsesBasedOnTypeByGroup(
        'yoe',
        'age',
        this.GetListOfAnswersFor('age'),
        'age'
      ),
      3,
      'value'
    );
    console.log('this.RespondantsYoeByAge');
    console.log(this.RespondantsYoeByAge);
    this.RespondantsSalaryHappy = this.GetResponsesBasedOnType(
      'salaryhappy',
      '',
      null,
      null
    );
    this.RespondantsSalaryIncreaseByJobChange = this.GetResponsesBasedOnType(
      'salaryIncreaseByJobChange',
      '',
      null,
      null
    );
    this.RespondantsGoods = this.GetResponsesBasedOnTypeSplit(
      'goods',
      '',
      null,
      null
    );
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
    this.ValueSalaryByCounty = this.SortByValue(
      this.GetAverageNumberValueBasedOnType('county', 'salary', true, null)
    );
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
      console.log(obj.series);
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
    console.log(`Antall respondanter ${this.DF.length}`);
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
    console.log(series);
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
    console.log(series);
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
    console.log(series);
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

  //   //#region Functions
  //   //#region get deveøpåerSalarybybonusbyage
  //   private GetDeveloperSalaryByBonusByAge() {
  //     var ages = this.DeveloperSalaryFormatted.map(function (el) {
  //       return el.age;
  //     });
  //     ages.forEach((age) => {
  //       const ageResponses = this.DeveloperSalaryFormatted.filter(
  //         (c) => c.age === age
  //       );
  //       console.log(ageResponses);
  //       var x = this.GetAvgSalaryPerAgeByBonus(ages);
  //       console.log(x);
  //       // var obj = {name: age + ` (${ageResponses})`, series: }
  //       // this.DeveloperSalaryByBonusByAge.push(obj);
  //     });

  //     console.log(this.DeveloperSalaryByBonusByAge);
  //   }
  //   private GetAvgSalaryPerAgeByBonus(Respondants: any[]) {
  //     const reduced = Respondants.reduce(function (m, d) {
  //       if (!m[d.bonus]) {
  //         m[d.bonus] = { bonus: d.bonus, salary: parseInt(d.salary), count: 1 };
  //         return m;
  //       }
  //       m[d.bonus].salary += parseInt(d.salary);
  //       m[d.bonus].count += 1;
  //       return m;
  //     }, {});
  //     // Create new array from grouped data and compute the average
  //     const result = Object.keys(reduced).map(function (k) {
  //       const item = reduced[k];
  //       return {
  //         name: item.bonus,
  //         value: item.salary,
  //       };
  //     });
  //     return result;
  //   }

  //   //#endregion

  //   //#region GetDeveloperSalaryBonus
  //   private GetDeveloperSalaryByBonus() {
  //     var SumOfSalaryByBonus = this.GetSumOfSalaryByBonus();
  //     this.DeveloperSalaryByBonus =
  //       this.GetAverageOfSalaryByBonus(SumOfSalaryByBonus);

  //     //sort by salary
  //     this.DeveloperSalaryByBonus.sort(function (a, b) {
  //       return parseFloat(a.value) - parseFloat(b.value);
  //     });
  //   }

  //   private GetAverageOfSalaryByBonus(SumOfSalaryByBonus) {
  //     SumOfSalaryByBonus.forEach((o) => {
  //       var bonus = o.bonus;
  //       var sumSalary = o.salary;
  //       var occourance = this.DeveloperSalaryFormatted.reduce(
  //         (acc, cur) => (cur.bonus === bonus ? ++acc : acc),
  //         0
  //       );
  //       o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
  //       o.bonus = o.bonus + ` (${occourance})`;
  //       o.responses = occourance;
  //       console.log(`salary: ${o.salary} --- bonus: ${o.bounus}`);
  //     });
  //     SumOfSalaryByBonus = this.RemoveResponses(SumOfSalaryByBonus);
  //     SumOfSalaryByBonus = SumOfSalaryByBonus.map(
  //       ({ bonus: name, salary: value, ...rest }) => ({
  //         name,
  //         value,
  //         ...rest,
  //       })
  //     );
  //     return SumOfSalaryByBonus;
  //   }

  //   private GetSumOfSalaryByBonus() {
  //     var holder = {};
  //     var obj2 = [];
  //     this.DeveloperSalaryFormatted.forEach(function (d) {
  //       if (holder.hasOwnProperty(d.bonus)) {
  //         holder[d.bonus] += parseInt(d.salary);
  //       } else {
  //         holder[d.bonus] = parseInt(d.salary);
  //       }
  //     });

  //     for (var prop in holder) {
  //       obj2.push({ bonus: prop, salary: parseInt(holder[prop]) });
  //     }
  //     return obj2;
  //   }
  //   //#endregion

  //   //#region GetDeveloperSalaryType
  //   private GetDeveloperSalaryByType() {
  //     var SumOfSalaryByType = this.GetSumOfSalaryByType();
  //     this.DeveloperSalaryByType =
  //       this.GetAverageOfSalaryByType(SumOfSalaryByType);

  //     //sort by salary
  //     this.DeveloperSalaryByType.sort(function (a, b) {
  //       return parseFloat(a.value) - parseFloat(b.value);
  //     });
  //   }

  //   private GetAverageOfSalaryByType(SumOfSalaryByTitle) {
  //     SumOfSalaryByTitle.forEach((o) => {
  //       var type = o.type;
  //       var sumSalary = o.salary;
  //       var occourance = this.DeveloperSalaryFormatted.reduce(
  //         (acc, cur) => (cur.type === type ? ++acc : acc),
  //         0
  //       );
  //       o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
  //       o.type = o.type + ` (${occourance})`;
  //       o.responses = occourance;
  //     });
  //     SumOfSalaryByTitle = this.RemoveResponses(SumOfSalaryByTitle);
  //     SumOfSalaryByTitle = SumOfSalaryByTitle.map(
  //       ({ type: name, salary: value, ...rest }) => ({
  //         name,
  //         value,
  //         ...rest,
  //       })
  //     );
  //     return SumOfSalaryByTitle;
  //   }

  //   private GetSumOfSalaryByType() {
  //     var holder = {};
  //     var obj2 = [];
  //     this.DeveloperSalaryFormatted.forEach(function (d) {
  //       if (holder.hasOwnProperty(d.type)) {
  //         holder[d.type] += parseInt(d.salary);
  //       } else {
  //         holder[d.type] = parseInt(d.salary);
  //       }
  //     });

  //     for (var prop in holder) {
  //       obj2.push({ type: prop, salary: parseInt(holder[prop]) });
  //     }
  //     return obj2;
  //   }
  //   //#endregion
  //   //#region GetDeveloperSalaryTitle
  //   private GetDeveloperSalaryByTitle() {
  //     var SumOfSalaryByTitle = this.GetSumOfSalaryByTitle();
  //     this.DeveloperSalartByTitle =
  //       this.GetAverageOfSalaryByTitle(SumOfSalaryByTitle);

  //     //sort by salary
  //     this.DeveloperSalartByTitle.sort(function (a, b) {
  //       return parseFloat(a.value) - parseFloat(b.value);
  //     });
  //   }
  //   private GetAverageOfSalaryByTitle(SumOfSalaryByTitle) {
  //     SumOfSalaryByTitle.forEach((o) => {
  //       var title = o.title;
  //       var sumSalary = o.salary;
  //       var occourance = this.DeveloperSalaryFormatted.reduce(
  //         (acc, cur) => (cur.title === title ? ++acc : acc),
  //         0
  //       );
  //       o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
  //       console.log(
  //         `title: ${title} --- avgSalary: ${o.salary} --- responses: ${occourance}`
  //       );
  //     });
  //     SumOfSalaryByTitle = SumOfSalaryByTitle.filter(function (e) {
  //       e.title = e.title.replace(/(^\.+|\.+$)/gm, '');
  //       return e.title !== 'nei';
  //     });
  //     SumOfSalaryByTitle = SumOfSalaryByTitle.map(
  //       ({ title: name, salary: value, ...rest }) => ({
  //         name,
  //         value,
  //         ...rest,
  //       })
  //     );
  //     return SumOfSalaryByTitle;
  //   }

  //   private GetSumOfSalaryByTitle() {
  //     var holder = {};
  //     var obj2 = [];
  //     this.DeveloperSalaryFormatted.forEach(function (d) {
  //       if (holder.hasOwnProperty(d.title)) {
  //         holder[d.title] += parseInt(d.salary);
  //       } else {
  //         holder[d.title] = parseInt(d.salary);
  //       }
  //     });

  //     for (var prop in holder) {
  //       obj2.push({ title: prop, salary: parseInt(holder[prop]) });
  //     }
  //     return obj2;
  //   }
  //   //#endregion
  //   //#region GetDeveloperSalaryYoe
  //   private GetDeveloperSalaryByYoe() {
  //     //sums the salary
  //     var obj2 = this.GetSumOfSalaryByYoe();

  //     //Calculates the average
  //     this.DeveloperSalaryByYoe = this.GetAverageSalaryByYoe(obj2);
  //   }
  //   //#endregion
  //   private GetLocationInfo() {
  //     //Group respondants by county

  //     /*
  //     name: oslo,
  //     series: [
  //       name: 20-24 år
  //       value: 550 000
  //     ]
  //     */

  //     var counties = this.DeveloperSalaryFormatted.map(function (el) {
  //       return el.county;
  //     });
  //     counties = [...new Set(counties)];
  //     var arr = [];
  //     var DeveloperSalaryByLocationArr = [];
  //     var DevloperResponseByLocationArr = [];
  //     var DevloperResponseByAgeByLocationArr = [];
  //     counties.forEach((c) => {
  //       this.GetSalaryByAgeByLocation(c, arr);
  //       this.GetResponseByAgeByLocation(c, DevloperResponseByAgeByLocationArr);
  //       DeveloperSalaryByLocationArr.push(this.GetAverageSalaryAtLocation(c));
  //       DevloperResponseByLocationArr.push({
  //         name: c,
  //         value: this.GetResponsesByLocation(c),
  //       });
  //     });
  //     this.DeveloperSalaryByAgeWithLocation = arr;
  //     this.DeveloperSalaryByLocation = DeveloperSalaryByLocationArr;
  //     this.DevloperResponseByLocation = DevloperResponseByLocationArr;
  //     this.DevloperResponseByAgeByLocation = DevloperResponseByAgeByLocationArr;
  //     console.log(this.DeveloperSalaryByAgeWithLocation);
  //   }
  //   //#region GetDeveloperSalaryAgeByLocation
  //   private GetSalaryByAgeByLocation(c: any, arr: any[]) {
  //     var LocationSalaryObject = {};
  //     LocationSalaryObject['name'] = c;
  //     var series = this.GetSalaryByAgeWithLocation(c);
  //     LocationSalaryObject['series'] = series;
  //     arr.push(LocationSalaryObject);
  //   }
  //   private GetResponseByAgeByLocation(c: any, arr: any[]) {
  //     var LocationResponseObject = {};
  //     LocationResponseObject['name'] = c;
  //     var series = this.GetResponseByAgeWithLocation(c);
  //     LocationResponseObject['series'] = series;
  //     arr.push(LocationResponseObject);
  //   }
  //   //#endregion
  //   private GetResponsesByLocation(county) {
  //     const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
  //       (c) => c.county === county
  //     );
  //     return DeveloperSalaryCounty.length;
  //   }
  //   private GetResponseByAgeWithLocation(county) {
  //     const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
  //       (c) => c.county === county
  //     );

  //     // Calculate the sums and group data (while tracking count)
  //     const reduced = DeveloperSalaryCounty.reduce(function (m, d) {
  //       if (!m[d.age]) {
  //         m[d.age] = { age: d.age, salary: parseInt(d.salary), count: 1 };
  //         return m;
  //       }
  //       m[d.age].salary += parseInt(d.salary);
  //       m[d.age].count += 1;
  //       return m;
  //     }, {});
  //     // Create new array from grouped data and compute the average
  //     const result = Object.keys(reduced).map(function (k) {
  //       const item = reduced[k];
  //       return {
  //         name: item.age,
  //         value: item.count,
  //       };
  //     });
  //     return result;
  //   }
  //   private GetSalaryByAgeWithLocation(county) {
  //     const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
  //       (c) => c.county === county
  //     );

  //     // Calculate the sums and group data (while tracking count)
  //     const reduced = DeveloperSalaryCounty.reduce(function (m, d) {
  //       if (!m[d.age]) {
  //         m[d.age] = { age: d.age, salary: parseInt(d.salary), count: 1 };
  //         return m;
  //       }
  //       m[d.age].salary += parseInt(d.salary);
  //       m[d.age].count += 1;
  //       return m;
  //     }, {});
  //     // Create new array from grouped data and compute the average
  //     const result = Object.keys(reduced).map(function (k) {
  //       const item = reduced[k];
  //       return {
  //         name: item.age,
  //         value: (item.salary / item.count).toFixed(0),
  //       };
  //     });
  //     console.log(result);
  //     return result;
  //   }
  //   private GetAverageSalaryAtLocation(county) {
  //     const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
  //       (c) => c.county === county
  //     );
  //     console.log(`${DeveloperSalaryCounty.length} responses in ${county}`);
  //     var total = 0;
  //     DeveloperSalaryCounty.forEach((element) => {
  //       total += parseInt(element.salary);
  //     });
  //     total = total / DeveloperSalaryCounty.length;
  //     console.log(`average salary in ${county} is ${total}`);
  //     return { name: county, value: total };
  //   }

  //   private GetRespondantsByAge() {
  //     var result = {};
  //     this.DeveloperSalaryFormatted.forEach(function (i) {
  //       if (!result.hasOwnProperty(i.age)) {
  //         result[i.age] = 0;
  //       } else {
  //         result[i.age]++;
  //       }
  //     });

  //     var responses = [];
  //     for (const [key, value] of Object.entries(result)) {
  //       var obj = { name: key, value: value };
  //       responses.push(obj);
  //     }
  //     this.DeveloperResponseByAge = responses;
  //   }

  //   private GetDeveloperSalaryByAge() {
  //     //sums the salary
  //     var obj2 = this.GetSumOfSalaryByAge();

  //     //Calculates the average
  //     this.DeveloperSalaryByAge = this.GetAverageSalaryByAge(obj2);
  //   }

  //   private GetAverageSalaryByAge(obj2: any[]) {
  //     obj2.forEach((o) => {
  //       var age = o.age;
  //       var sumSalary = o.salary;
  //       var occourance = this.DeveloperSalaryFormatted.reduce(
  //         (acc, cur) => (cur.age === age ? ++acc : acc),
  //         0
  //       );
  //       console.log(
  //         'age: ' +
  //           age +
  //           ' Occours: ' +
  //           this.DeveloperSalaryFormatted.reduce(
  //             (acc, cur) => (cur.age === age ? ++acc : acc),
  //             0
  //           ) +
  //           ' salary: ' +
  //           sumSalary
  //       );
  //       o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
  //     });
  //     obj2 = obj2.map(({ age: name, salary: value, ...rest }) => ({
  //       name,
  //       value,
  //       ...rest,
  //     }));
  //     return obj2;
  //   }

  //   private GetAverageSalaryByYoe(obj2: any[]) {
  //     obj2.forEach((o, index, object) => {
  //       var yoe = o.yoe;
  //       var sumSalary = o.salary;
  //       var occourance = this.DeveloperSalaryFormatted.reduce(
  //         (acc, cur) => (parseInt(cur.yoe) === parseInt(yoe) ? ++acc : acc),
  //         0
  //       );
  //       o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
  //       o.yoe = o.yoe + ` (${occourance})`;
  //       o.responses = parseInt(occourance);
  //     });

  //     obj2 = this.RemoveResponses(obj2);

  //     obj2 = obj2.map(({ yoe: name, salary: value, ...rest }) => ({
  //       name,
  //       value,
  //       ...rest,
  //     }));
  //     return obj2;
  //   }

  //   private RemoveResponses(obj2: any[]) {
  //     const m = this.MinResponses;
  //     obj2 = obj2.filter(function (e) {
  //       return e.responses > m;
  //     });
  //     return obj2;
  //   }

  //   private GetSumOfSalaryByYoe() {
  //     var holder = {};
  //     this.DeveloperSalaryFormatted.forEach(function (d) {
  //       if (holder.hasOwnProperty(d.yoe)) {
  //         holder[d.yoe] += parseInt(d.salary);
  //       } else {
  //         holder[d.yoe] = parseInt(d.salary);
  //         console.log('added YOE: ' + d.yoe);
  //       }
  //     });

  //     var obj2 = [];
  //     for (var prop in holder) {
  //       if (prop != 'ikke oppgitt') {
  //         obj2.push({ yoe: prop, salary: parseInt(holder[prop]) });
  //       }
  //     }
  //     return obj2;
  //   }

  //   private GetSumOfSalaryByAge() {
  //     var holder = {};
  //     this.DeveloperSalaryFormatted.forEach(function (d) {
  //       if (holder.hasOwnProperty(d.age)) {
  //         holder[d.age] += parseInt(d.salary);
  //       } else {
  //         holder[d.age] = parseInt(d.salary);
  //       }
  //     });

  //     var obj2 = [];
  //     for (var prop in holder) {
  //       obj2.push({ age: prop, salary: parseInt(holder[prop]) });
  //     }
  //     return obj2;
  //   }

  //   private FormatValuesForDeveloperSalaryByAge() {
  //     const s = this.MaxSalary;
  //     this.DeveloperSalaryFormatted.forEach((s) => {
  //       s.salary = s.salary.replace(',00 kr', '').replace(/\s/g, ''); //4000000
  //     });

  //     this.DeveloperSalaryFormatted = this.DeveloperSalaryFormatted.filter(
  //       function (e) {
  //         return parseInt(e.salary) < s;
  //       }
  //     );
  //   }

  //   private CreateDeveloperSalaryFormatted() {
  //     this.DeveloperSalaryFormatted = DeveloperSalary.map(
  //       ({
  //         'Hva er din alder?': age,
  //         'Hva er din grunnlønn? (årslønn før skatt, uten eventuelle bonuser eller overtidsbetaling)':
  //           salary,
  //         'Hvor mange års relevant arbeidserfaring har du?': yoe,
  //         'Er du ansatt i det offentlige eller private næringsliv?': sector,
  //         'I hvilket fylke ligger jobben din?': county,
  //         'Har du en av disse begrepene i stillingstittelen din?': title,
  //         'Hva jobber du mest med?': type,
  //         'Har du en bonusordning hos din nåværende arbeidsgiver?': bonus,
  //         ...rest
  //       }) => ({
  //         age,
  //         salary,
  //         yoe,
  //         sector,
  //         county,
  //         title,
  //         type,
  //         bonus,
  //         ...rest,
  //       })
  //     );
  //   }
  // }
  // //#endregion
}
