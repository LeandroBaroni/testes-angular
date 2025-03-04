import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../../core/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-switch',
  templateUrl: './dark-mode-switch.component.html',
  imports: [],
})
export class DarkModeSwitchComponent {
  private darkModeService = inject(DarkModeService);
  isDarkMode = this.darkModeService.get();

  handleSetMode() {
    this.darkModeService.update();
  }
}
