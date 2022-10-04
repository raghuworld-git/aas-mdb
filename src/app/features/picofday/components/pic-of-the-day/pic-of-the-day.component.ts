import { Component, OnDestroy, OnInit } from '@angular/core';
import { PicOfDayService } from '@features/picofday/picofday.service';
import { APOD } from '@models/apod/apod.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.scss']
})
export class PicOfTheDayComponent implements OnInit, OnDestroy {

  constructor(private _podService: PicOfDayService) { }

  private podSubscribe: Subscription | null = null;

  public podResult: APOD | null = null;
  public currentDate: string;
  public selectedDate:string;
  public minDate: string;

  ngOnInit(): void {
    this.getAPOD();
    this.currentDate = this.selectedDate = this._podService.getCurrentDate();
    this.minDate = this._podService.getMinDateOfAPODRepo();
  }

  ngOnDestroy(): void {
    this.podSubscribe?.unsubscribe();
  }

  private getAPOD(date: string | null = null) {
    this.podResult = null;
    this.selectedDate = "";
    this.podSubscribe = this._podService.getAPOD(date)
      .subscribe((data) => {
        this.podResult = data;
        this.selectedDate =  this.podResult?.date;
      });
  }

  changekey(event:any) {
      console.log(event.target.value);
      this.getAPOD(event.target.value);
  }

}
