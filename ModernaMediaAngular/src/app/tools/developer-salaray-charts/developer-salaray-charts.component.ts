import { DeveloperSalary } from './../../../assets/data/DeveloperSalary';
import { Component, OnInit } from '@angular/core';

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
  RespondantsByAge: any[];
  RespondantsByLocation: any[];
  RespondantsByAgeByLocation: any[];
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
  RespondantsAgeByTitle: any[];
  RespondantsYoeByTitle: any[];
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
  constructor() {
    Object.assign(this, { DeveloperSalary });

    var width = window.innerWidth / 1.1;
    this.vw = width > 700 ? 700 : window.innerWidth / 1.1;
    var height = this.vw / 0.75 > 400 ? 400 : this.vw / 0.75;
    this.view = [this.vw, height];
  }

  onResize(event) {
    var width = window.innerWidth / 1.1;
    this.vw = width > 700 ? 700 : window.innerWidth / 1.1;
    var height = this.vw / 0.75 > 400 ? 400 : this.vw / 0.75;
    this.view = [this.vw, height];
  }

  ngOnInit(): void {
    this.FormatData();
  }

  FormatData() {
    this.UpdateKeys();
    this.UpdateValues();
    this.FixSalaries();

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

    // this.ValueSalaryByAge = this.GetAverageNumberValueBasedOnType(
    //   'age',
    //   'salary',
    //   null,
    //   null
    // );
    this.RespondantsByAgeByBonus = this.GetResponsesBasedOnTypeByGroup(
      'bonus',
      'age',
      this.GetListOfAnswersFor('age'),
      'age'
    );
    this.RespondantsBySectorByBonus = this.GetResponsesBasedOnTypeByGroup(
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
    this.RespondantsAgeByTitle = this.GetResponsesBasedOnTypeByGroup(
      'age',
      'title',
      this.GetListOfAnswersFor('title'),
      'title'
    );
    this.RespondantsAgeByTitle = this.RespondantsAgeByTitle.filter(function (
      obj
    ) {
      return obj.name !== 'nei';
    });
    this.RespondantsYoeByTitle = this.GetResponsesBasedOnTypeByGroup(
      'yoe',
      'title',
      this.GetListOfAnswersFor('title'),
      'title'
    );
    this.RespondantsYoeByTitle = this.RespondantsYoeByTitle.filter(function (
      obj
    ) {
      return obj.name !== 'nei';
    });
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
