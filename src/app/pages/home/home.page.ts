import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HomeModalPage } from "../home-modal/home-modal.page";
import { WorkspaceService } from '../../services/workspace.service';
import { NotificationService } from '../../services/notification.service';
import { ScrollDetail } from '@ionic/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  workspacesByDay;
  workspacesByHour;
  workspace;
  ByDay = true;
  ByHour = false;
  showToolbar = false;

  types = [
    {name: "Beverages", value: "Beverages"},
    {name: "Snacks", value: "Snacks"},
    {name: "Chocolates", value: "Chocolates"},
    {name: "Bread", value: "Bread"},
    {name: "Canned/Jarred Goods", value: "Canned/Jarred Goods"},
    {name: "Dairy", value: "Dairy"},
    {name: "Dry/Baking Goods", value: "Dry/Baking Goods"},
    {name: "Frozen Foods", value: "Frozen Foods"},
    {name: "Meat", value: "Meat"},
    {name: "Fruits and Vegetables", value: "Fruits and Vegetables"},
    {name: "Cleaners", value: "Cleaners"},
    {name: "Paper Goods", value: "Paper Goods"},
    {name: "Personal Care", value: "Personal Care"},
    {name: "Other", value: "Other"},
  ];

  selectCategory(type){
    this.router.navigate(["/category-snacks/" + type]);
  }
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private workspaceService: WorkspaceService,
    private notificationService: NotificationService,
    private menuController: MenuController,
    private router: Router
    ){ }

  ngOnInit(){
    this.menuController.enable(true);
    this.workspaceService.getWorkspace().subscribe(data=>{
      this.workspace = data;
    });
  }
  segmentChanged(ev: any) {
    this.ByDay=!this.ByDay;
    this.ByHour=!this.ByHour;
  }

  loadWorkspaceDay(){
   
    this.workspaceService.getWorkspaceByDay().subscribe(data=>{
      this.workspacesByDay = data;
    });
  }
  loadWorkspaceHour(){
    this.workspaceService.getWorkspaceByHour().subscribe(data=>{
      this.workspacesByHour = data;
    });
  }
  viewDetails(workspace){
    this.router.navigate(['/space-details',workspace.space_id]);
  }
  
  
  

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >=70;
    }
  }

  async success() {
    const alert = await this.alertController.create({
      header: 'Check Availability',
      subHeader: 'Request Sent',
      message: 'Wait for User Response before check in. Thank you!',
      buttons: ['OK']
    });

    await alert.present();

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: HomeModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
  async checkAvailability(user_id:number, space_id:number) {
    
    const alert = await this.alertController.create({
      header: 'Check Availability',
      subHeader:'Set date and duration',
      inputs: [
        
        {
          name: 'date',
          type: 'date',
 
        },
        {
          name: 'time',
          type: 'time'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {

            let notification = {
              to_user: user_id,
              date_time:  data.date+'T'+data.time,
              type: 1,
              workspace_id: space_id
            };

            this.notificationService.postNotification(notification)
              .subscribe(data=>{
                this.success();
              });
          }
        }
      ]
    });
    await alert.present();
    }

    

}