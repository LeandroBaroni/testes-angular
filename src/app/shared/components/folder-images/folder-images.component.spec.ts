import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderImagesComponent } from './folder-images.component';

describe('FolderImagesComponent', () => {
  let component: FolderImagesComponent;
  let fixture: ComponentFixture<FolderImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
