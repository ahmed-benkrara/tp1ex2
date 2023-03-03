import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() color = 'black';
  @Input() background = '#0000000b';
  @Input() text : String = 'empty';
}
