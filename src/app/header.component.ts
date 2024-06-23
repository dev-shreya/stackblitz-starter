import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    standalone:true,
    imports:[FormsModule]
})
export class HeaderComponent{
  @ViewChild('f') signupForm !: NgForm;
    defaultGender='';
    answer='';
    ageGroup=['Below 18','Above 18'];
    defaultAgeGroup = 'Above 18';


    onSubmit(form:NgForm){
      console.log(form)
      this.signupForm.reset();
    }
}