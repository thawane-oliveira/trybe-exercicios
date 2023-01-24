-- 1. Retorne o id de customer e a média de dias que uma pessoa usuária permanece com o produto alugado (tabela rental);
SELECT customer_id, AVG(rental_date) AS media_de_dias
FROM sakila.rental
GROUP BY customer_id;

-- 2. Retorne o tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating (tabela film);
SELECT MAX(length), MIN(length), AVG(length) AS media_de_tempo
FROM sakila.film
GROUP BY release_year;

-- 3. Quantas pessoas usuárias temos por cidade (tabela address);
SELECT district, COUNT(address_id) AS quantidade_usuarios
FROM sakila.address
GROUP BY district;

-- 4. Qual o valor total (amount) recebido dentro de cada mês (tabela payment)?
SELECT SUM(amount) AS valor_total
FROM sakila.payment
GROUP BY MONTH(payment_date);

-- 5. Retorne a quantidade de itens alugados pelo preço (amount) que sejam menores ou iguais a 1.99 (tabela payment)
SELECT amount, COUNT(rental_id) AS quantidade_alugados
FROM sakila.payment
GROUP BY amount
HAVING amount <= 1.99;

-- 6. Qual valor arrecadado (soma) por valor de produto que tem mais saída por mês e ano? (tabela payment)
SELECT * FROM sakila.payment as p;
SELECT amount, SUM(amount) AS valor_arrecadado
FROM sakila.payment
Where YEAR(payment_date) = 2005
GROUP BY amount
order by valor_arrecadado desc;

select * from sakila.payment
Where YEAR(payment_date) = 2006
