import { Component } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public searchTerm: string = '';

  constructor(private searchService: SearchService){}

  ngOnInit(): void {
      
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.searchService.search.next(this.searchTerm);
  }


}
