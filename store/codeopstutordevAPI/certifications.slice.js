import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_certification_list = createAsyncThunk(
  "certifications/api_v1_certification_list",
  async payload => {
    const response = await apiService.api_v1_certification_list(payload)
    return response.data
  }
)
export const api_v1_certification_create = createAsyncThunk(
  "certifications/api_v1_certification_create",
  async payload => {
    const response = await apiService.api_v1_certification_create(payload)
    return response.data
  }
)
export const api_v1_certification_retrieve = createAsyncThunk(
  "certifications/api_v1_certification_retrieve",
  async payload => {
    const response = await apiService.api_v1_certification_retrieve(payload)
    return response.data
  }
)
export const api_v1_certification_update = createAsyncThunk(
  "certifications/api_v1_certification_update",
  async payload => {
    const response = await apiService.api_v1_certification_update(payload)
    return response.data
  }
)
export const api_v1_certification_partial_update = createAsyncThunk(
  "certifications/api_v1_certification_partial_update",
  async payload => {
    const response = await apiService.api_v1_certification_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_certification_destroy = createAsyncThunk(
  "certifications/api_v1_certification_destroy",
  async payload => {
    const response = await apiService.api_v1_certification_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const certificationsSlice = createSlice({
  name: "certifications",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_certification_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_certification_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_certification_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_certification_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_certification_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_certification_partial_update.fulfilled,
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
        api_v1_certification_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_certification_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_certification_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_certification_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_certification_list,
  api_v1_certification_create,
  api_v1_certification_retrieve,
  api_v1_certification_update,
  api_v1_certification_partial_update,
  api_v1_certification_destroy,
  slice: certificationsSlice
}
