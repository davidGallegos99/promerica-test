import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTablaComponent } from './orden-tabla.component';

describe('OrdenTablaComponent', () => {
  let component: OrdenTablaComponent;
  let fixture: ComponentFixture<OrdenTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
