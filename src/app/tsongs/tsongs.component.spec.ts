import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsongsComponent } from './tsongs.component';

describe('TsongsComponent', () => {
  let component: TsongsComponent;
  let fixture: ComponentFixture<TsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
