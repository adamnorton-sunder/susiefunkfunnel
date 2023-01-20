import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JumpstartSessionPageComponent } from './jumpstart-session-page.component';

describe('JumpstartSessionPageComponent', () => {
  let component: JumpstartSessionPageComponent;
  let fixture: ComponentFixture<JumpstartSessionPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpstartSessionPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JumpstartSessionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
