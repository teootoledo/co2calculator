import React, { Fragment, useState, useRef } from "react";
import {
  Container,
  Badge,
  Button,
  Input,
  Select,
  Stack,
  Box,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  HStack,
  Feature,
  Text,
  Tooltip,
  FormLabel,
  Heading,
} from "@chakra-ui/react";

const CalculadoraCO2 = ({ room }) => {
  const [aula, setAula] = useState({
    estudiantes: null,
    profesores: null,
    flujoTotalPersonaLS: null,
    flujoTotalPersonaM3H: null,
    calibracionCO2ext: 420,
    limiteNoHEPA: null,
    limiteSiHEPA: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  //------- CONSTANTES ----------//
  const tasaExhaEst = 0.24636;
  const tasaExhaProf = 0.36812;
  const H28 = 1;
  const H29 = 0.000001;

  const inputRef = useRef([]);

  const calcular = (e) => {
    setIsLoading(true);
    const { estudiantes, profesores, calibracionCO2ext } = aula;
    const litrosCO2pm = parseFloat(
      estudiantes * tasaExhaEst + profesores * tasaExhaProf
    );
    const flujoAireExt = parseFloat((room.volumen * room.ventilacion) / 60);
    const flujoAireFil = parseFloat((room.volumen * room.cambiosFiltro) / 60);
    const flujoAireExtNoHEPA_M3pM = flujoAireExt + flujoAireFil;
    const flujoAireExtNoHEPA_LpM = flujoAireExtNoHEPA_M3pM * 1000;
    const flujoAireExtXPersona = parseFloat(
      (flujoAireExt * 1000) / 60 / (room.estudiantes + room.profesores)
    );
    const flujoAireFilXPersona = parseFloat(
      (flujoAireFil * 1000) / 60 / (room.estudiantes + room.profesores)
    );
    const flujoTotalPersonaLS_Calc =
      flujoAireExtXPersona + flujoAireFilXPersona; //SALIDA
    const flujoTotalPersonaM3H_Calc = flujoTotalPersonaLS_Calc * 3.6; //SALIDA
    const flujoObjetivoAireExt = flujoAireExt * 1000;
    const limiteNoHEPA_Calc =
      (litrosCO2pm + flujoAireExtNoHEPA_LpM * calibracionCO2ext * H28 * H29) /
      (flujoAireExtNoHEPA_LpM * H28 * H29); //SALIDA
    const limiteSiHEPA_Calc =
      (litrosCO2pm + flujoObjetivoAireExt * calibracionCO2ext * H28 * H29) /
      (flujoObjetivoAireExt * H28 * H29);
    //SALIDA
    console.log(flujoTotalPersonaLS_Calc);
    console.log(flujoAireExtXPersona);
    console.log(flujoAireFilXPersona);

    setIsLoading(false);
    setAula({
      ...aula,
      ["limiteNoHEPA"]: limiteNoHEPA_Calc.toFixed(),
      ["limiteSiHEPA"]: limiteSiHEPA_Calc.toFixed(),
      ["flujoTotalPersonaLS"]: flujoTotalPersonaLS_Calc,
      ["flujoTotalPersonaM3H"]: flujoTotalPersonaM3H_Calc,
    });
  };

  return (
    <>
      <Container>
        <Heading
          bgGradient="linear(to-l, #f85dad, #df3a8e)"
          bgClip="text"
          fontFamily="SF-bold"
          fontSize="3xl"
          className="mb-3"
        >
          Calculadora de niveles{" "}
          <Badge
            bgGradient="linear(to-l, #f85dad, #df3a8e)"
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
          className="mt-4 mb-3"
        >
          Límite CO2 que no puede superar el medidor (en el ambiente
          dimensionado en la calculadora de purificadores).
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
            {/* <Text
              color="gray.500"
              fontFamily="SF-regular"
              fontSize="lg"
              className="mt-5"
            >
              Flujo de aire limpio de virus (total por persona)
            </Text>
            <SimpleGrid columns={2} spacing={4}>
              <Box height="80px">
                <div className="neuBtn py-3">
                  <p>{aula.flujoTotalPersonaLS}</p>
                  <div
                    className={`${!aula.flujoTotalPersonaLS && "invisible"} `}
                  >
                    <Tooltip
                      label="Flujo total de aire limpio por persona"
                      aria-label="flujoTotalPersonasLS"
                    >
                      <p>{aula.flujoTotalPersonaLS} [l/s]</p>
                    </Tooltip>
                  </div>
                </div>
              </Box>
              <Box height="80px">
                <div className="neuBtn py-3">
                  <p>{aula.flujoTotalPersonaM3H}</p>

                  <div
                    className={`${!aula.flujoTotalPersonaM3H && "invisible"} `}
                  >
                    <Tooltip
                      label="Flujo de aire exterior"
                      aria-label="litrosCO2pm"
                    >
                      <p>{aula.flujoTotalPersonaM3H} [m³/h]</p>
                    </Tooltip>
                  </div>
                </div>
              </Box>
            </SimpleGrid> */}
            <Text
              color="gray.500"
              fontFamily="SF-regular"
              fontSize="lg"
              className="mt-5"
            >
              Calibración CO<sub>2</sub> exterior:
            </Text>
            <Input
              type="number"
              name="calibracionCO2ext"
              placeholder="[ppm]**"
              className="neuInput"
              size="md"
              defaultValue="420"
              ref={(el) => (inputRef.current[2] = el)}
              onChange={() =>
                setAula({
                  ...aula,
                  ["calibracionCO2ext"]: inputRef.current[2].value,
                })
              }
            />
            <Text
              color="gray.500"
              fontFamily="SF-regular"
              fontSize="sm"
              className="mt-2 mb-3"
            >
              420 ppm es lo usual en exterior, pero se recomienda ingresar el
              valor medido en el establecimiento. **ppm
            </Text>
            <Button
              onClick={() => calcular()}
              isLoading={isLoading}
              loadingText="Calculando..."
              className="neuBtn2 neuBackground"
            >
              Calcular límite seguro
            </Button>
            <SimpleGrid columns={2} spacing={4} className="mb-4">
              <Box height="80px">
                <div className="neuBtn py-3">
                  <Text
                    color="gray.500"
                    fontFamily="SF-regular"
                    fontSize="sm"
                    className="mx-3 mb-2"
                  >
                    Límite CO2 que no puede superar el medidor si NO usa filtro
                    HEPA* (ppm):
                  </Text>
                  <div className={`${!aula.limiteNoHEPA && "invisible"} `}>
                    <Tooltip
                      label="Limite CO2 sin filtro HEPA"
                      aria-label="litrosCO2pm"
                    >
                      <p>{aula.limiteNoHEPA} [ppm]</p>
                    </Tooltip>
                  </div>
                </div>
              </Box>
              <Box height="80px" className="mb-5">
                <div className="neuBtn py-3">
                  <Text
                    color="gray.500"
                    fontFamily="SF-regular"
                    fontSize="sm"
                    className="mx-3 mb-2"
                  >
                    Límite CO2 que no puede superar el medidor si usa filtro
                    HEPA* (ppm):
                  </Text>
                  <div className={`${!aula.limiteSiHEPA && "invisible"} `}>
                    <Tooltip
                      label="Limite CO2 con filtro HEPA"
                      aria-label="litrosCO2pm"
                    >
                      <p>{aula.limiteSiHEPA} [ppm]</p>
                    </Tooltip>
                  </div>
                </div>
              </Box>
            </SimpleGrid>
          </Stack>
          <Text
            color="gray.500"
            fontFamily="SF-regular"
            fontSize="sm"
            className="my-2 mx-3"
          >
            No se debería superar estas tasas para minimizar los riesgos. **
            Partes por millón
          </Text>
        </form>
      </Container>
    </>
  );
};

export default CalculadoraCO2;
