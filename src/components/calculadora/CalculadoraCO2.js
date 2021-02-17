import React, { Fragment, useState, useRef } from "react";
import {
  Container,
  Badge,
  Button,
  Input,
  Select,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  HStack,
  Text,
  Tooltip,
  FormLabel,
  Heading,
} from "@chakra-ui/react";

const CalculadoraCO2 = () => {
  const [aula, setAula] = useState({
    estudiantes: null,
    profesores: null,
    litrosCO2pm: null,
    flujoAireExt: null,
    flujoAireFil: null,
    cambioAire: null,
    ventilacion: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef([]);

  const calcular = (e) => {
    setIsLoading(true);
    const { alto, ancho, largo, ventilacion, cambioAire } = aula;
    const volumen = parseInt(alto * ancho * largo);
    const result = parseInt(volumen * (cambioAire - ventilacion));
    setAula({ ...aula, ["cadr"]: result, ["volumen"]: volumen });
    setIsLoading(false);
  };

  return (
    <>
      <Container>
        <Heading
          bgGradient="linear(to-l, #fea562, #ff7b00)"
          bgClip="text"
          fontFamily="SF-bold"
          fontSize="3xl"
          className="mb-3"
        >
          Calculadora de niveles{" "}
          <Badge
            bgGradient="linear(to-l, #fea562, #ff7b00)"
            color="#e6e6f0"
            fontSize="1.2rem"
            className="mb-1"
          >
            CO2
          </Badge>
        </Heading>
        <Text
          color="gray.500"
          fontFamily="SF-regular"
          fontSize="lg"
          className="mb-3"
        >
          Tasa de generación de CO2:
        </Text>
        <form action="">
          <Stack spacing={6} w={["100%"]}>
            <Input
              type="number"
              name="estudiantes"
              placeholder="Nro. de estudiantes"
              className="neuInput"
              size="md"
              ref={(el) => (inputRef.current[0] = el)}
              onChange={() =>
                setAula({ ...aula, ["estudiantes"]: inputRef.current[0].value })
              }
            />
            <Input
              type="number"
              name="profesores"
              placeholder="Nro. de profesores"
              size="md"
              className="neuInput"
              ref={(el) => (inputRef.current[1] = el)}
              onChange={() =>
                setAula({ ...aula, ["profesores"]: inputRef.current[1].value })
              }
            />
            <Text color="gray.500" fontFamily="SF-regular" fontSize="lg">
              Total de litros CO2 por minuto:
            </Text>
            <div className="neuBtn py-3">
              <div className={`${!aula.litrosCO2pm && "invisible"} `}>
                <Tooltip
                  label="Clean Air Delivery Rate"
                  aria-label="litrosCO2pm"
                >
                  <p>Cadr: {aula.litrosCO2pm} m³/h</p>
                </Tooltip>
              </div>
            </div>
            <Text
              color="gray.500"
              fontFamily="SF-regular"
              fontSize="lg"
              className="mt-5"
            >
              Flujo de aire exterior:
            </Text>
            <div className="neuBtn py-3">
              <div className={`${!aula.flujoAireExt && "invisible"} `}>
                <Tooltip
                  label="Clean Air Delivery Rate"
                  aria-label="litrosCO2pm"
                >
                  <p>{aula.flujoAireExt} [m³/min]</p>
                </Tooltip>
              </div>
            </div>
            <Text
              color="gray.500"
              fontFamily="SF-regular"
              fontSize="lg"
              className="mt-5"
            >
              Flujo de aire filtrado:
            </Text>
            <div className="neuBtn py-3">
              <div className={`${!aula.flujoAireFil && "invisible"} `}>
                <Tooltip
                  label="Clean Air Delivery Rate"
                  aria-label="litrosCO2pm"
                >
                  <p>{aula.flujoAireFil} [m³/min]</p>
                </Tooltip>
              </div>
            </div>
            <Text
              color="gray.500"
              fontFamily="SF-regular"
              fontSize="lg"
              className="mt-5"
            >
              Flujo de aire exterior:
            </Text>
            <div className="neuBtn py-3">
              <div className={`${!aula.flujoAireExt && "invisible"} `}>
                <Tooltip
                  label="Clean Air Delivery Rate"
                  aria-label="litrosCO2pm"
                >
                  <p>{aula.flujoAireExt} [m³/min]</p>
                </Tooltip>
              </div>
            </div>

            <Text
              color="gray.500"
              fontFamily="SF-regular"
              fontSize="lg"
              className="mt-5"
            >
              Flujo de aire limpio de virus por persona:
            </Text>
            <Input
              type="number"
              name="flujoAireExt"
              placeholder="Flujo de aire exterior por persona [m³/min]"
              className="neuInput"
              size="md"
              ref={(el) => (inputRef.current[2] = el)}
              onChange={() =>
                setAula({
                  ...aula,
                  ["flujoAireExt"]: inputRef.current[2].value,
                })
              }
            />
            <Input
              type="number"
              name="flujoAireExt"
              placeholder="Flujo de aire filtrado por persona [m³/min]"
              className="neuInput"
              size="md"
              ref={(el) => (inputRef.current[3] = el)}
              onChange={() =>
                setAula({
                  ...aula,
                  ["flujoAireFil"]: inputRef.current[3].value,
                })
              }
            />
            <Button
              onClick={() => calcular()}
              isLoading={isLoading}
              loadingText="Calculando..."
              className="neuBtn2 neuBackground"
            >
              Calcular
            </Button>
            <div className={`${!aula.cadr && "invisible"}`}>
              <p>Cadr: {aula.cadr} m3/h</p>
            </div>
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default CalculadoraCO2;
