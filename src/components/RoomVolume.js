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
} from "@chakra-ui/react";
import { render } from "@testing-library/react";

const RoomVolume = () => {
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
    const result = parseInt(alto * ancho * largo * (cambioAire - ventilacion));
    setRoom({ ...room, ["cadr"]: result });
    setIsLoading(false);
  };

  return (
    <>
      <Container>
        <form action="">
          <Stack spacing={5}>
            <Input
              type="number"
              name="alto"
              placeholder="Altura"
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
              ref={(el) => (inputRef.current[1] = el)}
              onChange={() =>
                setRoom({ ...room, ["ancho"]: inputRef.current[1].value })
              }
            />
            <Input
              type="number"
              name="largo"
              placeholder="Largo"
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
              size="md"
              ref={(el) => (inputRef.current[3] = el)}
              onChange={() =>
                setRoom({ ...room, ["cambioAire"]: inputRef.current[3].value })
              }
            />
            <Select
              ref={(el) => (inputRef.current[4] = el)}
              placeholder="Seleciona una opcion"
              value={room.ventilacion}
              onChange={(el) =>
                setRoom({ ...room, ["ventilacion"]: inputRef.current[4].value })
              }
            >
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
            </Select>
            <Button
              onClick={() => calcular()}
              colorScheme="green"
              isLoading={isLoading}
              loadingText="Calculando..."
            >
              Calcular
            </Button>
            {room?.cadr && <p>Cadr: {room.cadr} m3/h</p>}
          </Stack>
        </form>
      </Container>
    </>
  );
};

export default RoomVolume;
