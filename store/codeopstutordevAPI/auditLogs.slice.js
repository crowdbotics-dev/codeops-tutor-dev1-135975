import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_auditlog_list = createAsyncThunk(
  "auditLogs/api_v1_auditlog_list",
  async payload => {
    const response = await apiService.api_v1_auditlog_list(payload)
    return response.data
  }
)
export const api_v1_auditlog_create = createAsyncThunk(
  "auditLogs/api_v1_auditlog_create",
  async payload => {
    const response = await apiService.api_v1_auditlog_create(payload)
    return response.data
  }
)
export const api_v1_auditlog_retrieve = createAsyncThunk(
  "auditLogs/api_v1_auditlog_retrieve",
  async payload => {
    const response = await apiService.api_v1_auditlog_retrieve(payload)
    return response.data
  }
)
export const api_v1_auditlog_update = createAsyncThunk(
  "auditLogs/api_v1_auditlog_update",
  async payload => {
    const response = await apiService.api_v1_auditlog_update(payload)
    return response.data
  }
)
export const api_v1_auditlog_partial_update = createAsyncThunk(
  "auditLogs/api_v1_auditlog_partial_update",
  async payload => {
    const response = await apiService.api_v1_auditlog_partial_update(payload)
    return response.data
  }
)
export const api_v1_auditlog_destroy = createAsyncThunk(
  "auditLogs/api_v1_auditlog_destroy",
  async payload => {
    const response = await apiService.api_v1_auditlog_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const auditLogsSlice = createSlice({
  name: "auditLogs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_auditlog_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_auditlog_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_auditlog_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_auditlog_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_auditlog_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_auditlog_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_auditlog_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_auditlog_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_auditlog_list,
  api_v1_auditlog_create,
  api_v1_auditlog_retrieve,
  api_v1_auditlog_update,
  api_v1_auditlog_partial_update,
  api_v1_auditlog_destroy,
  slice: auditLogsSlice
}
