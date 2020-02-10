import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataServiceProvider {


  private languageDatas = new BehaviorSubject([]);
	languageDatasObs = this.languageDatas.asObservable();

  private tableData = new BehaviorSubject([]);
	tableDataObs = this.tableData.asObservable();


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


  constructor() { }
}