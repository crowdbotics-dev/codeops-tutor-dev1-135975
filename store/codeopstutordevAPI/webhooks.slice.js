import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_webhook_list = createAsyncThunk(
  "webhooks/api_v1_webhook_list",
  async payload => {
    const response = await apiService.api_v1_webhook_list(payload)
    return response.data
  }
)
export const api_v1_webhook_create = createAsyncThunk(
  "webhooks/api_v1_webhook_create",
  async payload => {
    const response = await apiService.api_v1_webhook_create(payload)
    return response.data
  }
)
export const api_v1_webhook_retrieve = createAsyncThunk(
  "webhooks/api_v1_webhook_retrieve",
  async payload => {
    const response = await apiService.api_v1_webhook_retrieve(payload)
    return response.data
  }
)
export const api_v1_webhook_update = createAsyncThunk(
  "webhooks/api_v1_webhook_update",
  async payload => {
    const response = await apiService.api_v1_webhook_update(payload)
    return response.data
  }
)
export const api_v1_webhook_partial_update = createAsyncThunk(
  "webhooks/api_v1_webhook_partial_update",
  async payload => {
    const response = await apiService.api_v1_webhook_partial_update(payload)
    return response.data
  }
)
export const api_v1_webhook_destroy = createAsyncThunk(
  "webhooks/api_v1_webhook_destroy",
  async payload => {
    const response = await apiService.api_v1_webhook_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const webhooksSlice = createSlice({
  name: "webhooks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_webhook_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_webhook_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_webhook_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_webhook_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_webhook_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_webhook_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_webhook_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_webhook_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_webhook_list,
  api_v1_webhook_create,
  api_v1_webhook_retrieve,
  api_v1_webhook_update,
  api_v1_webhook_partial_update,
  api_v1_webhook_destroy,
  slice: webhooksSlice
}
