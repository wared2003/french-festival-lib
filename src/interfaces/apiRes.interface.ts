export interface ApiResInterface<T> {
  facet_groups: Array<any>;
  nhits: number;
  parameters: any;
  records: [{
      datasetid: string;
      record_timestamp: string;
      recordid: string;
      geometry: any;
      fields: T;
    }];
}
