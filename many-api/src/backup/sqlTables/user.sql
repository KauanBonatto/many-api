CREATE TABLE `many_db`.`usersss` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NULL,
  `password` VARCHAR(45) NOT NULL,
  `isActive` TINYINT NOT NULL DEFAULT 1,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;