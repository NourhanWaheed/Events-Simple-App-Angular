import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSpeakerComponent } from './details-speaker.component';

describe('DetailsSpeakerComponent', () => {
  let component: DetailsSpeakerComponent;
  let fixture: ComponentFixture<DetailsSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
