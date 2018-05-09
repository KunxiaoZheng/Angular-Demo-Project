import { Component, OnInit, Input } from '@angular/core';
import {Zoo} from '../test/obj';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  @Input() zoo: Zoo;

  constructor() { }

  ngOnInit() {
  }

}
