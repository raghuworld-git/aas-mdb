import { Injectable } from "@angular/core";
import { CustomHttpService } from "@core/services/customHttp.service";
import { APOD } from "@models/apod/apod.interface";
import { Observable } from "rxjs";
import { PicofdayModule } from "./picofday.module";

@Injectable({
  providedIn: 'root'
})
export class PicOfDayService {

  constructor(private _httpService: CustomHttpService) { }

  private picofdayAction: string = "NASA/GetAPOD";

  getAPOD(date: string | null | undefined): Observable<APOD> {
    let params: { name: string, value: string }[] = [];
    if (date != null) {
      params.push({ name: 'date', value: date });
    }
    return this._httpService.get<APOD>(this.picofdayAction, params);
  }

  getCurrentDate(): string {
    let currentDate = new Date();
    return `${currentDate.getFullYear()}-${this.appendZero(currentDate.getMonth() + 1)}-${this.appendZero(currentDate.getDate())}`;
  }

  getMinDateOfAPODRepo(): string {
    return "1995-06-16";
  }

  private appendZero(num: number): string {
    if (num.toString().length == 1) {
      return `0${num.toString()}`;
    }
    return num.toString();
  }
}
