-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @@SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema oranteshi
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema oranteshi
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `oranteshi` DEFAULT CHARACTER SET utf8;

USE `oranteshi`;

-- -----------------------------------------------------
-- Table `oranteshi`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE `usuarios` (
    `idUsuario` int NOT NULL AUTO_INCREMENT, `email` varchar(45) DEFAULT NULL, `password` varchar(150) DEFAULT NULL, PRIMARY KEY (`idUsuario`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3
-- -----------------------------------------------------
-- Table `oranteshi`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oranteshi`.`productos` (
    `idproductos` INT NOT NULL AUTO_INCREMENT, `nombre` VARCHAR(45) NOT NULL, `precio` INT NOT NULL, `descuento` INT NULL, `idUsuario` INT NOT NULL, PRIMARY KEY (`idproductos`), INDEX `id_usuario_idx` (`idUsuario` ASC) VISIBLE, CONSTRAINT `id_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `oranteshi`.`usuarios` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

SET SQL_MODE = @OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;