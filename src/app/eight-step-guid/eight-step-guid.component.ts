import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eight-step-guid',
  templateUrl: './eight-step-guid.component.html',
  styleUrls: ['./eight-step-guid.component.scss'],
})
export class EightStepGuidComponent implements OnInit {

  showForm: boolean = false;

  name: string = '';
  email: string = '';

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {}

  toggleShowForm() {
    this.showForm = !this.showForm;
  }

  processDownloadClick() {
    // Download PDF

    this.navController.navigateForward('/jumpstart', {
      animated: false,
    });
  }

}
