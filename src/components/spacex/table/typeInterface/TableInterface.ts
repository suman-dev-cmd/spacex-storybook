export interface Spacex {
    flight_number: number;
    launch_date_utc: Date;
    mission_name: string;
    rocket: any;
    upcoming:boolean;
    launch_success:boolean;
    launch_site?:{
        site_name:string,
        // [key:string]:unknown|{[key:string]:unknown},
    }
}
export interface TableDataProps {
    flight_number: number;
    launch_date_utc: string;
    mission_name: string;
    rocket_name: string;
    orbit: string;
    upcoming: boolean;
    launch_success: boolean;
    launch_site?: string;
}
export interface ColumnsProps{
    key: keyof TableDataProps;
    header:string;
    width?:number;
}

export interface TableHeadProps{
    columns:ColumnsProps[];
    backgroundColor?:string;
}
