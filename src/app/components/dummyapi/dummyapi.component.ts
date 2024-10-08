import { Component } from '@angular/core';
import { DummyapiService } from 'src/app/services/dummyapi.service';

@Component({
  selector: 'app-dummyapi',
  templateUrl: './dummyapi.component.html',
  styleUrls: ['./dummyapi.component.css']
})
export class DummyapiComponent {
  quote:any='';


  allpost:any='';

  constructor(private  dummyapiservice: DummyapiService) { }

  getQuote(){
    this.dummyapiservice.getQuote().subscribe((response)=>{
      this.quote=response.quote;

    });
  }

  getAllPosts(){
    this.dummyapiservice.getAllPosts().subscribe((response)=>{
      this.allpost=response;
    });
  }

}
