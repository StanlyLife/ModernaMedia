import { WindowRefService } from './../../services/window-ref.service';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-image-and-text',
  templateUrl: './image-and-text.component.html',
  styleUrls: [
    './image-and-text.component.scss',
    './image-and-text.desktop.component.scss',
  ],
})
export class ImageAndTextComponent implements OnInit {
  imageCdn = environment.img;
  constructor(private wf: WindowRefService) {}
  @Input() sectionStyle: string = 'dark';
  @Input() src: string =
    '../../../assets/Images/Components/Large-usp/Digitalbyra som digitaliserer og utvikler nettsider.webp';
  @Input() alt: string =
    '../../../assets/Images/Components/Large-usp/Digitalbyra som digitaliserer og utvikler nettsider.webp';
  @Input() content: string =
    "transmitting quantify navigating the card won't do anything, we need to transmit the optical PCI sensor! calculate The HDD driver is down, back up the cross-platform interface so we can override the RSS system! Use the mobile XML microchip, then you can copy the back-end program! You can't connect the sensor without backing up the bluetooth HTTP hard drive! transmitting the system won't do anything, we need to input the 1080p THX program! Try to navigate the PNG port, maybe it will input the online program! I'll hack the 1080p CSS firewall, that should transmitter the PCI monitor! backing up You can't input the program without synthesizing the bluetooth FTP capacitor! We need to parse the online AI hard drive! quantifying bypassing connecting the driver won't do anything, we need to reboot the 1080p SMTP sensor! quantifying ou can ";
  @Input() title: string =
    'Hvordan vi tilbyr en <span>100% risikofri</span> prosess';
  public vw: any = 500;
  ngOnInit() {
    this.vw = this.wf.width < this.wf.height ? this.wf.height : this.wf.width;
  }
}
