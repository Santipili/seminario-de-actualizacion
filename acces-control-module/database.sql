USE `mydb` ;



-- -----------------------------------------------------

-- Table `mydb`.`user`

-- -----------------------------------------------------

CREATE  TABLE IF NOT EXISTS `mydb`.`user` (

    `idusuarios` INT NOT NULL ,

    `name` VARCHAR(45) NULL ,

    `surrname` VARCHAR(45) NULL ,

    `email` VARCHAR(255) NULL ,

    PRIMARY KEY (`idusuarios`) ,

    UNIQUE INDEX `idusuarios_UNIQUE` (`idusuarios` ASC) )

ENGINE = InnoDB;





-- -----------------------------------------------------

-- Table `mydb`.`group`

-- -----------------------------------------------------

CREATE  TABLE IF NOT EXISTS `mydb`.`group` (

    `idgroup` INT NOT NULL ,

    `name` VARCHAR(45) NULL ,

    PRIMARY KEY (`idgroup`) ,

    UNIQUE INDEX `idgroup_UNIQUE` (`idgroup` ASC) ,

    UNIQUE INDEX `name_UNIQUE` (`name` ASC) )

ENGINE = InnoDB;





-- -----------------------------------------------------

-- Table `mydb`.`user_group`

-- -----------------------------------------------------

CREATE  TABLE IF NOT EXISTS `mydb`.`user_group` (

    `iduser_group` INT NOT NULL ,

    `id_user` INT NULL ,

    `id_group` INT NULL ,

    PRIMARY KEY (`iduser_group`) ,

    UNIQUE INDEX `iduser_group_UNIQUE` (`iduser_group` ASC) ,

    INDEX `id-user_idx` (`id_user` ASC) ,

    INDEX `id-group_idx` (`id_group` ASC) ,

    UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC) ,

    CONSTRAINT `id-user`

        FOREIGN KEY (`id_user` )

        REFERENCES `mydb`.`user` (`idusuarios` )

        ON DELETE NO ACTION

        ON UPDATE NO ACTION,

    CONSTRAINT `id-group`

        FOREIGN KEY (`id_group` )

        REFERENCES `mydb`.`group` (`idgroup` )

        ON DELETE NO ACTION

        ON UPDATE NO ACTION)

ENGINE = InnoDB;


