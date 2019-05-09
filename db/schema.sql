DROP DATABASE IF EXISTS burgers_db;
CREATE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INT(11) NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(69) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);


INSERT INTO burgers
(burger_name)
values
("grilled chicken burger"),
("Turkey Burger"),
("Double Cheese Burger"),
("CauliFlower Veggie Burger"),
("Veggie Burger");