import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CardGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-1 overflow-hidden">
                  <p class="text-truncate font-size-14 mb-2">Approved</p>
                  <h4 class="mb-0">1452</h4>
                </div>
                <div class="text-primary">
                  <i class="ri-stack-line font-size-24"></i>
                </div>
              </div>
            </div>
            <div class="border-top py-3 card-body">
              <div class="text-truncate">
                <span class="badge badge-soft-success font-size-11 me-1">
                  <i class="mdi mdi-menu-up"> </i> 2.4%
                </span>
                <span class="text-muted ms-2">From previous period</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-1 overflow-hidden">
                  <p class="text-truncate font-size-14 mb-2">Processing</p>
                  <h4 class="mb-0">1452</h4>
                </div>
                <div class="text-primary">
                  <i class="ri-stack-line font-size-24"></i>
                </div>
              </div>
            </div>
            <div class="border-top py-3 card-body">
              <div class="text-truncate">
                <span class="badge badge-soft-success font-size-11 me-1">
                  <i class="mdi mdi-menu-up"> </i> 2.4%
                </span>
                <span class="text-muted ms-2">From previous period</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div class="card">
            <div class="card-body">
              <div class="d-flex">
                <div class="flex-1 overflow-hidden">
                  <p class="text-truncate font-size-14 mb-2">Total</p>
                  <h4 class="mb-0">1452</h4>
                </div>
                <div class="text-primary">
                  <i class="ri-stack-line font-size-24"></i>
                </div>
              </div>
            </div>
            <div class="border-top py-3 card-body">
              <div class="text-truncate">
                <span class="badge badge-soft-success font-size-11 me-1">
                  <i class="mdi mdi-menu-up"> </i> 2.4%
                </span>
                <span class="text-muted ms-2">From previous period</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
