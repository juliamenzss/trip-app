import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  standalone: false,
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
@Input() type: 'submit' | 'button' = 'submit';

}
