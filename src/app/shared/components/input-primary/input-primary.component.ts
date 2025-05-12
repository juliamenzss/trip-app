import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-primary',
  standalone: false,
  templateUrl: './input-primary.component.html',
  styleUrl: './input-primary.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPrimaryComponent),
      multi: true,
    },
  ],
})

export class InputPrimaryComponent implements ControlValueAccessor{
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';

  value: string = '';
  onChange = (value: any) => {};
  onTouched = () => {};

writeValue(value: any): void {
  this.value = value;
}
registerOnChange(fn: any): void {
  this.onChange = fn;
}
registerOnTouched(fn: any): void {
  this.onTouched = fn;
}
 setDisabledState?(isDisabled: boolean): void {
  console.log()  }
  handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

}
