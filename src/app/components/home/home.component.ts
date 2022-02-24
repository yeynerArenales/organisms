import { Component, OnInit } from '@angular/core';
import { OrganismsService } from 'src/app/services/organisms.service';
import { responseApi, organism } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: organism[] = [];

  constructor(
    private orgSvc: OrganismsService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.orgSvc.getData().subscribe((info: responseApi) => {
      this.data = info.data.sort((first, second) => {
        let a = Number(first.ID)
        let b = Number(second.ID)
        return a - b
      })
    })
  }

  findParent(organism: organism) {
    if(this.data.length){
      let parent = this.data.find(org => Number(org.ID) == organism.Parent)?.Name
      if (parent) {
        return parent
      }
    }

    return 'Has no parent'
  }

}
