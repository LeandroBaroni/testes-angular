import { Component, inject, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bash-template',
  templateUrl: './bash-template.component.html',
})
export class BashTemplateComponent {
  private toastrService = inject(ToastrService);
  @Input() text: string;

  async handleCopy() {
    if (!this.text) {
      return;
    }

    await navigator.clipboard.writeText(this.text);
    this.toastrService.success('Texto copiado');
  }
}
