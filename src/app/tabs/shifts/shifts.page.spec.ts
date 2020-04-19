import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { ShiftsPage } from './shifts.page';

describe('Tab1Page', () => {
  let component: ShiftsPage;
  let fixture: ComponentFixture<ShiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
