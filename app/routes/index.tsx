import {
  Button,
  Center,
  Container,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";

export default function Index() {
  const [qrCode, setQrCode] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    async function generateQRCode() {
      if (!text) return setQrCode("");
      const qrCode = await QRCode.toString(text, {
        type: "svg",
      });
      setQrCode(qrCode);
    }
    generateQRCode();
  }, [text]);

  return (
    <Container>
      <Stack sx={{ height: "100vh" }}>
        <Stack sx={{ flex: 1 }}>
          <Stack>
            <Title>QR Code Generator</Title>
            <Group>
              <Button>Text</Button>
              <Button>Link</Button>
              <Button>Email</Button>
            </Group>
            <TextInput
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Text"
              label="Text"
              value={text}
            />
          </Stack>

          {qrCode && <SVG src={qrCode} />}
        </Stack>
        <Center>
          <Text>Made with ❤️ in Vienna</Text>
        </Center>
      </Stack>
    </Container>
  );
}
