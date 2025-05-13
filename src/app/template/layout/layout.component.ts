import { Component } from '@angular/core';
import { LayoutProps } from './layoutProps';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  props!: LayoutProps;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map(() => this.obterProps())
      )
      .subscribe((props: LayoutProps) => (this.props = props));
  }

  obterProps(): LayoutProps {
    let rotaFilha = this.activatedRoute.firstChild;
    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }
    return rotaFilha?.snapshot.data as LayoutProps;
  }
}
