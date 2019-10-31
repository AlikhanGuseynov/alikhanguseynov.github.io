import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.state = false;
    this.arr = ["add" , "clean", "remove"]
  }

  addStr(new_str){
    this.arr.unshift(new_str);
    return false
  }

  deleteStr(arr_item){
    console.log(arr_item)
    for(let i=0; i<this.arr.length; i++){
      if(this.arr[i] == arr_item){
        this.arr.splice(i, 1);
        break;
      }
    }
  }

  check(ch){
    if( this.state == false ){
      this.state = true
    }else{
      this.state = false
    }


    
    
  }
  
  state:boolean;
  arr:string[];





  
  
}
