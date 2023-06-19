import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private e:ElementRef){
  }
  ngAfterViewInit() {

    this.e.nativeElement.ownerDocument
}

}
