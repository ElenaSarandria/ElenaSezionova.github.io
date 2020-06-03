
-- 01. create crime database
create database sfpdcrime;

-- 02. create crime table
create table public.crimedata
(
    unique_key decimal(38,0),
    category varchar(128),
    descript varchar(128),
    dayofweek varchar(128),
    pddistrict varchar(128),
    resolution varchar(128),
    address varchar(128),
    longitude decimal(38,10),
    latitude decimal(38,10),
    location varchar(128),
    pdid decimal(38,10),
    timestamp timestamp
);

-- 03. load data into table from csv in sharepoint
;

-- 04. create new base table for project and flask api
create table public.crimedata_f1 as 
select t1.* , to_char(timestamp, 'YYYY') crime_year,to_char(timestamp, 'mm') crime_month  from crimedata t1;

-- 05. filter data for API to focus on specific categories and year 2017
create table public.crimedata_ext as 
select *  from crimedata_f1 t1
where crime_year = '2017' 
and  category in ('LARCENY/THEFT','OTHER OFFENSES','NON-CRIMINAL','ASSAULT','VANDALISM')

-- 06. add a primary key to table for base requirement
ALTER TABLE public.crimedata_ext ADD PRIMARY KEY (unique_key,pdid);


-- #############################################################################
-- ### below this line extra lines are included for visibility, not needed...###
-- #############################################################################
drop table public.crimedata_f1;

drop table public.crimedata_ext;

create table public.crimedata_ext as 
select t1.* , cast(to_char(timestamp, 'YYYY') as varchar(10)) crime_year, cast(to_char(timestamp, 'mm') as varchar(10)) crime_month  from crimedata t1;

select crime_year, crime_month, count(*) from public.crimedata_ext 
where crime_year = '2017' 
and  category in ('LARCENY/THEFT','OTHER OFFENSES','NON-CRIMINAL','ASSAULT','VANDALISM')
group by crime_year, crime_month
order by 1 desc;

select category, count(*) from public.crimedata_ext 
where crime_year = '2017'  
and  category in ('LARCENY/THEFT','OTHER OFFENSES','NON-CRIMINAL','ASSAULT','VANDALISM')
group by category 
order by 2 desc;

select * from sfpdcrime.public.crimedata_ext 
where crime_year = '2017'  
and  category in ('LARCENY/THEFT','OTHER OFFENSES','NON-CRIMINAL','ASSAULT','VANDALISM');
