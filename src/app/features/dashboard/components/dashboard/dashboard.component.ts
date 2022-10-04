import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  dummyLaunchImg: string = "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/launcher_images/long2520march25204_image_20190520170012.jpeg";
  picofday: string = "https://apod.nasa.gov/apod/image/2209/NGC3576_Willocks_3300_Starless.jpg";
  astronaut = "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/albert2520sacco_image_20190211162452.jpeg";


  ngOnInit(): void {
  }

}
