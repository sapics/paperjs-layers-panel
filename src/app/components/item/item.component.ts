import { Component, Input, OnInit } from '@angular/core';
import {
    faCaretDown,
    faCaretRight,
    faEye,
    faEyeSlash,
    faLock,
    faTrash,
    faUnlockAlt,
    faVectorSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector   : 'app-item',
    templateUrl: './item.component.html',
    styleUrls  : [ './item.component.scss' ],
})
export class ItemComponent implements OnInit
{
    @Input() item: paper.Item;
    @Input() depth = 0;

    childrenVisible = false;

    iconVisible            = faEye;
    iconNotVisible         = faEyeSlash;
    iconLocked             = faLock;
    iconNotLocked          = faUnlockAlt;
    iconChildrenVisible    = faCaretDown;
    iconChildrenNotVisible = faCaretRight;
    iconSelected           = faVectorSquare;
    iconDelete             = faTrash;

    constructor ()
    {
    }

    ngOnInit ()
    {
    }

    get hasChildren (): boolean
    {
        return this.item.children && this.item.children.length > 0;
    }
}
