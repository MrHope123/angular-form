import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personForm!: FormGroup;

  ngOnInit() {
    this.personForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required),
      }),
      gender: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      console.log('Form Submitted Successfully:', this.personForm.value);
      alert('Form submitted successfully!');
      this.personForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
