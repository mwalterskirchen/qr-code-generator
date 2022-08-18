import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Button } from "~/components/Button";
import { Footer } from "~/components/Footer";

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
    <div className="flex flex-col h-screen">
      <h1 className="text-5xl text-teal-600 font-bold">QR Code Generator</h1>
      <div>
        <Button>Text</Button>
        <Button>Link</Button>
      </div>
      <input
        className="border border-teal-600 rounded-lg p-2"
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <div
        className="w-64 flex-1"
        dangerouslySetInnerHTML={{ __html: qrCode }}
      ></div>

      <Footer />
    </div>
  );
}
