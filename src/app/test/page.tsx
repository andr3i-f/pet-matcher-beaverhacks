"use client";

import React, { useState } from "react";
import MatchCelebration from "./matchPopup";

export default function TestMatchPopupPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "4rem",
      }}
    >
      <h1>🐾 Test Pet Match Popup</h1>

      {!showPopup ? (
        <button
          onClick={() => setShowPopup(true)}
          style={{
            padding: "1rem 2rem",
            background: "#22c55e",
            color: "#fff",
            fontSize: "1.25rem",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            marginTop: "2rem",
          }}
        >
          Match with Fluffy!
        </button>
      ) : (
        <MatchCelebration petName="Fluffy" />
      )}
    </main>
  );
}
