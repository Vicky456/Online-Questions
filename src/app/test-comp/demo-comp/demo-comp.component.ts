import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: '.app-demo-comp',
  templateUrl: './demo-comp.component.html',
  styleUrls: ['./demo-comp.component.css']
})
export class DemoCompComponent implements OnInit, AfterViewInit {
  private qusOption: number[];

  timedata;

  constructor(private httpClient: HttpClient) { }

  jsonRes;
  duration;
  currentid;
  durationdisplay;
  timerref;

  resData;

  ngAfterViewInit(): void {
    // $('#rootwizard').bootstrapWizard();
  }

  ngOnInit() {

    this.qusOption = Array.from(new Array(30), (val, index) => index + 1);
    this.duration = Array.from(new Array(30), (val, index) => 10);
    this.durationdisplay = Array.from(new Array(30), (val, index) => '');
    this.resData = Array.from(new Array(30), (val, index) => []);
    this.apiCallJson();

  }


  async apiCallJson() {
    const self = this;
    // const endpoint =  `http://jservice.io/api/random?count=3`;
    const endpoint =  `https://opentdb.com/api.php?amount=30`;
    return this.httpClient.get<void>(endpoint).subscribe((res) => {
      console.log(res);
      res.results = res.results.map(function(resData) {
        resData.incorrect_answers.push(resData.correct_answer);
        (resData.incorrect_answers).sort(() => Math.random() - 0.5);
        return resData;
      });
      this.jsonRes = res;

      setTimeout(function () {
        $('#rootwizard').bootstrapWizard();
        self.startTimer(60 * 5);
      }, 500);
    });

  }





  startTimer(duration) {
    const self = this;
    let timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      self.timedata = minutes + ':' + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }


  movefunciton(id) {
    const self = this;
    if (this.currentid === undefined) {
      this.currentid = id;
      this.counterMicroThread(self.duration[self.currentid]);
    }
  }


  counterMicroThread(duration) {
    const self = this;
    let timer, minutes, seconds;
    timer = duration;
    this.timerref = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        self.durationdisplay[self.currentid] = 'Time for : ' + minutes + ':' + seconds;

        if (--timer < 0) {
          self.duration[self.currentid] = 0;
          clearInterval(self.timerref);
        } else {
          self.duration[self.currentid] = timer;
        }
    }, 1000);
  }

  leavefunciton() {
    this.currentid = undefined;
    clearInterval(this.timerref);
  }


  optionchange(id, val) {
    this.resData[id].push({id: id, val: val, date: new Date()});
    console.log(this.resData[id]);
  }
}
