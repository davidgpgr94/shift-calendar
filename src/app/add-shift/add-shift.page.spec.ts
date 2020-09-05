import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddShiftPage } from './add-shift.page';

describe('AddShiftPage', () => {
  let component: AddShiftPage;
  let fixture: ComponentFixture<AddShiftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShiftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddShiftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
