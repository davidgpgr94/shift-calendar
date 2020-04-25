import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaysGridComponent } from './days-grid.component';

describe('DaysGridComponent', () => {
  let component: DaysGridComponent;
  let fixture: ComponentFixture<DaysGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysGridComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaysGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
