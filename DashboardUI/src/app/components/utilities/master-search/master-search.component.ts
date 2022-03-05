import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-search',
  templateUrl: './master-search.component.html',
  styleUrls: ['./master-search.component.css']
})
export class MasterSearchComponent implements OnInit {

  constructor() { }
  value = 'Clear me';

  ngOnInit(): void {
  }

}
