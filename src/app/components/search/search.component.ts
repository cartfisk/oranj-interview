import { Component } from '@angular/core';
import { Artist } from '../../Artist';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent  {
  searchQuery:string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService){

  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchQuery)
    .subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
