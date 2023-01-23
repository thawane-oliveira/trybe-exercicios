SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary) AS 'average_salary'
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM hr.employees;

SELECT job_id , COUNT(*)
AS 'todos'
FROM hr.employees
WHERE job_id = "it_prog";

SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id
HAVING job_id = "it_prog";

SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY average_salary DESC;

SELECT department_id, AVG(salary) 'average_salary' , COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING number_of_employees > 10;

SET SQL_SAFE_UPDATES = 1;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) 'hire_year'
FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date) 'hire_day'
FROM hr.employees;

SELECT employee_id, first_name, MONTH(hire_date) 'hire_month'
FROM hr.employees;

SELECT last_name, hire_date
FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , hire_date) 'days_worked'
FROM hr.employees;