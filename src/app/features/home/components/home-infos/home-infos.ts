import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../../../shared/models/link.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-infos',
  imports: [RouterLink],
  templateUrl: './home-infos.html',
  styleUrl: './home-infos.scss',
})
export class HomeInfos implements OnInit{
  homeLinks: LinkModel[] = [];

  ngOnInit(): void {
      this.homeLinks = [
        {
          label: 'Terms',
          url: '/',
        },
        {
          label: 'Privacy',
          url: '/',
        },
        {
          label: 'Cookie notice',
          url: '/',
        }
      ];
  }
}
