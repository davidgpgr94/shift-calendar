import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaysHeadComponent } from './days-head.component';

describe('DaysHeadComponent', () => {
  let component: DaysHeadComponent;
  let fixture: ComponentFixture<DaysHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysHeadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaysHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
