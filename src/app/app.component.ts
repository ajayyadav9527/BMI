import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmi-app';


  height: number = 0;
  weight: number = 0;
  bmiResult: string = '';
  bmiCategory: string = '';

  calculateBMI() {
    if (this.height <= 0 || this.weight <= 0) {
      alert('Please enter valid numbers for height and weight.');
      return;
    }

    const heightInMeters = this.height / 100;
    const weightInKg = this.weight;

    // Calculate BMI
    const bmi = weightInKg / (heightInMeters * heightInMeters);

    // Determine BMI category and result message
    if (bmi < 18.5) {
      this.bmiCategory = 'underweight';
      this.bmiResult = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
    } else if (bmi < 24.9) {
      this.bmiCategory = 'normal weight';
      this.bmiResult = `Your BMI is ${bmi.toFixed(
        2
      )}. You have a normal weight.`;
    } else if (bmi < 29.9) {
      this.bmiCategory = 'overweight';
      this.bmiResult = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
    } else {
      this.bmiCategory = 'obese';
      this.bmiResult = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
    }
  }
}
