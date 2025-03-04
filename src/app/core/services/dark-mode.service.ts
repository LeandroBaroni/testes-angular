import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkMode = signal(false);

  get(): Signal<boolean> {
    return this.isDarkMode.asReadonly();
  }

  update(): void {
    this.isDarkMode.update((value) => !value);
  }
}
