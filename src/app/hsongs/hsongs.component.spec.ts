import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsongsComponent } from './hsongs.component';

describe('HsongsComponent', () => {
  let component: HsongsComponent;
  let fixture: ComponentFixture<HsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
