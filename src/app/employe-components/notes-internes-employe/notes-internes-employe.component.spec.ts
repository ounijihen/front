import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesInternesEmployeComponent } from './notes-internes-employe.component';

describe('NotesInternesEmployeComponent', () => {
  let component: NotesInternesEmployeComponent;
  let fixture: ComponentFixture<NotesInternesEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesInternesEmployeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesInternesEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
