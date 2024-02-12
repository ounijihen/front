import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoEmployeComponent } from './update-info-employe.component';

describe('UpdateInfoEmployeComponent', () => {
  let component: UpdateInfoEmployeComponent;
  let fixture: ComponentFixture<UpdateInfoEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateInfoEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateInfoEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
