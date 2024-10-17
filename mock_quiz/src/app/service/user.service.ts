import { Injectable } from '@angular/core';

export interface User {
  id: number;
  Username: string;
  Email: string;
  RegistrationTime: string;
  LastLogin: string;
  Status: string;
}

@Injectable({
  providedIn: 'root',
})


export class userService {
  Users: User[] = [
    {
      id: 1,
      Username: 'Nika',
      Email: 'nikoloz.dvalishvili@gau.edu.ge',
      RegistrationTime: '17-Oct-24 17:00',
      LastLogin: '17-Oct-24 17:00',
      Status: 'Confirmed',
    },
    {
      id: 2,
      Username: 'Gigi',
      Email: 'gigi.giorgadze@gau.edu.ge',
      RegistrationTime: '17-Oct-24 17:00',
      LastLogin: '17-Oct-24 17:00',
      Status: 'Blocked',
    },
    {
      id: 3,
      Username: 'Jaba',
      Email: 'jaba.agniashvili@gau.edu.ge',
      RegistrationTime: '17-Oct-24 17:00',
      LastLogin: '17-Oct-24 17:00',
      Status: 'Confirmed',
    },
    {
      id: 4,
      Username: 'Duda',
      Email: 'duda.elbakidze@gau.edu.ge',
      RegistrationTime: '17-Oct-24 17:00',
      LastLogin: '17-Oct-24 17:00',
      Status: 'Confirmed',
    },
  ];
}
