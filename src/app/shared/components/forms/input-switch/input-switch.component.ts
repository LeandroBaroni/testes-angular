import { Component, Input } from '@angular/core';
import { inputUUID } from '../../../../core/utils/inputUUID';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
})
export class InputSwitchComponent {
  @Input() id = inputUUID();
  @Input() item: any;
  @Input() title = 'Confirmação';
}
