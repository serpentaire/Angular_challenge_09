import { Component, OnInit } from '@angular/core';
import { Chatons } from '../models/chatons.model';
import { ChatonsService } from '../chatons.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  chatons: Chatons[] = [];
  mesChatons: any = []
  constructor(public chatonsService: ChatonsService ) {}

  ngOnInit(): void {
    this.chatonsService.getChatons().subscribe(chatonsFromJsonFile => {
      this.chatons = chatonsFromJsonFile;
    });
  }

adopCat(nb : number) {
  console.log(nb);
  this.mesChatons.push(this.chatons[nb])
  this.chatons.splice(nb,1)
  console.log(this.chatons);
}

}
