export interface IData {
  total_rows: string;
  results: IResults[];
}

export interface IResults {
  total_rows: string;
  in_out: number;
  date: string;
  person_avatar: string;
  from_number: string;
  source: string;
  time: number;
  from_site: number;
}
