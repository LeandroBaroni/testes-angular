import { inject, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmationComponent } from './modal-confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class ModalConfirmationService {
  private ngbModal = inject(NgbModal);

  async open(title: string, subtitle: string, btnConfirmText: string, btnDenyText: string): Promise<boolean> {
    const ngbModalRef = this.ngbModal.open(ModalConfirmationComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });

    ngbModalRef.componentInstance.title = title;
    ngbModalRef.componentInstance.subtitle = subtitle;
    ngbModalRef.componentInstance.btnConfirmText = btnConfirmText;
    ngbModalRef.componentInstance.btnDenyText = btnDenyText;

    const result: boolean = await ngbModalRef.result;

    return result;
  }
}
