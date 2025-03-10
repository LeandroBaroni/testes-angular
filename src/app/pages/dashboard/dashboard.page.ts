import { Component, inject } from '@angular/core';
import { BashTemplateComponent } from '../../shared/components/bash-template/bash-template.component';
import { DarkModeSwitchComponent } from '../../shared/components/dark-mode-switch/dark-mode-switch.component';
import { ModalConfirmationService } from '../../shared/components/modals/modal-confirmation/modal-confirmation.service';

@Component({
  templateUrl: './dashboard.page.html',
  imports: [BashTemplateComponent, DarkModeSwitchComponent],
})
export class DashboardPage {
  private modalConfirmationService = inject(ModalConfirmationService);
  async openModal() {
    const result = await this.modalConfirmationService.open(
      'Deactivate/Delete account',
      'Are you sure? You want to Deactivate your account.',
      'Deactivate',
      'Delete Permanently'
    );

    console.log(result);
  }
}
