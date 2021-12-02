import { DeveloperSalary } from './../../../assets/data/DeveloperSalary';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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
  schemeType: string = 'linear';
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#E6BB82', '#D8A235', '#E17A0D', '#872715', '#360D0A'],
  };
  ngOnInit(): void {
    console.log(this.DeveloperSalary[0]);
    this.FormatData();
  }

  FormatData() {
    //Formatting
    this.CreateDeveloperSalaryFormatted();
    this.FormatValuesForDeveloperSalaryByAge();
    //END
    this.GetLocationInfo();
    this.GetRespondantsByAge();
    this.GetDeveloperSalaryByAge();
    this.GetDeveloperSalaryByYoe();
    this.GetDeveloperSalaryByTitle();
    this.GetDeveloperSalaryByType();
    this.GetDeveloperSalaryByBonus();
    this.GetDeveloperSalaryByBonusByAge();

    this.DeveloperSalaryReady = true;
  }
  //#region GetDeveloperSalaryBonusByAge()
  // private GetDeveloperSalaryByBonusByAge() {
  //   // this.DeveloperSalaryByBonusByAge
  //   // this.DeveloperSalaryFormatted
  //   const RespondantsWithoutBonus = this.DeveloperSalaryFormatted.filter(
  //     (c) => c.bonus === 'Ja'
  //   );
  //   const RespondantsWithBonus = this.DeveloperSalaryFormatted.filter(
  //     (c) => c.bonus === 'Nei'
  //   );

  //   console.log(RespondantsWithoutBonus);

  //   // Calculate the sums and group data (while tracking count)
  //   const resultWithBonus =
  //     this.GetAvgSalaryPerAgeByBonus(RespondantsWithBonus);
  //   const resultWithoutBonus = this.GetAvgSalaryPerAgeByBonus(
  //     RespondantsWithoutBonus
  //   );

  //   console.log(resultWithBonus);
  //   console.log(resultWithoutBonus);

  //   this.DeveloperSalaryByBonusByAge = [
  //     {
  //       name: `Har ikke bonus (${RespondantsWithBonus.length})`,
  //       series: resultWithoutBonus,
  //     },
  //     {
  //       name: `Har bonus (${RespondantsWithBonus.length})`,
  //       series: resultWithBonus,
  //     },
  //   ];

  //   console.log(this.DeveloperSalaryByBonusByAge);
  // }

  private GetDeveloperSalaryByBonusByAge() {
    var ages = this.DeveloperSalaryFormatted.map(function (el) {
      return el.age;
    });
    ages.forEach((age) => {
      const ageResponses = this.DeveloperSalaryFormatted.filter(
        (c) => c.age === age
      );
      console.log(ageResponses);
      var x = this.GetAvgSalaryPerAgeByBonus(ages);
      console.log(x);
      // var obj = {name: age + ` (${ageResponses})`, series: }
      // this.DeveloperSalaryByBonusByAge.push(obj);
    });

    console.log(this.DeveloperSalaryByBonusByAge);
  }
  private GetAvgSalaryPerAgeByBonus(Respondants: any[]) {
    const reduced = Respondants.reduce(function (m, d) {
      if (!m[d.bonus]) {
        m[d.bonus] = { bonus: d.bonus, salary: parseInt(d.salary), count: 1 };
        return m;
      }
      m[d.bonus].salary += parseInt(d.salary);
      m[d.bonus].count += 1;
      return m;
    }, {});
    // Create new array from grouped data and compute the average
    const result = Object.keys(reduced).map(function (k) {
      const item = reduced[k];
      return {
        name: item.bonus,
        value: item.salary,
      };
    });
    return result;
  }

  //#endregion

  //#region GetDeveloperSalaryBonus
  private GetDeveloperSalaryByBonus() {
    var SumOfSalaryByBonus = this.GetSumOfSalaryByBonus();
    this.DeveloperSalaryByBonus =
      this.GetAverageOfSalaryByBonus(SumOfSalaryByBonus);

    //sort by salary
    this.DeveloperSalaryByBonus.sort(function (a, b) {
      return parseFloat(a.value) - parseFloat(b.value);
    });
  }

  private GetAverageOfSalaryByBonus(SumOfSalaryByBonus) {
    SumOfSalaryByBonus.forEach((o) => {
      var bonus = o.bonus;
      var sumSalary = o.salary;
      var occourance = this.DeveloperSalaryFormatted.reduce(
        (acc, cur) => (cur.bonus === bonus ? ++acc : acc),
        0
      );
      o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
      o.bonus = o.bonus + ` (${occourance})`;
      o.responses = occourance;
      console.log(`salary: ${o.salary} --- bonus: ${o.bounus}`);
    });
    SumOfSalaryByBonus = this.RemoveResponses(SumOfSalaryByBonus);
    SumOfSalaryByBonus = SumOfSalaryByBonus.map(
      ({ bonus: name, salary: value, ...rest }) => ({
        name,
        value,
        ...rest,
      })
    );
    return SumOfSalaryByBonus;
  }

  private GetSumOfSalaryByBonus() {
    var holder = {};
    var obj2 = [];
    this.DeveloperSalaryFormatted.forEach(function (d) {
      if (holder.hasOwnProperty(d.bonus)) {
        holder[d.bonus] += parseInt(d.salary);
      } else {
        holder[d.bonus] = parseInt(d.salary);
      }
    });

    for (var prop in holder) {
      obj2.push({ bonus: prop, salary: parseInt(holder[prop]) });
    }
    return obj2;
  }
  //#endregion

  //#region GetDeveloperSalaryType
  private GetDeveloperSalaryByType() {
    var SumOfSalaryByType = this.GetSumOfSalaryByType();
    this.DeveloperSalaryByType =
      this.GetAverageOfSalaryByType(SumOfSalaryByType);

    //sort by salary
    this.DeveloperSalaryByType.sort(function (a, b) {
      return parseFloat(a.value) - parseFloat(b.value);
    });
  }

  private GetAverageOfSalaryByType(SumOfSalaryByTitle) {
    SumOfSalaryByTitle.forEach((o) => {
      var type = o.type;
      var sumSalary = o.salary;
      var occourance = this.DeveloperSalaryFormatted.reduce(
        (acc, cur) => (cur.type === type ? ++acc : acc),
        0
      );
      o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
      o.type = o.type + ` (${occourance})`;
      o.responses = occourance;
    });
    SumOfSalaryByTitle = this.RemoveResponses(SumOfSalaryByTitle);
    SumOfSalaryByTitle = SumOfSalaryByTitle.map(
      ({ type: name, salary: value, ...rest }) => ({
        name,
        value,
        ...rest,
      })
    );
    return SumOfSalaryByTitle;
  }

  private GetSumOfSalaryByType() {
    var holder = {};
    var obj2 = [];
    this.DeveloperSalaryFormatted.forEach(function (d) {
      if (holder.hasOwnProperty(d.type)) {
        holder[d.type] += parseInt(d.salary);
      } else {
        holder[d.type] = parseInt(d.salary);
      }
    });

    for (var prop in holder) {
      obj2.push({ type: prop, salary: parseInt(holder[prop]) });
    }
    return obj2;
  }
  //#endregion
  //#region GetDeveloperSalaryTitle
  private GetDeveloperSalaryByTitle() {
    var SumOfSalaryByTitle = this.GetSumOfSalaryByTitle();
    this.DeveloperSalartByTitle =
      this.GetAverageOfSalaryByTitle(SumOfSalaryByTitle);

    //sort by salary
    this.DeveloperSalartByTitle.sort(function (a, b) {
      return parseFloat(a.value) - parseFloat(b.value);
    });
  }
  private GetAverageOfSalaryByTitle(SumOfSalaryByTitle) {
    SumOfSalaryByTitle.forEach((o) => {
      var title = o.title;
      var sumSalary = o.salary;
      var occourance = this.DeveloperSalaryFormatted.reduce(
        (acc, cur) => (cur.title === title ? ++acc : acc),
        0
      );
      o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
      console.log(
        `title: ${title} --- avgSalary: ${o.salary} --- responses: ${occourance}`
      );
    });
    SumOfSalaryByTitle = SumOfSalaryByTitle.filter(function (e) {
      e.title = e.title.replace(/(^\.+|\.+$)/gm, '');
      return e.title !== 'nei';
    });
    SumOfSalaryByTitle = SumOfSalaryByTitle.map(
      ({ title: name, salary: value, ...rest }) => ({
        name,
        value,
        ...rest,
      })
    );
    return SumOfSalaryByTitle;
  }

  private GetSumOfSalaryByTitle() {
    var holder = {};
    var obj2 = [];
    this.DeveloperSalaryFormatted.forEach(function (d) {
      if (holder.hasOwnProperty(d.title)) {
        holder[d.title] += parseInt(d.salary);
      } else {
        holder[d.title] = parseInt(d.salary);
      }
    });

    for (var prop in holder) {
      obj2.push({ title: prop, salary: parseInt(holder[prop]) });
    }
    return obj2;
  }
  //#endregion
  //#region GetDeveloperSalaryYoe
  private GetDeveloperSalaryByYoe() {
    //sums the salary
    var obj2 = this.GetSumOfSalaryByYoe();

    //Calculates the average
    this.DeveloperSalaryByYoe = this.GetAverageSalaryByYoe(obj2);
  }
  //#endregion
  private GetLocationInfo() {
    //Group respondants by county

    /*
    name: oslo,
    series: [
      name: 20-24 år
      value: 550 000
    ] 
    */

    var counties = this.DeveloperSalaryFormatted.map(function (el) {
      return el.county;
    });
    counties = [...new Set(counties)];
    var arr = [];
    var DeveloperSalaryByLocationArr = [];
    var DevloperResponseByLocationArr = [];
    var DevloperResponseByAgeByLocationArr = [];
    counties.forEach((c) => {
      this.GetSalaryByAgeByLocation(c, arr);
      this.GetResponseByAgeByLocation(c, DevloperResponseByAgeByLocationArr);
      DeveloperSalaryByLocationArr.push(this.GetAverageSalaryAtLocation(c));
      DevloperResponseByLocationArr.push({
        name: c,
        value: this.GetResponsesByLocation(c),
      });
    });
    this.DeveloperSalaryByAgeWithLocation = arr;
    this.DeveloperSalaryByLocation = DeveloperSalaryByLocationArr;
    this.DevloperResponseByLocation = DevloperResponseByLocationArr;
    this.DevloperResponseByAgeByLocation = DevloperResponseByAgeByLocationArr;
    console.log(this.DeveloperSalaryByAgeWithLocation);
  }
  //#region GetDeveloperSalaryAgeByLocation
  private GetSalaryByAgeByLocation(c: any, arr: any[]) {
    var LocationSalaryObject = {};
    LocationSalaryObject['name'] = c;
    var series = this.GetSalaryByAgeWithLocation(c);
    LocationSalaryObject['series'] = series;
    arr.push(LocationSalaryObject);
  }
  private GetResponseByAgeByLocation(c: any, arr: any[]) {
    var LocationResponseObject = {};
    LocationResponseObject['name'] = c;
    var series = this.GetResponseByAgeWithLocation(c);
    LocationResponseObject['series'] = series;
    arr.push(LocationResponseObject);
  }
  //#endregion
  private GetResponsesByLocation(county) {
    const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
      (c) => c.county === county
    );
    return DeveloperSalaryCounty.length;
  }
  private GetResponseByAgeWithLocation(county) {
    const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
      (c) => c.county === county
    );

    // Calculate the sums and group data (while tracking count)
    const reduced = DeveloperSalaryCounty.reduce(function (m, d) {
      if (!m[d.age]) {
        m[d.age] = { age: d.age, salary: parseInt(d.salary), count: 1 };
        return m;
      }
      m[d.age].salary += parseInt(d.salary);
      m[d.age].count += 1;
      return m;
    }, {});
    // Create new array from grouped data and compute the average
    const result = Object.keys(reduced).map(function (k) {
      const item = reduced[k];
      return {
        name: item.age,
        value: item.count,
      };
    });
    return result;
  }
  private GetSalaryByAgeWithLocation(county) {
    const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
      (c) => c.county === county
    );

    // Calculate the sums and group data (while tracking count)
    const reduced = DeveloperSalaryCounty.reduce(function (m, d) {
      if (!m[d.age]) {
        m[d.age] = { age: d.age, salary: parseInt(d.salary), count: 1 };
        return m;
      }
      m[d.age].salary += parseInt(d.salary);
      m[d.age].count += 1;
      return m;
    }, {});
    // Create new array from grouped data and compute the average
    const result = Object.keys(reduced).map(function (k) {
      const item = reduced[k];
      return {
        name: item.age,
        value: (item.salary / item.count).toFixed(0),
      };
    });
    console.log(result);
    return result;
  }
  private GetAverageSalaryAtLocation(county) {
    const DeveloperSalaryCounty = this.DeveloperSalaryFormatted.filter(
      (c) => c.county === county
    );
    console.log(`${DeveloperSalaryCounty.length} responses in ${county}`);
    var total = 0;
    DeveloperSalaryCounty.forEach((element) => {
      total += parseInt(element.salary);
    });
    total = total / DeveloperSalaryCounty.length;
    console.log(`average salary in ${county} is ${total}`);
    return { name: county, value: total };
  }

  private GetRespondantsByAge() {
    var result = {};
    this.DeveloperSalaryFormatted.forEach(function (i) {
      if (!result.hasOwnProperty(i.age)) {
        result[i.age] = 0;
      } else {
        result[i.age]++;
      }
    });

    var responses = [];
    for (const [key, value] of Object.entries(result)) {
      var obj = { name: key, value: value };
      responses.push(obj);
    }
    this.DeveloperResponseByAge = responses;
  }

  private GetDeveloperSalaryByAge() {
    //sums the salary
    var obj2 = this.GetSumOfSalaryByAge();

    //Calculates the average
    this.DeveloperSalaryByAge = this.GetAverageSalaryByAge(obj2);
  }

  private GetAverageSalaryByAge(obj2: any[]) {
    obj2.forEach((o) => {
      var age = o.age;
      var sumSalary = o.salary;
      var occourance = this.DeveloperSalaryFormatted.reduce(
        (acc, cur) => (cur.age === age ? ++acc : acc),
        0
      );
      console.log(
        'age: ' +
          age +
          ' Occours: ' +
          this.DeveloperSalaryFormatted.reduce(
            (acc, cur) => (cur.age === age ? ++acc : acc),
            0
          ) +
          ' salary: ' +
          sumSalary
      );
      o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
    });
    obj2 = obj2.map(({ age: name, salary: value, ...rest }) => ({
      name,
      value,
      ...rest,
    }));
    return obj2;
  }

  private GetAverageSalaryByYoe(obj2: any[]) {
    obj2.forEach((o, index, object) => {
      var yoe = o.yoe;
      var sumSalary = o.salary;
      var occourance = this.DeveloperSalaryFormatted.reduce(
        (acc, cur) => (parseInt(cur.yoe) === parseInt(yoe) ? ++acc : acc),
        0
      );
      o.salary = (parseInt(sumSalary) / occourance).toFixed(0);
      o.yoe = o.yoe + ` (${occourance})`;
      o.responses = parseInt(occourance);
    });

    obj2 = this.RemoveResponses(obj2);

    obj2 = obj2.map(({ yoe: name, salary: value, ...rest }) => ({
      name,
      value,
      ...rest,
    }));
    return obj2;
  }

  private RemoveResponses(obj2: any[]) {
    const m = this.MinResponses;
    obj2 = obj2.filter(function (e) {
      return e.responses > m;
    });
    return obj2;
  }

  private GetSumOfSalaryByYoe() {
    var holder = {};
    this.DeveloperSalaryFormatted.forEach(function (d) {
      if (holder.hasOwnProperty(d.yoe)) {
        holder[d.yoe] += parseInt(d.salary);
      } else {
        holder[d.yoe] = parseInt(d.salary);
        console.log('added YOE: ' + d.yoe);
      }
    });

    var obj2 = [];
    for (var prop in holder) {
      if (prop != 'ikke oppgitt') {
        obj2.push({ yoe: prop, salary: parseInt(holder[prop]) });
      }
    }
    return obj2;
  }

  private GetSumOfSalaryByAge() {
    var holder = {};
    this.DeveloperSalaryFormatted.forEach(function (d) {
      if (holder.hasOwnProperty(d.age)) {
        holder[d.age] += parseInt(d.salary);
      } else {
        holder[d.age] = parseInt(d.salary);
      }
    });

    var obj2 = [];
    for (var prop in holder) {
      obj2.push({ age: prop, salary: parseInt(holder[prop]) });
    }
    return obj2;
  }

  private FormatValuesForDeveloperSalaryByAge() {
    const s = this.MaxSalary;
    this.DeveloperSalaryFormatted.forEach((s) => {
      s.salary = s.salary.replace(',00 kr', '').replace(/\s/g, ''); //4000000
    });

    this.DeveloperSalaryFormatted = this.DeveloperSalaryFormatted.filter(
      function (e) {
        return parseInt(e.salary) < s;
      }
    );
  }

  private CreateDeveloperSalaryFormatted() {
    this.DeveloperSalaryFormatted = DeveloperSalary.map(
      ({
        'Hva er din alder?': age,
        'Hva er din grunnlønn? (årslønn før skatt, uten eventuelle bonuser eller overtidsbetaling)':
          salary,
        'Hvor mange års relevant arbeidserfaring har du?': yoe,
        'Er du ansatt i det offentlige eller private næringsliv?': sector,
        'I hvilket fylke ligger jobben din?': county,
        'Har du en av disse begrepene i stillingstittelen din?': title,
        'Hva jobber du mest med?': type,
        'Har du en bonusordning hos din nåværende arbeidsgiver?': bonus,
        ...rest
      }) => ({
        age,
        salary,
        yoe,
        sector,
        county,
        title,
        type,
        bonus,
        ...rest,
      })
    );
  }
}
