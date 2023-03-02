import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {
  @Input() mesChatons: any = []
  constructor() {}
  ngOnInit() {}
}
