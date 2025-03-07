import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'; // იმპორტირება

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  calculatorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.calculatorForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      container: ['', Validators.required],
      start: ['', Validators.required],
      weight: ['', Validators.required],
      seaLine: ['', Validators.required]
    });
  }

  ngOnInit() {
    // აქ შეგიძლიათ დაამატოთ ინიციალიზაციის ლოგიკა
  }

  calculate() {
    // აქ უნდა ჩაწეროთ გამოთვლის ლოგიკა
    // ...

    // SweetAlert2-ის მოდალური ფანჯრის ჩვენება
    Swal.fire({
      title: 'მონაცემები წარმატებით გაიგზავნა!',
      icon: 'success', // წარმატების ხატულა
      confirmButtonText: 'კარგი' // ღილაკის ტექსტი
    });
  }
}