-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-08-2024 a las 23:24:19
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dataknow`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `nombre` varchar(45) NOT NULL,
  `tipoId` varchar(45) NOT NULL,
  `id` varchar(20) NOT NULL,
  `observaciones` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`nombre`, `tipoId`, `id`, `observaciones`) VALUES
('Antony Ceballos', 'Cédula', '1143111111', ''),
('John Doe', 'Cédula', '1144111111', ''),
('Bruce Wayne', 'Cédula', '1146111111', ''),
('Clark Kent', 'Cédula', '1145111111', ''),
('Diana Prince', 'Cédula', '1147111111', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

DROP TABLE IF EXISTS `factura`;
CREATE TABLE IF NOT EXISTS `factura` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idCliente` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT (now()),
  `nombreProducto` varchar(100) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `valorDescuento` decimal(10,2) DEFAULT NULL,
  `iva` decimal(10,2) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_factura_cliente` (`idCliente`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `idCliente`, `fecha`, `nombreProducto`, `precio`, `valorDescuento`, `iva`, `total`) VALUES
(1, '1143111111', '0000-00-00 00:00:00', 'Zapatos', 100.00, 0.00, 0.00, 100.00),
(2, '1143111111', '0000-00-00 00:00:00', 'Camiseta', 59.00, 0.00, 0.00, 59.00),
(3, '1143111111', '0000-00-00 00:00:00', 'Chaqueta', 59.00, 0.00, 0.00, 59.00),
(4, '1144111111', '0000-00-00 00:00:00', 'Camiseta', 59.00, 0.00, 0.00, 59.00);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
