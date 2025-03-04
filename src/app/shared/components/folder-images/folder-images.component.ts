import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-folder-images',
  imports: [],
  templateUrl: './folder-images.component.html',
})
export class FolderImagesComponent {
  @Input() images: string[] = [];
}
