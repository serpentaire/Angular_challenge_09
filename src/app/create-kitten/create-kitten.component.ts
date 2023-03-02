import { Component, OnInit, Input } from '@angular/core';
import { Chatons } from '../models/chatons.model';
import { ChatonsService } from '../chatons.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {
  public formGroup!: FormGroup;
  public inValidate = false;

  @Input() chatons: Chatons[] = [];

  constructor(public chatonsService: ChatonsService, private _fb: FormBuilder ) {}

  ngOnInit(): void {

    this.formGroup = this._fb.group({
      nom: new FormControl('', Validators.required),
      race: new FormControl('', Validators.required),
      dateNaissance: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    })
  }

 onSubmit() {
  const maxLastId = this.chatons.map((chaton) => chaton.id).sort((a,b) => a-b).pop()
  console.log(maxLastId);
  if (maxLastId) {
    this.chatons.push({...{"id":maxLastId + 1}, ... this.formGroup.value})
  }
  console.log(this.chatons);
  }

  handleValidate() {
    this.inValidate = true
  }

}
