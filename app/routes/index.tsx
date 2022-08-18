import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function Index() {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    async function generateQRCode() {
      const qrCode = await QRCode.toString(
        '<a href="https://google.com">Website</a>',
        {
          type: "svg",
        }
      );
      setQrCode(qrCode);
    }
    generateQRCode();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {qrCode && (
        <div
          style={{ width: "300px" }}
          dangerouslySetInnerHTML={{ __html: qrCode }}
        ></div>
      )}
    </div>
  );
}
