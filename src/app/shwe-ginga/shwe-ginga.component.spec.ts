import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShweGingaComponent } from './shwe-ginga.component';

describe('ShweGingaComponent', () => {
  let component: ShweGingaComponent;
  let fixture: ComponentFixture<ShweGingaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShweGingaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShweGingaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
