USE sakila;

INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Giorno', 'Giovanna', 5, 'golden@experience.com', 1, 1, 'giorno', 'requiem');

SELECT * FROM sakila.staff;

INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Bruno', 'Bucciarati', 5, 'sticky@fingers.com', 1, 1, 'bucciarati', 'arrivedercci'),
    ('Pannacotta', 'Fugo', 5, 'purple@haze.com', 1, 1, 'fugo', 'fork');
    
INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
    
SELECT * FROM sakila.actor;

SELECT * FROM sakila.category;

INSERT INTO sakila.category (name)
VALUES
    ('Vintage'),
    ('Oriental'),
    ('Russian');
    
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (7, 7);