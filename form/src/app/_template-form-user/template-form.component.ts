import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'template_form-user',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class OrderFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  formErrors = {
    name: '',
    username: '',
    tel: ''
  };
  validationMsg = {
    name: {
      required : 'Name is required.',
      minlength: 'Minimum 3 characters',
      pattern: 'The name must contain only letters'
    },
    username: {
      required : 'Name is required.',
      minlength: 'Minimum 3 characters',
      pattern: 'The name must contain only letters'
    },
    tel: {
      required : 'Name is required.',
      pattern: 'Not a valid number. Examples +380500000000'
    }
  }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Za-яА-Я]+")]],
      username: ['',[Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Za-яА-Я]+")]],
      tel: ['',[Validators.required, Validators.pattern(/^\+380\d{3}\d{2}\d{2}\d{2}$/ )]]
    });
    this.form.valueChanges.subscribe(data => {
      this.validateForm()
    })

  }
  validateForm() {
    for( let field in this.formErrors) {
      this.formErrors[field] = '';
      let input = this.form.get(field);

      if(input.invalid && input.dirty) {
       for( let error in input.errors ) {
         this.formErrors[field] = this.validationMsg[field][error]
       }
      }
    }
  }

  processForm = () =>{
    this.submitted = true;
    console.log('get user', JSON.stringify(this.form.value))
  }

}
