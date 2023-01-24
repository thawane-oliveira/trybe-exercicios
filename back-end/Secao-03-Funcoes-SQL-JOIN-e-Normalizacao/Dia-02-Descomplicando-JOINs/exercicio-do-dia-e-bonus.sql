SELECT m.title, b.domestic_sales, b.international_sales
FROM movies AS m INNER JOIN box_office AS b ON b.movie_id  = m.id;

SELECT m.title, (b.domestic_sales + b.international_sales) AS "vendas"
FROM movies AS m INNER JOIN box_office AS b ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

SELECT m.title, b.rating 
FROM movies AS m INNER JOIN box_office AS b ON b.movie_id = m.id
ORDER BY b.rating DESC;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM theater AS t LEFT JOIN movies AS m ON t.id = m.theater_id
ORDER BY t.name;

SELECT t.id, t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM theater AS t RIGHT JOIN movies AS m ON t.id = m.theater_id
ORDER BY t.name;

USE pixar;

SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM movies AS m INNER JOIN box_office AS b ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;