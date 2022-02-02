import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello-q1',
  templateUrl: './hello-q1.component.html',
  styleUrls: ['./hello-q1.component.css']
})

export class HelloQ1Component implements OnInit {
  integerInput;
  selectedCalculation = 'isPrime';
  calculationList=['isPrime','IsFibanacci'];
  test;
  test2;
  test3;
  test4;
  @ViewChild('integerElem') integerElem; 
  constructor() { }

  ngOnInit(): void {
  }
  integerInputChange(e) {
    if(e == '-'){
      return true;
    }
    if(e < 0 || isNaN(e)){
      this.integerInput = 1;
      this.integerElem.nativeElement.value = 1;
      return true;
    }
    this.integerInput = Math.round(e);
    this.integerElem.nativeElement.value = Math.round(e);
    return true;
  }
  calculationChange(e){
    this.selectedCalculation = e;
  }
  getResult(){
    if(this.selectedCalculation == 'isPrime')
    {
      return this.isPrime(this.integerInput);
    }
    else if(this.selectedCalculation == 'IsFibanacci'){
      return this.isFibonacci(this.integerInput);
    }
    else{
      return '';
    }
  }
  isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n == this.leastFactor(n)) return true;
    return false;
  }
  leastFactor(n){
    if (isNaN(n) || !isFinite(n)) return NaN;
    if (n == 0) return 0;
    if (n % 1 || n * n < 2) return 1;
    if (n % 2 == 0) return 2;
    if (n % 3 == 0) return 3;
    if (n % 5 == 0) return 5;
    var m = Math.sqrt(n);
    for (var i = 7; i <= m; i += 30) {
        if (n % i == 0) return i;
        if (n % (i + 4) == 0) return i + 4;
        if (n % (i + 6) == 0) return i + 6;
        if (n % (i + 10) == 0) return i + 10;
        if (n % (i + 12) == 0) return i + 12;
        if (n % (i + 16) == 0) return i + 16;
        if (n % (i + 22) == 0) return i + 22;
        if (n % (i + 24) == 0) return i + 24;
    }
    return n;
  }
  isPerfectSquare(n)
  {
      return n > 0 && Math.sqrt(n) % 1 === 0;
  }
   isFibonacci(n)
  {
  
      // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
      // is a perfect square

      
      return this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4);
  }
  getTest(){
    return this.test;
  }
}
