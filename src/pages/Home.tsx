import React from "react";
import CharacterTable from "../components/CharacterTable";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div style={{ flex: 1, padding: "20px" }}>
        <CharacterTable />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
