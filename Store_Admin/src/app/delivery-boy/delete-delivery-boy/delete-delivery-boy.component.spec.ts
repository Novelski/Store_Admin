import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteDeliveryBoyComponent } from './delete-delivery-boy.component';

describe('DeleteDeliveryBoyComponent', () => {
  let component: DeleteDeliveryBoyComponent;
  let fixture: ComponentFixture<DeleteDeliveryBoyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDeliveryBoyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDeliveryBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
