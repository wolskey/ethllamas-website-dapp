import React from 'react';
import * as s from "./styles/globalStyles";

export default function Footer() {
    return (
        <s.Container jc={"center"} ai={"center"} style={{ flexDirection: "row", width: "70%" }}s>
        <s.TextFooter style={{ textAlign: "center", color: "var(--primary-text)"}} >
          Llama Labs, LLC - <a href="/license" style={{ color: "var(--primary-text)"}}>License</a> - <a href="ETHLLAMAS_Audit_Passed.pdf" style={{ color: "var(--primary-text)"}}>Audit</a>
        </s.TextFooter>
      </s.Container>
    )
  }
