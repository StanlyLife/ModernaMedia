import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blogs } from 'src/utils/BlogUtils';
@Component({
  selector: 'app-blog-showcase',
  templateUrl: './blog-showcase.component.html',
  styleUrls: [
    './blog-showcase.component.scss',
    './blog-showcase.desktop.component.scss',
  ],
  standalone: true,
  imports: [RouterLink],
})
export class BlogShowcaseComponent {
  blogs = Blogs;
}
