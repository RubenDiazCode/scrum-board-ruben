import { Component, OnInit, Input } from '@angular/core';
import { List } from '../models.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() list: List;

  constructor() { }

  ngOnInit() {
  }

}
