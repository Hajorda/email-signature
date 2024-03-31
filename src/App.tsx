import React, { useState, useEffect } from "react";
import "./styless.css";

interface PhotoSignatureProps {
  fullName: string;
  position: string;
  email: string;
  phone: string;
  photo: string;
}

function SignaturePreview({ signature }: { signature: string }) {
  return (
    <div id="signature-container">
      <div
        id="signature-preview"
        className="signature-preview-box"
        dangerouslySetInnerHTML={{ __html: signature }}
      />
    </div>
  );
}

export default function App() {
  const [inputs, setInputs] = useState<PhotoSignatureProps>({
    fullName: "",
    position: "",
    email: "",
    phone: "",
    photo: "https://i.hizliresim.com/kef7tcs.jpg", // Default photo path
  });
  const [signature, setSignature] = useState<string>(""); // State to hold the generated signature HTML
  const [copied, setCopied] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    generateSignature(); // Generate signature on initial render
  }, [inputs, imageUrl]); // Re-generate signature when inputs or imageUrl change

  useEffect(() => {
    document.title = "Email Signature"; // Set webpage title
  }, []);

  function handleInputs(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  }

  function generateSignature() {
    const photoSource = imageUrl ? imageUrl : inputs.photo; // Use the provided image URL or the default photo path
    const signatureHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <table cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 16px;">
          <tbody>
            <tr>
              <td style="padding-right: 20px;">
                <div style="width: auto; height: auto; max-width: 200px; max-height: 200px; overflow: hidden;">
                  <img
                    src="${photoSource}"
                    alt="Profile Picture"
                    style="width: 138px; height: 138px; object-fit: contain; display: block;"
                  />
                </div>
              </td>
              <td style="border-left: 3px solid #454545; padding-left: 20px;">
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td>
                        <p style="margin: 0; font-size: 30px; font-weight: 700; color: #454545; margin-bottom: 5px;">${inputs.fullName || "CelalSengor"}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin: 0; font-size: 18px; font-weight: 700; color: #454545; margin-bottom: 15px;">${inputs.position || "Academic Man"}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin: 0; font-size: 14px; font-weight: 400; color: #454545; margin-bottom: 3px;">${inputs.phone || "+90 505 050 0505"}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin: 0; font-size: 14px; font-weight: 400; color: #454545; margin-bottom: 3px;"><a href="mailto:${inputs.email || "celal@itu.edu.tr"}" target="_blank" style="text-decoration: none; color: blue;">${inputs.email || "celal@itu.edu.tr"}</a></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin: 0; font-size: 14px; font-weight: 400; color: #454545;"><a href="http://modelcj.org" target="_blank" style="text-decoration: none; color: blue;">modelcj.org</a></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    setSignature(signatureHTML);
}

  function handleCopy() {
    const signatureContainer = document.getElementById("signature-container");
    if (signatureContainer) {
      const range = document.createRange();
      range.selectNodeContents(signatureContainer);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }
    }
  }

  return (
    <form className="new-item-form">
      <h1>Email Signature Generator</h1>
      <div className="form-row">
        <label htmlFor="fullName">Name Surname</label>
        <input
          type="text"
          id="fullName"
          value={inputs.fullName}
          onChange={handleInputs}
        />

        <label htmlFor="position">Title</label>
        <input
          type="text"
          id="position"
          value={inputs.position}
          onChange={handleInputs}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={inputs.email}
          onChange={handleInputs}
        />

        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          id="phone"
          value={inputs.phone}
          onChange={handleInputs}
        />

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <h2>Signature Preview</h2>
      <SignaturePreview signature={signature} />
      <button className="btn" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy Signature HTML'}
      </button>
      
       
      <div className="made-by">
        <p>Made by <a href="https://github.com/hajorda" target="_blank">Hajorda</a></p>
      </div>
    </form>
  );
}
