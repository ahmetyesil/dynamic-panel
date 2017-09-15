import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    templateUrl: 'client.component.html'
})
export class ClientComponent implements OnInit {

    public clientCreate;
    public clientUpdate;
    public moduleCreate;
    public moduleUpdate;
    public lists;
    ngOnInit(): void {

    }
}
