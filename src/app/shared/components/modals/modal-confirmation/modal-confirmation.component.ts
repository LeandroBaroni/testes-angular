import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  templateUrl: './modal-confirmation.component.html',
  imports: [LucideAngularModule],
})
export class ModalConfirmationComponent {
  private ngbActiveModal = inject(NgbActiveModal);
  title: string;
  subtitle: string;
  btnConfirmText: string;
  btnDenyText: string;

  handleConfirm(value: boolean) {
    this.ngbActiveModal.close(value);
  }
}
