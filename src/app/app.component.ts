import { Component, OnInit, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

const navEl = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY >= 56){
    console.log('front');
    
    navEl?.classList.add('navbar-scrolled')
  }else if(window.scrollY < 56){
    console.log('back');
    
    navEl?.classList.remove('navbar-scrolled')
  }
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private wowService : NgwWowService){
    this.wowService.init();
  }
  title = 'GocSeaFood';
  public isCollapsed = true;
  
  ngOnInit(): void {
  }
  }
  
  


