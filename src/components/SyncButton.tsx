import { useState } from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import { toast } from "react-toastify";
import axios from "../services/api";

const SyncButton: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSync = async () => {
    setLoading(true);
    try {
      await axios.post("/characters/refresh");
      toast.success("Successful synchronization");
    } catch (error) {
      console.error("Failed to sync characters", error);
      toast.error("Failed to sync characters");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Button
        variant="contained"
        onClick={handleSync}
        disabled={loading}
        startIcon={loading ? <CircularProgress size={24} /> : undefined}
        sx={{ height: "45px" }}
      >
        {loading ? "Synchronizing..." : "Synchronize"}
      </Button>
    </Box>
  );
};

export default SyncButton;
