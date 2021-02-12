import React, { Fragment, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
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
  Text,
  FormLabel,
  Heading,
} from "@chakra-ui/react";

const CalculadoraCADR = () => {
  const [room, setRoom] = useState({
    volumen: null,
    alto: null,
    ancho: null,
    largo: null,
    cadr: null,
    cambioAire: null,
    ventilacion: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef([]);

  const calcular = (e) => {
    setIsLoading(true);
    const { alto, ancho, largo, ventilacion, cambioAire } = room;
    const volumen = parseInt(alto * ancho * largo);
    const result = parseInt(volumen * (cambioAire - ventilacion));
    setRoom({ ...room, ["cadr"]: result, ["volumen"]: volumen });
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
          Calculadora de ventilación
        </Heading>
        <Text
          color="gray.500"
          fontFamily="SF-regular"
          fontSize="lg"
          className="mb-3"
        >
          Ingrese las características del recinto:
        </Text>
        <form action="">
          <Stack spacing={6} w={["100%"]}>
            <Input
              type="number"
              name="alto"
              placeholder="Altura"
              className="neuInput"
              onChange={() =>
                setRoom({ ...room, ["alto"]: inputRef.current[0].value })
              }
              size="md"
              ref={(el) => (inputRef.current[0] = el)}
            />
            <Input
              type="number"
              name="ancho"
              placeholder="Ancho"
              size="md"
              className="neuInput"
              ref={(el) => (inputRef.current[1] = el)}
              onChange={() =>
                setRoom({ ...room, ["ancho"]: inputRef.current[1].value })
              }
            />
            <Input
              type="number"
              name="largo"
              placeholder="Largo"
              className="neuInput"
              size="md"
              ref={(el) => (inputRef.current[2] = el)}
              onChange={() =>
                setRoom({ ...room, ["largo"]: inputRef.current[2].value })
              }
            />
            <Input
              type="number"
              name="cambioAire"
              placeholder="Cambios de aire"
              className="neuInput"
              size="md"
              ref={(el) => (inputRef.current[3] = el)}
              onChange={() =>
                setRoom({ ...room, ["cambioAire"]: inputRef.current[3].value })
              }
            />
            <Select
              ref={(el) => (inputRef.current[4] = el)}
              placeholder="Seleciona una opcion"
              className="neuInput"
              value={room.ventilacion}
              onChange={(el) =>
                setRoom({ ...room, ["ventilacion"]: inputRef.current[4].value })
              }
            >
              <option value="0.5">Mala ventilación</option>
              <option value="1">Ventilación baja</option>
              <option value="1.5">Normal de colegio</option>
              <option value="3">Buena ventilación</option>
              <option value="4">Ventilación mejorada con algún sistema</option>
            </Select>
            <Button
              onClick={() => calcular()}
              isLoading={isLoading}
              loadingText="Calculando..."
              className="neuBtn2 neuBackground"
            >
              Calcular
            </Button>
            <div className={`${!room.cadr && "invisible"}`}>
              <p>Cadr: {room.cadr} m3/h</p>
            </div>
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default CalculadoraCADR;
