import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string ;
  age: number;
  email: string;
  address: Address;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataservice: DataService) { 
    console.log('construcoer ran')
  }
  hobbies: string[]; 

  //life cycle hook
  ngOnInit() {
    console.log('ngOnInit ran...')
    this.name = 'john doe';
    this.age = 30;
    this.email = 'hksfdkjs@gmail.com';
    this.address = {
      street: 'wer',
      city: 'taipei',
      state: 'taiperi'
    }
    this.hobbies = ['basketball', 'swim','running','sleeping'];

    this.dataservice.getPosts().subscribe((posts) => {
      //console.log(posts)
      this.posts = posts;
    })
  }

  onClick(){
    console.log('hello');
    this.hobbies.push('new hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);//push on the beginning
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }  
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
    street: string;
    city: string;
    state: string; 
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number 
}
