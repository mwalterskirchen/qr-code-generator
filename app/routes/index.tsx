import {
  Button,
  Center,
  Container,
  Group,
  Stack,
  Tabs,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { Footer } from "~/components/Footer";

export default function Index() {
  const [qrCode, setQrCode] = useState("");
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState<string | null>("text");

  useEffect(() => {
    async function generateQRCode() {
      if (!content || !contentType) return setQrCode("");

      let qrCodeContent;

      if (contentType === "url") {
        qrCodeContent = `<a href="${content}">${content}</a>`;
      } else {
        qrCodeContent = content;
      }

      const qrCode = await QRCode.toString(qrCodeContent, {
        type: "svg",
      });
      setQrCode(qrCode);
    }
    generateQRCode();
  }, [content, contentType]);

  return (
    <Container>
      <Stack sx={{ height: "100vh" }}>
        <Stack sx={{ flex: 1 }}>
          <Center>
            <Title>QR Code Generator</Title>
          </Center>
          <Tabs
            value={contentType}
            onTabChange={setContentType}
            variant="pills"
            defaultValue="text"
          >
            <Tabs.List>
              <Tabs.Tab value="text">Text</Tabs.Tab>
              <Tabs.Tab value="url">URL</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="text">
              <Textarea
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter Text"
                label="Text"
                value={content}
              />
            </Tabs.Panel>

            <Tabs.Panel value="url">
              <TextInput
                onChange={(e) => setContent(e.target.value)}
                placeholder="https://example.com"
                label="URL"
                value={content}
              />
            </Tabs.Panel>
          </Tabs>

          <SVG src={qrCode} />
        </Stack>
        <Footer />
      </Stack>
    </Container>
  );
}
