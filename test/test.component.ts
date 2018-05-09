import { DataService } from '../data.service';
import { Component, OnInit, Input } from '@angular/core';
import {Zoo} from '../test/obj';
import {Location} from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name1: string = 'name';

  number1: number = 4;

  flag: boolean = true;

  selectedZoo: Zoo;

  zooList: Zoo [];

  constructor(
    private location: Location,
    private data: DataService
  ) { }

  ngOnInit() {
    this.getZooList();
    this.selectedZoo = this.zooList[0];
  }

  getZooList(): void {
    this.data.getList().subscribe(list => this.zooList = list);
  }

  addZoo(): void  {
    let temp = new Zoo();
    temp.position = this.name1;
    temp.size = this.number1;
    this.zooList.push(temp);
    console.log('worked?');
  }

  deleteZoo(i: number): void  {
    this.zooList.splice(i, 1);
  }

  flagFlip(): void  {
    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  selectZoo(selected: Zoo): void {
    this.selectedZoo = selected;
  }

  goBack(): void {
    this.location.back();
  }

}
