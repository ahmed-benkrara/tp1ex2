import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  guess : Number = 0 
  number : Number =  this.random()
  count : number = 0
  text : String = ''
  shown : Boolean = false

  verify() : void{
    console.log(this.number)
    if(this.guess === 0){
      return
    }
    
    this.count++
    if(this.guess === this.number){
      this.text = ''
      this.shown = false
      alert('you won')
      this.restart()
    }else if(this.guess > this.number){
      this.text = 'Your guess is higher.'
      this.shown = true
    }else{
      this.text = 'Your guess is lower.'
      this.shown = true
    }
  }

  restart(){
    this.text = ''
    this.shown = false
    this.guess = 0
    this.count = 0
    this.number = this.random()
  }

  random() : Number{
    return Math.round(Math.random()*1000) + 1
  }

}
