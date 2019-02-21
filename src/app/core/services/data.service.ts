import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  config = {
    social: {
      facebook: {
        url: ''
      },
      twitter: {
        url: ''
      },
      instagram: {
        url: ''
      },
      pinterest: {
        url: ''
      },
      linkedin: {
        url: ''
      },
      youtube: {
        url: ''
      },
      vimeo: {
        url: ''
      },
    }
  }

  constructor() { }
}
