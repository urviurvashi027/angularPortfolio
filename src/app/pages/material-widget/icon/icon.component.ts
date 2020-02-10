import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  public icon = [ 'fa fa-home', 'fa fa-trash', 'fa fa-close','fa fa-folder','fa fa-pause-circle-o', 'fa fa-cog', 'fa fa-play-circle-o', 'fa fa-backward', 'fa fa-sign-out' ,
                'fa fa-address-book' , "fa fa-anchor", 'fa fa-battery-full','fa fa-binoculars','fa fa-calculator','fa fa-bolt','fa fa-desktop',"fa fa-check",
                'fa fa-sticky-note', 'fa fa-envelope','fa fa-female','fa fa-bug','fa fa-battery-0','fa fa-chain-broken',"fa fa-flag",
                'fa fa-clock-o' , "fa fa-code", 'fa fa-coffee','fa fa-comment','fa fa-css3',' fa-cube','fa fa-cubes',"fa fa-crop",
                'fa fa-thumb-tack' , "fa-trash", 'fa fa-sun-o','fa fa-google-plus','fa fa-gg','fa fa-male','fa fa-mobile-phone',"fa fa-heart-o",
                'fa fa-times' , "fa fa-star", 'fa fa-spotify','fa fa-gift','fa fa-glide-g','fa fa-key','fa fa-paragraph',"fa fa-git",
                'fa fa-trello' , "fa fa-rupee", 'fa  fa-sort-amount-desc','fa fa-hourglass-start','fa fa-internet-explorer','fa fa-map','fa fa-krw',"fa fa-folder-o",
                'fa fa-twitch' , "fa fa-video-camera", 'fa fa-sort-numeric-desc','fa fa-legal ','fa fa-intersex','fa fa-imdb','fa fa-moon-o',"fa fa-flask",
                'fa fa-subscript' , "fa fa-volume-up", 'fa fa-spinner','fa fa-hashtag','fa fa-grav','fa fa-money','fa fa-location-arrow',"fa fa-github-alt",
                'fa fa-thumbs-o-up' , "fa fa-wifi", 'fa fa-slack','fa fa-heart','fa fa-hdd-o','fa fa-low-vision','fa fa-modx',"fa fa-google-wallet",
                'fa fa-tripadviso' , "fa fa-weibo", 'fa fa-skype','fa fa-home','fa fa-ils','fa fa-mouse-pointer','fa fa-motorcycle',"fa fa-hand-lizard-o",


];

public iconic = ['ion ion-md-attach', 'ion ion-md-add-circle-outline','ion ion-md-albums','ion ion-md-american-football','ion ion-md-appstore','ion ion-md-arrow-dropleft','ion ion-md-at', 'ion ion-md-backspace',
                  'ion ion-md-barcode', 'ion ion-md-basket','ion ion-md-basketball', 'ion ion-md-beer','ion ion-md-bonfire', 'ion ion-md-bookmark', 'ion ion-md-bowtie','ion ion-md-briefcase', 'ion ion-md-brush', 'ion ion-md-bug','ion ion-md-bus',
                'ion ion-md-calendar', 'ion ion-md-camera','ion ion-md-car', 'ion ion-md-card', 'ion ion-md-cash', 'ion ion-md-cellular','ion ion-md-clipboard','ion ion-md-close','ion ion-md-cloud-download',
              'ion ion-md-code','ion ion-md-code-download','ion ion-md-code-working','ion ion-md-cog','ion ion-md-color-filter','ion ion-md-color-wand','ion ion-md-construct',
            'ion ion-md-contact','ion ion-md-contract','ion ion-md-copy','ion ion-md-crop','ion ion-md-done-all','ion ion-md-easel','ion ion-md-eye','ion ion-md-flower','ion ion-md-folder-open',
          'ion ion-md-git-branch','ion ion-md-glasses', 'ion ion-md-globe','ion ion-md-grid','ion ion-md-hand','ion ion-md-happy','ion ion-md-headset','ion ion-md-heart','ion ion-md-home','ion ion-md-hourglass' ,
        'ion ion-md-image', 'ion ion-md-ice-cream','ion ion-md-key','ion ion-md-jet','ion ion-md-keypad','ion ion-md-list','ion ion-md-lock','ion ion-md-map','ion ion-md-male','ion ion-md-medkit',
      'ion ion-md-mic','ion ion-md-menu','ion ion-md-more','ion ion-md-move','ion ion-md-outlet','ion ion-md-navigate','ion ion-md-open','ion ion-md-paw','ion ion-md-people',
    'ion ion-md-person','ion ion-md-pie','ion ion-md-pint','ion ion-md-pin','ion ion-md-pizza','ion ion-md-power','ion ion-md-quote','ion ion-md-pulse','ion ion-md-rainy',
  'ion ion-md-redo','ion ion-md-resize','ion ion-md-ribbon','ion ion-md-rose','ion ion-md-sad','ion ion-md-send','ion ion-md-search','ion ion-md-shuffle','ion ion-md-shirt',
        'ion ion-md-snow'];

   public matIcon = ['Example home icon']     
  constructor() { }

  ngOnInit() {
  }

}
