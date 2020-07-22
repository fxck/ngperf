import { Component, OnChanges, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplexComponent implements OnChanges {

  @Input()
  layoutMode: 'vertical' | 'horizontal' = 'horizontal';

  @Input()
  projectId: string;

  @Input()
  projectIsPremium: boolean;

  @Input()
  projectStatus: any;

  @Input()
  projectName: string;

  @Input()
  projectDescription: string;

  @Input()
  projectTags: string[];

  @Input()
  projectSearchMatches: any[];

  @Input()
  set projectProcesses(v: any) {
    // const partn = partition(v, (itm) => itm.status === ProcessStatuses.PENDING);

    // this.pendingProcesses = partn[0];
    // this.runningProcesses = partn[1];
  }

  @Input()
  serviceStacksScrollHeight = '490px';

  @Input()
  projectMoreActionsRunning: boolean;

  @Input()
  knowledgeBasePath: string;

  @Input()
  projectMoreActionsPopRef: any;

  @Input()
  objectStoragesUsageMap: any;

  @Input()
  set projectMoreActionsLoading(v) {
    // this._projectMoreActionsLoading = coerceBooleanProperty(v);
  }
  get projectMoreActionsLoading() {
    return this._projectMoreActionsLoading;
  }

  @Input()
  projectRecentNotifications: any[];

  @Input()
  projectSpendRanges: {
    value: number;
    range: string;
  }[];

  @Input()
  projectCurrentHourlySpend: number;

  // TODO: interface
  @Input()
  projectStatistics: any;

  @Input()
  activeCurrency: any;

  @Input()
  serviceStackTypes: any[];

  @Input()
  notificationItemTranslations: any;

  @Input()
  processItemTranslations: any;

  @Input()
  set serviceStacks(v) {
    this._serviceStacks = v;
    // system services remain when other serveces deleted
    // this.hasNonSystemStacks = v.some((d) => !d.isSystem);
  }
  get serviceStacks() {
    return this._serviceStacks;
  }

  @Input()
  serviceStackMoreActionsPopRef: any;

  @Input()
  serviceStackTypeVersionMap: any = {};

  @Input()
  serviceStackMoreActionsRunningMap: any = {};

  @Input()
  currentServiceStackStatisticsMap: any = {};

  @Input()
  historyServiceStackStatisticsMap: any = {};

  // TODO: interface
  @Input()
  serviceStackSpendStatisticsMap: any;

  @Input()
  serviceStackVersionPopRef: any;

  @Input()
  serviceStackAccessDetailsPopRef: any;

  @Input()
  serviceStackPublicRoutingPopRef: any;

  @Input()
  serviceStackSyncStatePopRef: any;

  @Input()
  generalTranslations: any; // GeneralTranslations;

  @Input()
  routerParams: any;

  @Input()
  activeTagFilter: string;

  @Output()
  projectInfoHeaderClick = new EventEmitter<void>();

  @Output()
  serviceStackInfoHeaderClick = new EventEmitter<void>();

  @Output()
  projectMoreTriggerClick = new EventEmitter<void>();

  @Output()
  serviceStackMoreTriggerClick = new EventEmitter<string>();

  @Output()
  serviceStackSyncStateEnter = new EventEmitter<string>();

  @Output()
  serviceStackVersionEnter = new EventEmitter<string>();

  @Output()
  serviceStackPublicRoutingEnter = new EventEmitter<string>();

  @Output()
  serviceStackAccessDetailsEnter = new EventEmitter<string>();

  @Output()
  deployFileSelected = new EventEmitter<any>();

  @ViewChild('BarGraphComponent')
  barGraphRef: any;

  infoHeaderSize = 'large';
  processItemModes = {};
  projectStatuses = {};
  runningProcesses: any[] = [];
  pendingProcesses: any[] = [];
  activeStackTypeVersionId: string;
  serviceStacksTypeVersionsStatuses: any[];
  hasNonSystemStacks = false;
  private _projectMoreActionsLoading: boolean;
  private _serviceStacks: any[];

  ngOnChanges() {
    // if (this.serviceStacks && this.serviceStackTypeVersionMap) {
    //   this.serviceStacksTypeVersionsStatuses = getServiceStacksTypeVersionStatuses(
    //     this.serviceStacks,
    //     this.serviceStackTypeVersionMap
    //   );
    // }

    // this.barGraphRef?.refresh();
  }

  toggleActiveStackTypeVersionId(id: string) {
    if (this.activeStackTypeVersionId === id) {
      this.activeStackTypeVersionId = undefined;
    }  else {
      this.activeStackTypeVersionId = id;
    }
  }

}
