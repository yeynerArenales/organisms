import { Component, OnInit } from '@angular/core';
import { OrganismsService } from 'src/app/services/organisms.service';
import { responseApi } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private orgSvc: OrganismsService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.orgSvc.getData().subscribe((info: responseApi)=> {
      console.log(info.data.sort( (first, second) => {
        let a = Number(first.ID)
        let b = Number(second.ID)
        return a - b
    }))
    })
  }

}
