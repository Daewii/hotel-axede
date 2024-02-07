-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-02-2024 a las 18:42:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `axede_hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `disponibilidad_habitaciones`
--

CREATE TABLE `disponibilidad_habitaciones` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `tipo_habitacion_id` int(11) NOT NULL,
  `cantidad_disponible` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `tipo_habitacion_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`id`, `hotel_id`, `tipo_habitacion_id`, `cantidad`) VALUES
(1, 1, 1, 30),
(2, 1, 2, 3),
(3, 2, 2, 20),
(4, 2, 3, 2),
(5, 3, 1, 10),
(6, 3, 2, 1),
(7, 4, 1, 20),
(8, 4, 2, 20),
(9, 4, 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles`
--

CREATE TABLE `hoteles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cupo_maximo` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hoteles`
--

INSERT INTO `hoteles` (`id`, `nombre`, `cupo_maximo`, `imagen`) VALUES
(1, 'Barranquilla', 4, 'hotel1.jpg'),
(2, 'Cali', 6, 'hotel2.jpg'),
(3, 'Cartagena', 8, 'hotel3.jpg'),
(4, 'Bogotá', 6, 'hotel4.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarifas`
--

CREATE TABLE `tarifas` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `tipo_habitacion_id` int(11) NOT NULL,
  `temporada` varchar(10) NOT NULL,
  `tarifa` decimal(10,2) NOT NULL,
  `num_personas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_habitaciones`
--

CREATE TABLE `tipos_habitaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_habitaciones`
--

INSERT INTO `tipos_habitaciones` (`id`, `nombre`) VALUES
(1, 'Estándar'),
(2, 'Premium'),
(3, 'VIP');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `disponibilidad_habitaciones`
--
ALTER TABLE `disponibilidad_habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `tipo_habitacion_id` (`tipo_habitacion_id`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `tipo_habitacion_id` (`tipo_habitacion_id`);

--
-- Indices de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tarifas`
--
ALTER TABLE `tarifas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hotel_id` (`hotel_id`,`tipo_habitacion_id`,`temporada`,`num_personas`),
  ADD KEY `tipo_habitacion_id` (`tipo_habitacion_id`);

--
-- Indices de la tabla `tipos_habitaciones`
--
ALTER TABLE `tipos_habitaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `disponibilidad_habitaciones`
--
ALTER TABLE `disponibilidad_habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tarifas`
--
ALTER TABLE `tarifas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipos_habitaciones`
--
ALTER TABLE `tipos_habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `disponibilidad_habitaciones`
--
ALTER TABLE `disponibilidad_habitaciones`
  ADD CONSTRAINT `disponibilidad_habitaciones_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `disponibilidad_habitaciones_ibfk_2` FOREIGN KEY (`tipo_habitacion_id`) REFERENCES `tipos_habitaciones` (`id`);

--
-- Filtros para la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `habitaciones_ibfk_2` FOREIGN KEY (`tipo_habitacion_id`) REFERENCES `tipos_habitaciones` (`id`);

--
-- Filtros para la tabla `tarifas`
--
ALTER TABLE `tarifas`
  ADD CONSTRAINT `tarifas_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `tarifas_ibfk_2` FOREIGN KEY (`tipo_habitacion_id`) REFERENCES `tipos_habitaciones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
