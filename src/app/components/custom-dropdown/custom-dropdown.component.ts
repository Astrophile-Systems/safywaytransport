import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

export interface DropdownOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true,
    },
  ],
  template: `
    <div class="relative" (clickOutside)="closeDropdown()">
      <button
        type="button"
        (click)="toggleDropdown()"
        [class]="buttonClass"
        [disabled]="disabled"
        class="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:border-[#F6BE55] focus:ring-2 focus:ring-[#F6BE55]/20 transition-all duration-200 hover:border-gray-400 cursor-pointer text-left flex items-center justify-between"
      >
        <span [class]="selectedValue ? 'text-gray-900' : 'text-gray-400'">
          {{ selectedLabel || placeholder }}
        </span>
        <svg
          class="w-5 h-5 transition-transform duration-200"
          [class.rotate-180]="isOpen"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        *ngIf="isOpen"
        class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
      >
        <div
          *ngFor="let option of options; trackBy: trackByValue"
          (click)="selectOption(option)"
          class="px-4 py-3 cursor-pointer transition-all duration-150 hover:bg-[#FEF3C7] hover:text-[#92400E] flex items-center justify-between"
          [class.bg-[#F6BE55]]="selectedValue === option.value"
          [class.text-[#1F2937]]="selectedValue === option.value"
        >
          <span>{{ option.label }}</span>
          <svg
            *ngIf="selectedValue === option.value"
            class="w-4 h-4 text-[#1F2937]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          *ngIf="options.length === 0"
          class="px-4 py-3 text-gray-500 text-center"
        >
          No options available
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent implements ControlValueAccessor, OnInit {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() buttonClass: string = '';
  @Input() disabled: boolean = false;
  @Output() selectionChange = new EventEmitter<string>();

  isOpen = false;
  selectedValue: string = '';
  selectedLabel: string = '';

  private onChange = (value: string) => {};
  private onTouched = () => {};

  ngOnInit() {
    // Set initial selected label if value is already set
    this.updateSelectedLabel();
  }

  toggleDropdown() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.onTouched();
      }
    }
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selectOption(option: DropdownOption) {
    this.selectedValue = option.value;
    this.selectedLabel = option.label;
    this.onChange(option.value);
    this.selectionChange.emit(option.value);
    this.closeDropdown();
  }

  private updateSelectedLabel() {
    const selectedOption = this.options.find(
      (option) => option.value === this.selectedValue
    );
    this.selectedLabel = selectedOption ? selectedOption.label : '';
  }

  trackByValue(index: number, option: DropdownOption): string {
    return option.value;
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.selectedValue = value || '';
    this.updateSelectedLabel();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
