import { ChangeDetectorRef, Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
// import { V1Namespace, V1NamespaceList } from '@kubernetes/client-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // namespaceList: V1Namespace[];


  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private cd: ChangeDetectorRef
  ) {
    this.translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
      // this.electronService.ipcRenderer.on('namespaces', (evt, data: V1NamespaceList) => {
      //   this.namespaceList = data.items;
      //   setTimeout(()=> {
      //     this.cd.detectChanges();
      //   })
      // });
    } else {
      console.log('Run in browser');
    }
  }
}
