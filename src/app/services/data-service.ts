import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataServiceProvider {


  private languageDatas = new BehaviorSubject([]);
	languageDatasObs = this.languageDatas.asObservable();

  private tableData = new BehaviorSubject([]);
	tableDataObs = this.tableData.asObservable();

	private toggleMenuVar = new BehaviorSubject([]);
	toggleMenuObs = this.toggleMenuVar.asObservable();


  // Dashboard Table
	languageDatasItms(languageDatasItms) {
		this.languageDatas.next(languageDatasItms);
	}
	languageDatasItmsChanges() {
		return this.languageDatasItms;
	}

  // Dashboard Table
	tableDataItms(tableDataItms) {
		this.tableData.next(tableDataItms);
	}
	tableDataItmsChanges() {
		return this.tableDataItms;
	}

	//toggle Menu

	toggleMenu(flag) {
		console.log(flag)
		this.toggleMenuVar.next(flag);
	}
	toggleMenuChanges() {
		return this.toggleMenu;
	}


  constructor() { }
}