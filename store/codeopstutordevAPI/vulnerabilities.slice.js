import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vulnerability_list = createAsyncThunk(
  "vulnerabilities/api_v1_vulnerability_list",
  async payload => {
    const response = await apiService.api_v1_vulnerability_list(payload)
    return response.data
  }
)
export const api_v1_vulnerability_create = createAsyncThunk(
  "vulnerabilities/api_v1_vulnerability_create",
  async payload => {
    const response = await apiService.api_v1_vulnerability_create(payload)
    return response.data
  }
)
export const api_v1_vulnerability_retrieve = createAsyncThunk(
  "vulnerabilities/api_v1_vulnerability_retrieve",
  async payload => {
    const response = await apiService.api_v1_vulnerability_retrieve(payload)
    return response.data
  }
)
export const api_v1_vulnerability_update = createAsyncThunk(
  "vulnerabilities/api_v1_vulnerability_update",
  async payload => {
    const response = await apiService.api_v1_vulnerability_update(payload)
    return response.data
  }
)
export const api_v1_vulnerability_partial_update = createAsyncThunk(
  "vulnerabilities/api_v1_vulnerability_partial_update",
  async payload => {
    const response = await apiService.api_v1_vulnerability_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_vulnerability_destroy = createAsyncThunk(
  "vulnerabilities/api_v1_vulnerability_destroy",
  async payload => {
    const response = await apiService.api_v1_vulnerability_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vulnerabilitiesSlice = createSlice({
  name: "vulnerabilities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_vulnerability_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vulnerability_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vulnerability_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vulnerability_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vulnerability_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_vulnerability_partial_update.fulfilled,
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
        api_v1_vulnerability_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_vulnerability_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vulnerability_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vulnerability_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_vulnerability_list,
  api_v1_vulnerability_create,
  api_v1_vulnerability_retrieve,
  api_v1_vulnerability_update,
  api_v1_vulnerability_partial_update,
  api_v1_vulnerability_destroy,
  slice: vulnerabilitiesSlice
}
