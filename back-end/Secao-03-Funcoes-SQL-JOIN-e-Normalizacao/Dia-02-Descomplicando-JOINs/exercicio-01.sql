SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f ON a.actor_id = f.actor_id;

SELECT s.first_name, s.last_name, a.address 
FROM sakila.staff AS s
INNER JOIN sakila.address AS a ON s.address_id = a.address_id;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS `quantidade_alugados`
FROM sakila.customer AS c
INNER JOIN sakila.rental AS r ON r.customer_id = c.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

SELECT stf.first_name, stf.last_name, AVG(pay.amount) AS `media_pagamento`
FROM sakila.staff AS stf
INNER JOIN sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;

SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;