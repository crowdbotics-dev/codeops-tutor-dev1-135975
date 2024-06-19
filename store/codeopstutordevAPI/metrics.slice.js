import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_metric_list = createAsyncThunk(
  "metrics/api_v1_metric_list",
  async payload => {
    const response = await apiService.api_v1_metric_list(payload)
    return response.data
  }
)
export const api_v1_metric_create = createAsyncThunk(
  "metrics/api_v1_metric_create",
  async payload => {
    const response = await apiService.api_v1_metric_create(payload)
    return response.data
  }
)
export const api_v1_metric_retrieve = createAsyncThunk(
  "metrics/api_v1_metric_retrieve",
  async payload => {
    const response = await apiService.api_v1_metric_retrieve(payload)
    return response.data
  }
)
export const api_v1_metric_update = createAsyncThunk(
  "metrics/api_v1_metric_update",
  async payload => {
    const response = await apiService.api_v1_metric_update(payload)
    return response.data
  }
)
export const api_v1_metric_partial_update = createAsyncThunk(
  "metrics/api_v1_metric_partial_update",
  async payload => {
    const response = await apiService.api_v1_metric_partial_update(payload)
    return response.data
  }
)
export const api_v1_metric_destroy = createAsyncThunk(
  "metrics/api_v1_metric_destroy",
  async payload => {
    const response = await apiService.api_v1_metric_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_metric_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_metric_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_metric_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_metric_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_metric_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_metric_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_metric_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_metric_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_metric_list,
  api_v1_metric_create,
  api_v1_metric_retrieve,
  api_v1_metric_update,
  api_v1_metric_partial_update,
  api_v1_metric_destroy,
  slice: metricsSlice
}
