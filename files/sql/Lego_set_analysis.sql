-- Lego sets Analysis: Data Cleaning and Exploration --
-- 1. Data cleaning and formatting
-- 2. Data Exploration and analysis


-- A. PHASE 1 :Data cleaning and formatting: 4 columns to verify the format: pieces, minifigs, agerange-min, US_retailPrice

select * from lego_sets;

-- create a backup table

create table lego_sets_clean as
select * from lego_sets;

select* from lego_sets_clean;

-- Detect non-numeric values 

alter table lego_sets_clean
change column ï»¿set_id set_id text;

select set_id, pieces 
from lego_sets_clean
where pieces is null or pieces not regexp '^[0-9]+$';

select set_id, minifigs
from lego_sets_clean
where minifigs is null or minifigs not regexp '^[0-9]+$';

select set_id, agerange_min
from lego_sets_clean
where agerange_min is null or agerange_min not regexp '^[0-9]+$';

select set_id, US_retailPrice
from lego_sets_clean
where US_retailPrice is null or US_retailPrice not regexp '^[0-9]+(\\.[0-9]+)?$';

-- set null on non-numerical values

update lego_sets_clean
set pieces = Null
where pieces = ''
	or (pieces is not null and pieces not regexp '^[0-9]+$');

update lego_sets_clean
set minifigs = Null
where minifigs = ''
	or(minifigs is not null and minifigs not regexp '^[0-9]+$');

update lego_sets_clean
set agerange_min = Null
where agerange_min = ''
	or(agerange_min is not null and agerange_min not regexp '^[0-9]+$');

update lego_sets_clean
set US_retailPrice = Null
where US_retailPrice = ''
	or(US_retailPrice is not null and US_retailPrice not regexp '^[0-9]+(\\.[0-9]{1,2})?$');

-- 	Alter Table: Change data type and format column name --

alter table lego_sets_clean
modify column pieces int,
modify column minifigs int,
modify column agerange_min int,
modify column US_retailPrice decimal (10,2);

alter table lego_sets_clean
change column themeGroup theme_group text,
change column agerange_min age_range_min int,
change column US_retailPrice US_retail_price decimal(10,2),
change column bricksetURL brickset_url text,
change column thumbnailURL thumbnail_url text,
change column imageURL image_url text;

select * from lego_sets_clean;

update lego_sets_clean
set
theme = trim (theme),
subtheme = trim(subtheme),
theme_group = trim(theme_group),
category = trim(category);

select distinct theme 
from lego_sets_clean
order by theme;

select theme 
from lego_sets_clean
where theme like '%Ben%';

select count(set_id)
from lego_sets_clean;

select * from lego_sets_clean;

-- B Data exploration and Analysis objectives: 

-- 1. Lego sets overview: How many LEGO Sets have been released since 1970? Is there a noticable trend?

select year, count(*) as total_sets_released
from lego_sets_clean
where year >= 1970
group by year
order by year asc; 


-- 2. Which has been the most popular theme in each decade?

-- aggregation and ranking by decade

with theme_per_decade as (
select 
		floor(year/10) * 10 as decade,
		theme,
		count(*) as sets_count
from
		lego_sets_clean
where
		year >= 1970
group by 
		floor(year/10)*10, theme
    ),
  ranked_themes AS (
    SELECT 
        *,
        RANK() OVER (PARTITION BY decade ORDER BY sets_count DESC) AS theme_rank
    FROM 
        theme_per_decade
    )    
	select
		decade,
		theme,
		sets_count
    from 
		ranked_themes
    where
		theme_rank = 1
    order by 
		decade;

-- 3. Distribution of set prices by recommended age group

select
	age_range_min as recommended_age,
	count(*) as total_sets,
	round(avg(US_retail_price),2) as avg_price,
	round(min(US_retail_price),2) as min_price,
	round(max(US_retail_price),2) as max_price
from 
	lego_sets_clean
where 
	age_range_min is not null 
	and US_retail_price is not null
group by 
	age_range_min
order by 
	recommended_age desc; 


-- 4. Correlation between number of minifigures and price: table to create a scatter plot or correlation coefficient

select 
	minifigs,
	US_retail_price
from 
	lego_sets_clean
where 
	minifigs is not null 
    and US_retail_price is not null;