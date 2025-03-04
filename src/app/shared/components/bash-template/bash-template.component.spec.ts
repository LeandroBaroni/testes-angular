import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BashTemplateComponent } from './bash-template.component';

describe('BashTemplateComponent', () => {
  let component: BashTemplateComponent;
  let fixture: ComponentFixture<BashTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BashTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BashTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
