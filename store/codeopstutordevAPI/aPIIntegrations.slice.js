import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_apiintegration_list = createAsyncThunk(
  "aPIIntegrations/api_v1_apiintegration_list",
  async payload => {
    const response = await apiService.api_v1_apiintegration_list(payload)
    return response.data
  }
)
export const api_v1_apiintegration_create = createAsyncThunk(
  "aPIIntegrations/api_v1_apiintegration_create",
  async payload => {
    const response = await apiService.api_v1_apiintegration_create(payload)
    return response.data
  }
)
export const api_v1_apiintegration_retrieve = createAsyncThunk(
  "aPIIntegrations/api_v1_apiintegration_retrieve",
  async payload => {
    const response = await apiService.api_v1_apiintegration_retrieve(payload)
    return response.data
  }
)
export const api_v1_apiintegration_update = createAsyncThunk(
  "aPIIntegrations/api_v1_apiintegration_update",
  async payload => {
    const response = await apiService.api_v1_apiintegration_update(payload)
    return response.data
  }
)
export const api_v1_apiintegration_partial_update = createAsyncThunk(
  "aPIIntegrations/api_v1_apiintegration_partial_update",
  async payload => {
    const response = await apiService.api_v1_apiintegration_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_apiintegration_destroy = createAsyncThunk(
  "aPIIntegrations/api_v1_apiintegration_destroy",
  async payload => {
    const response = await apiService.api_v1_apiintegration_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const aPIIntegrationsSlice = createSlice({
  name: "aPIIntegrations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_apiintegration_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_apiintegration_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_apiintegration_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_apiintegration_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_apiintegration_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_apiintegration_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_apiintegration_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_apiintegration_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_apiintegration_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_apiintegration_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_apiintegration_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_apiintegration_list,
  api_v1_apiintegration_create,
  api_v1_apiintegration_retrieve,
  api_v1_apiintegration_update,
  api_v1_apiintegration_partial_update,
  api_v1_apiintegration_destroy,
  slice: aPIIntegrationsSlice
}
