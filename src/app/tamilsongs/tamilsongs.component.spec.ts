import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilsongsComponent } from './tamilsongs.component';

describe('TamilsongsComponent', () => {
  let component: TamilsongsComponent;
  let fixture: ComponentFixture<TamilsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamilsongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
