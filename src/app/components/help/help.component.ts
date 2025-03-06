import { Component, OnInit } from '@angular/core';

import { User } from '../interfaces/my-interfaces.service'; 
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data; 
     
    });
  }
}
