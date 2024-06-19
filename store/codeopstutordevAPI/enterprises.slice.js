import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_enterprise_list = createAsyncThunk(
  "enterprises/api_v1_enterprise_list",
  async payload => {
    const response = await apiService.api_v1_enterprise_list(payload)
    return response.data
  }
)
export const api_v1_enterprise_create = createAsyncThunk(
  "enterprises/api_v1_enterprise_create",
  async payload => {
    const response = await apiService.api_v1_enterprise_create(payload)
    return response.data
  }
)
export const api_v1_enterprise_retrieve = createAsyncThunk(
  "enterprises/api_v1_enterprise_retrieve",
  async payload => {
    const response = await apiService.api_v1_enterprise_retrieve(payload)
    return response.data
  }
)
export const api_v1_enterprise_update = createAsyncThunk(
  "enterprises/api_v1_enterprise_update",
  async payload => {
    const response = await apiService.api_v1_enterprise_update(payload)
    return response.data
  }
)
export const api_v1_enterprise_partial_update = createAsyncThunk(
  "enterprises/api_v1_enterprise_partial_update",
  async payload => {
    const response = await apiService.api_v1_enterprise_partial_update(payload)
    return response.data
  }
)
export const api_v1_enterprise_destroy = createAsyncThunk(
  "enterprises/api_v1_enterprise_destroy",
  async payload => {
    const response = await apiService.api_v1_enterprise_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const enterprisesSlice = createSlice({
  name: "enterprises",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_enterprise_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_enterprise_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_enterprise_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_enterprise_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_enterprise_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_enterprise_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_enterprise_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_enterprise_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_enterprise_list,
  api_v1_enterprise_create,
  api_v1_enterprise_retrieve,
  api_v1_enterprise_update,
  api_v1_enterprise_partial_update,
  api_v1_enterprise_destroy,
  slice: enterprisesSlice
}
