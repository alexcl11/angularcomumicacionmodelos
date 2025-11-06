import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDeporte } from './hijo.deporte';

describe('HijoDeporte', () => {
  let component: HijoDeporte;
  let fixture: ComponentFixture<HijoDeporte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoDeporte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoDeporte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
