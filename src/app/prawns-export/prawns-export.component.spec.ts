import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrawnsExportComponent } from './prawns-export.component';

describe('PrawnsExportComponent', () => {
  let component: PrawnsExportComponent;
  let fixture: ComponentFixture<PrawnsExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrawnsExportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrawnsExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
