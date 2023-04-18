import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGocComponent } from './about-goc.component';

describe('AboutGocComponent', () => {
  let component: AboutGocComponent;
  let fixture: ComponentFixture<AboutGocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
