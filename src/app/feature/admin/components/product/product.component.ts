import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbAlert} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductDto} from "../../../../core/dto/productDto";

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        NgbAlert,
        ReactiveFormsModule
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
    public productForm: FormGroup;
    @Input() product: ProductDto | undefined;
    constructor(
        private activeModal: NgbActiveModal,
        private fb: FormBuilder
    ) {
        this.productForm = this.fb.group({
            id: [''],
            name: ['', Validators.required],
            price: [0, Validators.required],
            stock: [0, Validators.required]
        });
    }

    ngOnInit(): void {
        if(this.product) {
            this.productForm.patchValue(this.product);
        }
    }

    onSubmit() {
        console.log('Product form', this.productForm.value);
    }

}
