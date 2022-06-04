import React from 'react';
import * as s from "./styles/globalStyles";

export default function Footer() {
    return (
        <s.Container jc={"center"} ai={"center"} style={{ flexDirection: "row", width: "70%" }}s>
        <s.TextFooter style={{ textAlign: "center", color: "var(--primary-text)"}} >
        <a href="/" style={{ color: "var(--primary-text)"}}>Check your neck - this is Vampirestown.nft</a>
        </s.TextFooter>
      </s.Container>
    )
  }
