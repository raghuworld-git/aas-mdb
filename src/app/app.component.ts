import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-ui-kit-free';
  dummyLaunchImg: string = "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/launcher_images/long2520march25204_image_20190520170012.jpeg";
  picofday: string = "https://apod.nasa.gov/apod/image/2209/SnakingFilament_Friedman_960.jpg";

}
