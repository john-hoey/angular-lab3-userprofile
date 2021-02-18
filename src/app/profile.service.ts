import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfileObject: UserProfile = {
    name: "John Hoey",
    contact: "darthjavascript@gmail.com",
    bio: "Angular is complex."
  }

  name: string;
  contact: string;
  bio: string;

  constructor() { }
  getUserProfile = (): UserProfile => {
    return this.userProfileObject;
  }

  setUserProfile = (userProfile: UserProfile): void => {
      this.userProfileObject = userProfile;
    }
  }


