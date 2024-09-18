import React, { useEffect, useState } from "react";
import { Button, CircularProgress, TextField, Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridPaginationModel,
} from "@mui/x-data-grid";
import axios from "../services/api";
import { toast } from "react-toastify";

import { Character } from "../types/Character";
import SyncButton from "./SyncButton";

const CharacterTable: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [rowCount, setRowCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchName, setSearchName] = useState<string>("");
  const [importing, setImporting] = useState<boolean>(false);

  useEffect(() => {
    fetchCharacters();
  }, [page, pageSize, searchName]);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/characters", {
        params: {
          name: searchName,
          page: page + 1,
          limit: pageSize,
        },
      });
      setCharacters(response.data.data.characters);
      setRowCount(response.data.data.total);
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
    setPage(0);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
  };

  const handleImport = async () => {
    setImporting(true);
    try {
      await axios.post("/characters/import");
      fetchCharacters();
      toast.success("Characters imported successfully");
    } catch (error) {
      console.error("Error importing characters:", error);
      toast.error("Failed to import characters");
    } finally {
      setImporting(false);
    }
  };

  const handlePaginationModelChange = (model: GridPaginationModel) => {
    handlePageChange(model.page);
    handlePageSizeChange(model.pageSize);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      renderCell: (params: GridRenderCellParams<Character>) => (
        <img
          src={params.row.image}
          alt={params.row.name}
          style={{
            width: "80px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 180, flex: 1 },
    { field: "status", headerName: "Status", width: 120, flex: 1 },
    { field: "species", headerName: "Species", width: 150, flex: 1 },
    { field: "gender", headerName: "Gender", width: 120, flex: 1 },
  ];

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1200px",
        margin: "0 auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#202329",
          fontFamily:
            "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: "3rem",
          fontWeight: 900,
          textAlign: "center",
        }}
      >
        Housy Host | Rick And Morty
      </h1>
      <Box sx={{ marginBottom: 2, width: "100%" }}>
        <TextField
          label="Search by name"
          variant="outlined"
          fullWidth
          value={searchName}
          onChange={handleSearchChange}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginBottom: 2,
        }}
      >
        <SyncButton />
        <Button
          variant="contained"
          color="primary"
          onClick={handleImport}
          disabled={importing}
          startIcon={importing ? <CircularProgress size={24} /> : undefined}
          sx={{ height: "45px" }}
        >
          {importing ? "Importing..." : "Import Characters"}
        </Button>
      </Box>
      <DataGrid
        rows={characters}
        columns={columns}
        paginationModel={{ pageSize, page }}
        paginationMode="server"
        rowCount={rowCount}
        pagination
        onPaginationModelChange={handlePaginationModelChange}
        loading={loading}
        getRowId={(row) => row.id}
        rowHeight={105}
        sx={{
          width: "100%",
          "& .MuiDataGrid-cell": {
            padding: "8px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5",
            fontSize: "16px",
            fontFamily:
              "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          },
        }}
      />
    </Box>
  );
};

export default CharacterTable;
