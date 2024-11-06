import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownServiceService } from '../dropdown-service.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent implements OnInit {
  isOpen: boolean = false;
  @Input() options: string[] = [];
  @Input() selectedItem: any = null;
  @Input() Required = false;
  placeholder: string = 'Select an item';
  searchQuery: string = '';
  @Output() selectionChange = new EventEmitter<any>();

  filteredItems: any[] = [];
  list: any[] = [];

  constructor(private dropdownService: DropdownServiceService) {}

  ngOnInit() {
    // Fetch the list of items from the service
    this.dropdownService.getList().subscribe((items) => {
      this.list = items;
      this.filteredItems = items;
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectItem(option: any) {
    this.selectedItem = option;
    this.selectionChange.emit(option);
    this.isOpen = false;
    this.toggle();
  }

  filterOptions(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
    this.filteredItems = this.list.filter((option) =>
      option.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
